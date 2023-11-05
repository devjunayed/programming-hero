import PropTypes from 'prop-types';
import { BsArrowRight } from 'react-icons/bs';
import {Link} from "react-router-dom";

const Service = ({ service }) => {

    const { _id, title, img, price } = service;
    return (
        <div className="card shadow-xl">
            <figure className="px-10 pt-10 h-full ">
                <img src={img} alt={title} className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title ">{title}</h2>
                <div className="flex text-red-700 font-bold">
                    <p className=''>Price: ${price}</p>
                    <Link to={`/checkout/${_id}`}>
                        <button className=""><BsArrowRight /></button>
                    </Link>
                </div>
            </div>

        </div>
    );




};
Service.propTypes = {
    service: PropTypes.object
}
export default Service;