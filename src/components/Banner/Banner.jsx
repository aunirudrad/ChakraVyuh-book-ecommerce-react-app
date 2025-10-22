import React from 'react';

import bookImage from '/book-banner.png'

const Banner = () => {
    return (
        <div className='bg-slate-100 flex flex-col-reverse md:flex-row justify-between md:items-center px-3 md:px-28 pt-4 pb-8 md:py-20 md:rounded-3xl mb-24'>
            <div className='text-center md:text-left'>
                <h1 className='text-3xl md:text-6xl font-bold mb-12'>Books to freshen up <br />your bookshelf</h1>
                <button className="btn btn-outline btn-secondary">View the List</button>
            </div>
            <div>
                <img className='w-full mb-5' src={bookImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;