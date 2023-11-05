import { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, []);
    return (
        <div className="mt-8">
            <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold text-orange-700">Service</h3>
                <h2 className="text-5xl">Our Service Area</h2>
                <p>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {
                    services.map(service => <Service key={service._id} service={service} /> )
                }
            </div>

            <div className="mx-auto w-full text-center my-10">
                <button className="btn  btn-outline text-red-700 capitalize hover:bg-red-800 hover:border-none">More Services</button>
            </div>
        </div>
    );
};

export default Services; 