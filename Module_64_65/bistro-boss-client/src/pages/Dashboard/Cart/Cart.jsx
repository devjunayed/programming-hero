import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";
import { RiDeleteBin2Line } from "react-icons/ri";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Cart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const axiosSecure = useAxiosSecure();

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch();
                        }
                    })

            }
        });
    }
    return (
        <div className="flex  justify-center flex-col w-10/12  mx-auto">
            <SectionTitle
                heading="wanna add more?"
                subHeading="My Cart"
            />

            <div className="bg-white p-8">
                <div className="flex justify-between">
                    <h2 className="text-xl font-bold font-['Cinzel']">Items Orders: {cart.length}</h2>
                    <h2 className="text-xl font-bold font-['Cinzel']">Total Price: ${totalPrice}</h2>
                    <button className="btn btn-primary bg-[#D1A054] border-none hover:bg-[#c28a37] text-white">Pay</button>
                </div>
                <div className="overflow-x-auto mt-4 shadow-xl rounded-2xl">
                    <table className="table ">
                        {/* head */}
                        <thead className="text-white bg-[#c28a37]">
                            <tr >
                                <th></th>
                                <th>ITEM IMAGE</th>
                                <th>ITEM NAME</th>
                                <th>PRICE</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.length === 0 &&
                                <div className="h-24 text-center w-full justify-center  flex items-center">
                                    <p className="text-3xl text-center">No items</p>
                                </div>
                            }
                            {
                                cart.map((item, index) =>
                                    <tr key={item._id}>
                                        <th>
                                            <label>
                                                {index + 1}
                                            </label>
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={`${item.image}`} />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td>${item.price}</td>
                                        <th>
                                            <button onClick={() => handleDelete(item._id)} className="btn bg-red-500 text-white text-xl h-10 w-10 btn-ghost btn-xs"><RiDeleteBin2Line /></button>
                                        </th>
                                    </tr>

                                )
                            }
                            {/* row 1 */}

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default Cart;