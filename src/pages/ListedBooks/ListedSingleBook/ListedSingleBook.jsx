import React from 'react';
import { NavLink } from 'react-router';

const ListedSingleBook = ({singleBook}) => {
    // Destructure the book data
    const {
        bookId,
        bookName,
        author,
        image,
        totalPages,
        rating,
        category,
        tags,
        publisher,
        yearOfPublishing
    } = singleBook;

    return (
        <div className="card md:card-side bg-base-100 shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow duration-300 mb-6">
            <figure className="lg:w-1/4 p-6 bg-gray-50">
                <img 
                    src={image} 
                    alt={bookName}
                    className="rounded-lg object-cover h-52 md:h-60 w-48 md:w-36 "
                />
            </figure>
            <div className="card-body lg:w-3/4 bg-white">
                <h2 className="card-title text-2xl font-bold text-gray-800">
                    {bookName}
                </h2>
                <p className="text-gray-600 font-medium">By : {author}</p>
                
                <div className="flex flex-wrap gap-4 items-center my-2">
                    <div className="flex gap-2 items-center">
                        <span className="font-semibold text-gray-700">Tag</span>
                        {tags.map((tag, index) => (
                            <span 
                                key={index} 
                                className="badge badge-success badge-outline text-green-600 font-medium px-4 py-3"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        <span>Year of Publishing: {yearOfPublishing}</span>
                    </div>
                </div>

                <div className="flex flex-wrap gap-6 text-gray-600 my-2">
                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                        <span>Publisher: {publisher}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                        </svg>
                        <span>Page {totalPages}</span>
                    </div>
                </div>

                <div className="divider my-1"></div>

                <div className="card-actions items-center justify-between">
                    <div className="flex gap-3 items-center">
                        <span className="px-5 py-2 bg-blue-50 text-blue-600 rounded-full font-medium">
                            Category: {category}
                        </span>
                        <span className="px-5 py-2 bg-yellow-50 text-yellow-600 rounded-full font-medium flex items-center gap-1">
                            Rating: {rating}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                            </svg>
                        </span>
                    </div>
                    <NavLink to={`/bookDetails/${bookId}`}>
                        <button className="btn btn-success text-white px-6">
                            View Details
                        </button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default ListedSingleBook;