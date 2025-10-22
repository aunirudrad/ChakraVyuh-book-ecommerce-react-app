import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const {ID} = useParams();
    const bookID = parseInt(ID);
    const bookData = useLoaderData();
    const singleBookData = bookData && bookData.find(singleBook => singleBook.bookId === bookID);

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
                            <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-gray-600">
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
                                <button className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50">Read</button>
                                <button className="px-4 py-2 rounded-md bg-teal-400 text-white font-semibold hover:bg-teal-500">Wishlist</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;