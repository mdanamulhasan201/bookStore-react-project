import React from 'react';
import { Link } from 'react-router-dom';


const BookCard = ({ book }) => {
    
 
    return (
        <Link to= {`../book/${book.isbn13}`}>
            <div className='overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl'>
            <img src={book.image} alt="book" className='object-cover w-full h-56 md:h-64 lg:h-80' />
            <div className='bg-black bg-opacity-75 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 transition-opacity duration-200 px-6 py-4 flex flex-col text-center'>
                <p className='font-bold text-xl'>{book.title}</p>
                <br />
                <p className=''>{book.subtitle.substring(0, 45)}...</p>
                <br />
                <p className='mt-auto font-bold'>price: {book.price}</p>

            </div>
        </div>
        </Link>
    );
};

export default BookCard;