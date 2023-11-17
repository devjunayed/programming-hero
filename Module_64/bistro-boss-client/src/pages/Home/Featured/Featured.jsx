import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import FeaturedImg from '../../../assets/home/featured.jpg';

const Featured = () => {
    return (
        <section className="my-10">
            {/* <SectionTitle
                heading={}
                subHeading={}
            >
            </SectionTitle> */}
            <div className="hero min-h-[80vh]" style={{ backgroundImage: `url(${FeaturedImg})` }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-4xl">
                        <SectionTitle
                            heading={"From our menu"}
                            subHeading={"Check it out"}
                        />
                        <div className="card card-side">
                            <figure className="w-5/12"><img src={FeaturedImg} alt="Movie" /></figure>
                            <div className="card-body w-7/12 mt-2">
                                <h2 className="card-title">March 20, 2023</h2>
                                <h2 className="card-title">WHERE CAN I GET SOME?</h2>
                                <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                                <div className="card-actions justify-start">
                                    <button className="btn border-b-2 border-white bg-transparent border-t-0 border-l-0 border-r-0 text-white uppercase">Read more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;