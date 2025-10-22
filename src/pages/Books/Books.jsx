import React, { Suspense } from 'react';
import Book from './SingleBook/Book';
import { IoReloadCircle } from "react-icons/io5";

const Books = ({data}) => {
    // const bookPromise = fetch("/data/booksData.json").then(res => res.json());
    return (
        <div>
            <h1 className='text-4xl font-bold text-center mb-8'>Books</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mb-12'>
                <Suspense fallback={<IoReloadCircle size='40' />}>
                    {
                        data.map((singleBook) => <Book key={singleBook.bookId} singleBook={singleBook}></Book>)
                    }
                </Suspense>
            </div>
        </div>
    );
};

export default Books;