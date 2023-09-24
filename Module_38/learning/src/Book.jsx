import './Book.css';

export default function Book({book}){
    const {name, price} = book;
    return (
        <div className='book'>
            <h3>Book Name: {name}</h3>

            <p>Price: {price}</p>
        </div>
    )
}