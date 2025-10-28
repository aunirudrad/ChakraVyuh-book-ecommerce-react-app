import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getFromLocalStorage } from '../../Utilities/addToLocalStorage';
import ListedSingleBook from './ListedSingleBook/ListedSingleBook';
import './ListedBooks.css';


const ListedBooks = () => {


    const readData = useLoaderData();
    const [readList, setReadList] = useState([]);
    const [sort, setSort] = useState("");
    const [isAnimating, setIsAnimating] = useState(false);
    // console.log(readData);

    useEffect(() => {
        if (!readData || !Array.isArray(readData)) {
            return;
        }

        const storedBookData = getFromLocalStorage();
        const convertedStoredBooks = storedBookData.map(book => parseInt(book));

        const myReadList = readData.filter(bookId => convertedStoredBooks.includes(bookId.bookId))
        console.log(myReadList);
        setReadList(myReadList);
    }, [readData])

    const handleSort = (type) => {
        setSort(type);
        setIsAnimating(true);

        // Add a small delay for smooth transition
        setTimeout(() => {
            if(type === "Pages") {
                const sortedBooksByPages = [...readList].sort((a,b) => a.totalPages - b.totalPages)
                setReadList(sortedBooksByPages);
                console.log(sortedBooksByPages);
            }
            if(type === "Ratings"){
                const sortedBooksByRatings = [...readList].sort((a,b) => a.rating - b.rating);
                setReadList(sortedBooksByRatings);
            }
            
            // Reset animation state
            setTimeout(() => setIsAnimating(false), 100);
        }, 150);
    }
    return (
        <div className='p-3'>
            <h1 className='bg-gray-100 text-center py-7 text-4xl font-bold rounded-lg mb-8'>Books</h1>

            <div className='text-center mb-8'>
                <div className="dropdown ">
                <div tabIndex={0} role="button" className="btn bg-green-600 text-white font-bold">Sort By : {sort?sort:"None"}</div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li className='text-white'><a onClick={() => handleSort("Pages")}>Pages</a></li>
                    <li className='text-white'><a onClick={() => handleSort("Ratings")}>Ratings</a></li>
                </ul>
            </div>
            </div>

            <Tabs>
                <TabList>
                    <Tab>Mark as Read ({readList.length})</Tab>
                    <Tab>My Wishlist</Tab>
                </TabList>

                <TabPanel>
                    <div className={`space-y-6 transition-all duration-500 ${isAnimating ? 'opacity-50' : 'opacity-100'}`}>
                        {
                            readList.map((book, index) => (
                                <div 
                                    key={book.bookId} 
                                    className="book-card-item"
                                    style={{
                                        animation: `slideIn 0.5s ease-out ${index * 0.1}s both`
                                    }}
                                >
                                    <ListedSingleBook singleBook={book} />
                                </div>
                            ))
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;