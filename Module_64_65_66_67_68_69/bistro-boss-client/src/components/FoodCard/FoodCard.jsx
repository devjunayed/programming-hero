import PropTypes from 'prop-types';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useCart from '../../hooks/useCart';

const FoodCard = ({ item }) => {
    const AxiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { name, image, price, recipe, _id } = item;
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = useCart();



    const handleAddToCart = () => {
        if (user && user?.email) {
            console.log(user.email, item);
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price,
                recipe
            }

            AxiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log('added data')
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title:  `${name} added to cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch();
                    }
                })

        } else {
            Swal.fire({
                title: "You are not logged in!",
                text: "Please login to add to the cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location }, replace: true })
                }
            });
        }
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className='bg-black absolute right-4 top-2 text-white py-1 px-4 rounded text-center'>${price}</p>
            <div className="card-body relative">
                <h2 className="card-title justify-center">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={handleAddToCart} className="btn btn-primary border-0 border-b-2 border-b-[#BB8506] bg-slate-100 text-[#BB8506] hover:bg-black hover:border-b-[#BB8506] hover:text-[#BB8506]  uppercase">Add to cart</button>
                </div>
            </div>
        </div>
    );
};


FoodCard.propTypes = {
    item: PropTypes.object
}


export default FoodCard;