import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { setToLocalStorage } from '../../Utilities/addToLocalStorage';
import './BookDetails.css';

const BookDetails = () => {
    const {ID} = useParams();
    const bookID = parseInt(ID);
    const bookData = useLoaderData();
    const singleBookData = bookData && bookData.find(singleBook => singleBook.bookId === bookID);
    const [showModal, setShowModal] = useState(false);

    if (!singleBookData) return (
        <div className="flex items-center justify-center min-h-[60vh]">
            <p className="text-gray-600">Book not found.</p>
        </div>
    );

    const {
        bookName,
        author,
        image,
        review,
        totalPages,
        rating,
        category,
        tags,
        publisher,
        yearOfPublishing
    } = singleBookData;

    const handleMarkAsRead = id => {
        setToLocalStorage(id);
        setShowModal(true);
        
        // Auto close modal after 2 seconds
        setTimeout(() => {
            setShowModal(false);
        }, 2000);
    }

    return (
        <div className="px-6 py-10 flex justify-center">
            <div className="w-full rounded-md overflow-hidden bg-white">
                <div className="md:flex">
                    {/* Left: image panel */}
                    <div className="md:w-5/12 bg-gray-100 p-8 flex items-center justify-center">
                        <div className="w-[260px] h-[380px] bg-white rounded-md shadow-lg flex items-center justify-center">
                            <img
                                src={image}
                                alt={bookName}
                                className="max-w-full max-h-full object-contain transform -rotate-6"
                            />
                        </div>
                    </div>

                    {/* Right: details */}
                    <div className="md:w-7/12 p-8">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">{bookName}</h1>
                        <p className="text-gray-600 mt-2">By : <span className="text-gray-800 font-semibold">{author}</span></p>

                        <div className="border-t border-gray-200 my-4" />

                        <p className="text-gray-700 mb-4">{category}</p>
                        <div className="border-t border-gray-200 my-4" />

                        <div className="text-gray-700 mb-4">
                            <span className="font-semibold">Review :</span>
                            <p className="mt-2 text-sm leading-7">{review}</p>
                        </div>

                        <div className="mb-4 flex gap-5 items-center justify-start">
                            <div className="font-semibold text-gray-700">Tag</div>
                            <div className="flex gap-3 mt-2 flex-wrap">
                                {Array.isArray(tags) && tags.map((t, i) => (
                                    <span key={i} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">#{t}</span>
                                ))}
                            </div>
                        </div>

                        <div className="border-t border-gray-100 pt-4 mt-2">
                            <div className="md:grid md:grid-cols-2 gap-y-2 gap-x-4 text-sm text-gray-600">
                                <div className="flex justify-between items-center">
                                    <div>Number of Pages:</div>
                                    <div className="font-semibold text-gray-800">{totalPages}</div>
                                </div>

                                <div className="flex justify-between items-center">
                                    <div>Publisher:</div>
                                    <div className="font-semibold text-gray-800">{publisher}</div>
                                </div>

                                <div className="flex justify-between items-center">
                                    <div>Year of Publishing:</div>
                                    <div className="font-semibold text-gray-800">{yearOfPublishing}</div>
                                </div>

                                <div className="flex justify-between items-center">
                                    <div>Rating:</div>
                                    <div className="font-semibold text-gray-800">{rating}</div>
                                </div>
                            </div>

                            <div className="mt-6 flex gap-4">
                                <button onClick={() => handleMarkAsRead(bookID)} className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50">Mark as Read</button>
                                <button className="px-4 py-2 rounded-md bg-teal-400 text-white font-semibold hover:bg-teal-500">Add to Wishlist</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Success Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-transparent bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn">
                    <div className="bg-white rounded-2xl p-8 max-w-sm w-full mx-4 shadow-2xl transform animate-scaleIn">
                        <div className="text-center">
                            {/* Animated Check Mark */}
                            <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100 animate-checkmark">
                                <svg 
                                    className="h-12 w-12 text-green-600 animate-drawCheck" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth="3" 
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            </div>
                            
                            {/* Success Message */}
                            <h3 className="mt-6 text-2xl font-bold text-gray-900">Success!</h3>
                            <p className="mt-2 text-gray-600">Book has been marked as read</p>
                            <p className="mt-1 text-sm font-semibold text-green-600">{bookName}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BookDetails;