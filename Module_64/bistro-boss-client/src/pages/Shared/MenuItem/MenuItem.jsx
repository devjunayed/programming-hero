import PropTypes from 'prop-types';

const MenuItem = ({item}) => {
    const {name, image, price, recipe} = item;

    return (
        <div className='flex space-x-2 mb-4'>
            <img className="w-[70px] h-[70px] rounded-e-full rounded-b-full" src={image} alt="" />
            <div>
                <h3 className='uppercase'>{name}  --------------------</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-600'>${price}</p>
        </div>
    );
};

MenuItem.propTypes = {
    item: PropTypes.object
}

export default MenuItem;