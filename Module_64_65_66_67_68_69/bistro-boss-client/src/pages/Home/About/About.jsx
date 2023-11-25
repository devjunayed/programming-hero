import ChefService from '../../../assets/home/chef-service.jpg';

const About = () => {
    return (
        <div className="hero min-h-[70vh] bg-fixed" style={{ backgroundImage: `url(${ChefService})` }}>
            <div className="hero-content px-56 py-20 text-center bg-white">
                <div className="max-w-2xl">
                    <h1 className="mb-5 text-5xl  font-['Cinzel'] font-light">Bistro Boss</h1>
                    <p className="mb-5  text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                </div>
            </div>
        </div>
    );
};

export default About;