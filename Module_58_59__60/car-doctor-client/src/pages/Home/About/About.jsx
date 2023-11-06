import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';
const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/4  rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 absolute left-1/2 lg:left-56 border-8 border-white top-1/2 rounded-lg shadow-2xl" />
                </div>
                <div className='lg:w-1/2 space-y-6'>
                    <h3 className="text-3xl text-orange-700 font-bold">About Us</h3>
                    <h1 className="text-5xl font-bold w-8/12">We are qualified & of experience in this field</h1>
                    <p className="">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. .</p>
                    <p className="">the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. </p>
                    <button className="btn btn-primary bg-red-600 hover:bg-red-800 border-none">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;