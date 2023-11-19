import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ChefReco from '../../../assets/home/slide5.jpg';

const ChefRecommends = () => {
    return (
        <section className="">
            <SectionTitle
                heading={"cheff recommends"}
                subHeading={"Should try"}
            ></SectionTitle>

            <div className="grid md:grid-cols-3 gap-10 w-10/12 mx-auto  grid-cols-1">
                <div className="card w-full bg-gray-100">
                    <figure className="">
                        <img src={ChefReco} alt="Shoes" className="rounded-xl h-52 w-full object-cover" />
                    </figure>
                    <div className="card-body  items-center text-center">
                        <h2 className="card-title">Caser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn border-t-0 border-r-0 border-l-0 uppercase bg-white text-yellow-600 hover:bg-black border-b-4 border-yellow-600 ">add to cart</button>
                        </div>
                    </div>
                </div>
              
                <div className="card w-full bg-gray-100">
                    <figure className="">
                        <img src={ChefReco} alt="Shoes" className="rounded-xl h-52 w-full object-cover" />
                    </figure>
                    <div className="card-body  items-center text-center">
                        <h2 className="card-title">Caser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn border-t-0 border-r-0 border-l-0 uppercase bg-white text-yellow-600 hover:bg-black border-b-4 border-yellow-600 ">add to cart</button>
                        </div>
                    </div>
                </div>
              
                <div className="card w-full bg-gray-100">
                    <figure className="">
                        <img src={ChefReco} alt="Shoes" className="rounded-xl h-52 w-full object-cover" />
                    </figure>
                    <div className="card-body  items-center text-center">
                        <h2 className="card-title">Caser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn border-t-0 border-r-0 border-l-0 uppercase bg-white text-yellow-600 hover:bg-black border-b-4 border-yellow-600 ">add to cart</button>
                        </div>
                    </div>
                </div>
              
              
            </div>
        </section>
    );
};

export default ChefRecommends;