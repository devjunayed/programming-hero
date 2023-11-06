import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingRow from "./BookingRow";
import axios from "axios";

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:3000/bookings?email=${user?.email}`;

    useEffect(() => {
        axios.get(url, {withCredentials: true})
        .then(res => {
            setBookings(res.data);
        })
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => setBookings(data));
    }, [url]);


    const handleDelete = id => {
        const proceed = confirm("Are you sure you want to delete?");
        if(proceed){
            fetch(`http://localhost:3000/bookings/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    alert('Deleted successfully');
                    const remaining = bookings.filter(booking => booking._id !== id);
                    setBookings(remaining);
                }
            })
        }
    }

    const handleConfirm = (id) => {
        fetch(`http://localhost:3000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify({status: 'confirm'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                const remaining = bookings.filter(booking => booking._id !== id);
                const updated = bookings.find(booking => booking._id === id);
                updated.status = 'confirm';
                const newBookings = [updated, ...remaining];
                setBookings(newBookings);
                alert('Approved');
            }
        })
    }

    return (
        <div className="w-10/12 mx-auto text-center">
            <h2 className="text-center font-bold text-3xl mb-10">Total Bookings: {bookings?.length}</h2>
            <table className="mx-auto table">
                <thead className="bg-gray-400">
                    <tr className="text-center font-bold text-lg">
                        <th></th>
                        <th>Image</th>
                        <th>Service</th>
                        <th>Date</th>
                        <th>Price</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map((rowData) => <BookingRow key={rowData._id} data={rowData} handleDelete={handleDelete} handleConfirm={handleConfirm}></BookingRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Bookings;