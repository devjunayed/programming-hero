import PropTypes from 'prop-types';

const BookingRow = ({ data, handleDelete, handleConfirm }) => {
    return (
        <tr className="text-center">
            <td>
                <button onClick={() => handleDelete(data._id)} className='btn btn-circle btn-sm bg-black text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </td>
            <td className='w-1/6'>
                <div className='flex gap-4 items-center'>

                    <img src={data.img} className='rounded-lg mx-auto w-7/12' alt="" />
                </div>
            </td>
            <td >{data.service}</td>
            <td>{data.date}</td>
            <td>{data.price}</td>
            <td>
                {
                    data.status === 'confirm' ?
                        <span className='text-green-600'>Confirmed</span>
                        :
                        <button onClick={() => handleConfirm(data._id)}>
                            Please Confirm
                        </button>
                }

            </td>
        </tr>
    );
};

BookingRow.propTypes = {
    data: PropTypes.object,
    handleDelete: PropTypes.func,
    handleConfirm: PropTypes.func
}

export default BookingRow;