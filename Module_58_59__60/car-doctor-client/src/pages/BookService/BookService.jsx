import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const BookService = () => {
    const service = useLoaderData();
    const { _id, title, price, img } = service;
    const { user } = useContext(AuthContext);

    const handleBookOrder = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;

        const order = {
            customerName: name,
            email,
            date,
            service: title,
            service_id: _id,
            price: price,
            img: img
        }
        console.log(order);

        fetch('http://localhost:3000/bookings',{
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => console.log(data));
    }

  

    return (
        <div>
            <h2 className="text-center text-3xl font-bold my-4">Book Service: {title}</h2>
            <form className="card-body" onSubmit={handleBookOrder}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="name" defaultValue={user?.displayName} name="name" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" placeholder="date" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due amount</span>
                        </label>
                        <input type="text" name="price" defaultValue={"$ " + price} placeholder="price" className="input input-bordered" required />

                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary bg-red-700 hover:bg-red-800   border-none" type="submit" value="Order Confirm" />
                </div>
            </form>
        </div>
    );
};

export default BookService;