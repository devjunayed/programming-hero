import PropTypes from 'prop-types';

const Cover = ({ bgImg, title, description, isBanner }) => {
    return (
        <div className="hero min-h-[80vh]" style={{ backgroundImage: `url(${bgImg})` }}>
            <div className={`hero-content ${isBanner && "mt-[60px]"} bg-opacity-50 text-white  px-56 py-20 text-center bg-black`}>
                <div className="max-w-md">
                    <h1 className="mb-5 capitalize text-5xl font-extrabold text-white  font-['Cinzel']">{title}</h1>
                    <p className="mb-5 font-['Cinzel'] text-center">{description}</p>
                </div>
            </div>
        </div>
    );
};


Cover.propTypes = {
    bgImg: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    isBanner: PropTypes.bool

}




export default Cover;