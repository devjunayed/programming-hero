import PropTypes from 'prop-types';

const CoffeeCard = ({coffee}) => {
    const {name, quantity, supplier, taste, category, details, photo} = coffee;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">New movie is released!</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>
    );
};


CoffeeCard.propTypes = {
    coffee: PropTypes.object
}

export default CoffeeCard;