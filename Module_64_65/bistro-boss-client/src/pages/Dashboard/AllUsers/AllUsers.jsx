import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get("/users")
            return res.data;
        }
    })

    const handleDeleteUser = (user) => {
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
                axiosSecure.delete(`/users/${user._id}`)
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

    const handleMakeAdmin = (user) => {
        axiosSecure.patch(`users/admin/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500,
                    })
                    refetch();
                }
            })
    }
    return (
        <div>
            <SectionTitle
                heading="Manage All Users"
                subHeading="How many??"
            />
            <div className="w-11/12 mx-auto bg-white p-10">
                <h2 className="text-2xl font-['Cinzel'] font-extrabold">Total Users: {users.length}</h2>
                <div className="overflow-x-auto rounded-t-xl mt-4">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead className="bg-[#D1A054] text-white font-xl uppercase">
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {
                                            user.role === 'admin' ? <p className="text-green-500 font-bold uppercase text-['Cinzel']">
                                                Admin
                                            </p> :
                                                <button onClick={() => handleMakeAdmin(user)} className="btn bg-[#D1A054] text-white btn-ghost text-xl">
                                                    <FaUsers></FaUsers>
                                                </button>}</td>
                                    <td>
                                        <button onClick={() => handleDeleteUser(user)} className="btn bg-red-500 text-white btn-ghost">
                                            <FaTrashAlt></FaTrashAlt>
                                        </button>
                                    </td>
                                </tr>)
                            }



                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default AllUsers;