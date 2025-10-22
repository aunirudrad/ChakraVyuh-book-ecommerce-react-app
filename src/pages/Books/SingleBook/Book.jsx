import React from 'react';
import { CiStar } from "react-icons/ci";
import { NavLink } from 'react-router';

const Book = ({ singleBook }) => {
    console.log(singleBook);

    const { bookId,bookName, author, image, rating, tags, category } = singleBook;
    // const bookData = use(bookPromise);
    // console.log();
    return (
        <NavLink to={`/bookDetails/${bookId}`}>
            <div>
                <div className="card bg-gray-50 w-96 p-6 mx-auto shadow-sm">
                    <div className='bg-gray-100 rounded-2xl'>
                        <figure className='w-80 mx-auto  h-52'>
                            <img className='h-[166px]'
                                src={image}
                                alt="book-image" />
                        </figure>
                    </div>
                    <div className="card-body">
                        <div className='flex gap-3 items-center'>
                            {
                                tags.map(tag => <div className="badge badge-secondary">{tag}</div>)
                            }
                        </div>
                        <h2 className="card-title text-2xl font-bold">
                            {bookName}
                        </h2>
                        <p className='font-medium'>By: {author}</p>
                        <hr className='border-dashed my-4' />
                        <div className=" flex justify-between items-center">
                            <div className="">{category}</div>
                            <div className="flex gap-3 items-center font-medium">{rating} <CiStar size='20' /> </div>
                        </div>
                    </div>
                </div>
            </div>
        </NavLink>
    );
};

export default Book;