import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';
const BreakingNews = () => {
    return (
        <div className='flex gap-1'>
            <button className="btn bg-red-600 text-white hover:bg-red-800">latest</button>
            <Marquee pauseOnHover={true} speed={70}>
                <Link to="/">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.... 
                </Link>
                <p> | </p>
                <Link to="/">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.... 
                </Link>
                <p> | </p>
                <Link to="/">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.... 
                </Link>
                <p> | </p>
                <Link to="/">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.... 
                </Link>
                <p> | </p>
            </Marquee>
        </div>
    );
};

export default BreakingNews;