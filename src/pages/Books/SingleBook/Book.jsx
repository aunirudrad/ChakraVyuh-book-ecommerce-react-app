import React from 'react';

const Book = ({ singleBook }) => {
    console.log(singleBook);

    const { bookName, author, image, rating, tags } = singleBook;
    // const bookData = use(bookPromise);
    // console.log();
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className='flex gap-3 items-center'>
                    {
                            tags.map(tag => <div className="badge badge-secondary">{tag}</div>)
                        }
                    </div>
                    <h2 className="card-title">
                        {bookName}
                    </h2>
                    <p>By: {author}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;