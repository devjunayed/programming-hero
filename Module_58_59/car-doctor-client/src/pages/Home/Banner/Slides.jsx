import PropTypes from 'prop-types';


const Slides = ({ image, id, prev, next, title, descripton, btn1, btn2 }) => {
    return (
        <div id={id} className="carousel-item relative w-full">
            <img src={image} className="w-full" />
            <div className="absolute flex bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] items-center   h-full  ">
                <div className="text-white w-7/12 space-y-7 pl-10">
                    <h2 className='font-bold text-5xl  w-9/12'>{title}</h2>
                    <p>{descripton} </p>
                    <button className='btn hover:text-black bg-red-600 text-white border-none capitalize mr-4'>{btn1}</button>
                    <button className='btn btn-outline text-white capitalize'>{btn2}</button>
                </div>
            </div>

            <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={prev} className="btn  bg-[rgba(25,25,25,0.5)] hover:text-black text-white  btn-circle">❮</a>
                <a href={next} className="btn   bg-[rgba(25,25,25,0.5)] hover:text-black text-white btn-circle">❯</a>
            </div>
        </div>
    );
};


Slides.propTypes = {
    image: PropTypes.string,
    id: PropTypes.string,
    prev: PropTypes.string,
    next: PropTypes.string,
    title: PropTypes.string,
    descripton: PropTypes.string,
    btn1: PropTypes.string,
    btn2: PropTypes.string,
}

export default Slides;