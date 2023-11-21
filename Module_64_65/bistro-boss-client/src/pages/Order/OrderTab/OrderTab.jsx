import FoodCard from "../../../components/FoodCard/FoodCard";
import PropTypes from 'prop-types';


const OrderTab = ({items}) => {
    return (
        <div className="grid grid-cols-3 gap-4 justify-center">
            {
                items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
            }
        </div>
    );
};

OrderTab.propTypes = {
    items: PropTypes.object
}

export default OrderTab;