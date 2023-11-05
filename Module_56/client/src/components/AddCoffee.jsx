import Swal from 'sweetalert2';

const AddCoffee = () => {

    const handleAddCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = {name, quantity, supplier, taste, category, details, photo};


        fetch('http://localhost:3000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
           if(data.insertedId){
             Swal.fire({
                title: 'Success!',
                text: 'Coffee added',
                icon: 'success',
                confirmButtonText: 'Okay'
             })
           }
        });

    }
    return (

        <>
            <h1 className="text-4xl mb-4">Add a Coffee</h1>
            <form onSubmit={handleAddCoffee}>
                <div className="flex flex-col gap-10 justify-center w-3/4 mx-auto py-10 bg-[#F4F3F0]">
                    {/* form row name and quantity*/}
                    <div className="flex gap-4 justify-center">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Coffee Name</span>
                            </label>
                            <label className="input-group">
                                <span>Name</span>
                                <input type="text" name="name" placeholder="Coffee Name" className="input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <label className="input-group">
                                <span>Quantity</span>
                                <input type="number" name="quantity" placeholder="Available Quantity" className="input input-bordered" />
                            </label>
                        </div>
                    </div>
                    {/* form supplier row  */}
                    <div className="flex gap-4 justify-center">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Supplier Name</span>
                            </label>
                            <label className="input-group">
                                <span>Name</span>
                                <input type="text" name="supplier" placeholder="Supplier Name" className="input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <label className="input-group">
                                <span>Taste</span>
                                <input type="text" name="taste" placeholder="Taste" className="input input-bordered" />
                            </label>
                        </div>
                    </div>
                    {/* form category and details row */}
                    <div className="flex gap-4 justify-center">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <label className="input-group">
                                <span>Category</span>
                                <input type="text" name="category" placeholder="Category" className="input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <label className="input-group">
                                <span>Details</span>
                                <input type="text" name="details" placeholder="Details" className="input input-bordered" />
                            </label>
                        </div>
                    </div>
                    {/* form row */}
                    <div className="px-36 w-full">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <label className="input-group">
                                <span>Photo URL</span>
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>

                    </div>
                    <input type="submit" className="btn mx-auto  bg-black text-white hover:text-black w-8/12" value="Add Coffee" />
                </div>

            </form>
        </>
    );
};

export default AddCoffee;