import PropTypes from 'prop-types';


const FoodCard = ({item}) => {
  
    const {name, image, price, recipe} = item;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className='bg-black absolute right-4 top-2 text-white py-1 px-4 rounded text-center'>${price}</p>
            <div className="card-body relative">
                <h2 className="card-title justify-center">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary border-0 border-b-2 border-b-[#BB8506] bg-slate-100 text-[#BB8506] hover:bg-black hover:border-b-[#BB8506] hover:text-[#BB8506]  uppercase">Add to cart</button>
                </div>
            </div>
        </div>
    );
};


FoodCard.propTypes = {
    item: PropTypes.object
}


export default FoodCard;