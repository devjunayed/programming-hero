import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import { addToLS, getStoredCart, removeFromLS } from "../../utilities/loacalstorage";
import Cart from "../Cart/Cart";

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch(
            "https://raw.githubusercontent.com/ProgrammingHero1/memorable-water-bottle/main/public/bottles.json"
        )
            .then((res) => res.json())
            .then((data) => setBottles(data));
    }, []);

    // load cart from loacl storage
    useEffect(() => {
        if (bottles.length > 0) {   
            const storedCart = getStoredCart();
            const savedCart = [];
            for(const id of storedCart){
                console.log(id);
                const bottle = bottles.find(bottle => bottle.id === id);
                if(bottle){
                    savedCart.push(bottle);
                }
            }
            console.log(savedCart);
            setCart(savedCart);
        }
    }, [bottles]);

    const handleAddToCart = (bottle) => {
        setCart([...cart, bottle]);
        addToLS(bottle.id);
    };

    const handleRemoveFromCart = id => {
        // visual cart remove
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart);
        // remove from LS
        removeFromLS(id);
    }
    return (
        <div>
            <h2>Bottles Here: {bottles.length}</h2>
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
            <div className="bottle-container">
                {bottles.map((bottle) => (
                    <Bottle
                        key={bottle.id}
                        bottle={bottle}
                        handleAddToCart={handleAddToCart}
                    >

                    </Bottle>
                ))}
            </div>
        </div>
    );
};

export default Bottles;
