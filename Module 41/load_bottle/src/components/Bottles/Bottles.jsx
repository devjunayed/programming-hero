import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart]  = useState([]);


    useEffect(() => {
        fetch(
            "https://raw.githubusercontent.com/ProgrammingHero1/memorable-water-bottle/main/public/bottles.json"
        )
            .then((res) => res.json())
            .then((data) => setBottles(data));
    }, []);

    const handleAddToCart = (bottle) => {
        setCart([...cart, bottle]);

    };

    return (
        <div>
            <h2>Bottles Here: {bottles.length}</h2>
            <h4>Cart: {cart.length}</h4>
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
