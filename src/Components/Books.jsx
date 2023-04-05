import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import BookCard from './BookCard';
import LoadingSpinner from './LoadingSpinner';

const Books = () => {

      // loader
      const navigation = useNavigation()
      console.log(navigation.state)
      if(navigation.state === 'loading'){
          return <LoadingSpinner></LoadingSpinner>
      }

    const { books } = useLoaderData()

    return (
        <div className='my-container'>
            <div className='grid gap-5 mb-8 lg:grid-cols-4 sm:grid-cols-2'>         {
                books.map(book => (
                    <BookCard 
                    key={book.isbn13} 
                    book={book}
                    ></BookCard>
                ))
            }
            </div>
        </div>
    );
};

export default Books;