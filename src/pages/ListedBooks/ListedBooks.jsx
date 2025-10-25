import React, {useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getFromLocalStorage } from '../../Utilities/addToLocalStorage';
import ListedSingleBook from './ListedSingleBook/ListedSingleBook';


const ListedBooks = () => {

    
    const readData = useLoaderData();
    const [readList, setReadList] = useState([])
    // console.log(readData);

    useEffect(() => {
        const storedBookData = getFromLocalStorage();
        const convertedStoredBooks = storedBookData.map(book => parseInt(book) );
        
        const myReadList = readData.filter(bookId => convertedStoredBooks.includes(bookId.bookId))
        console.log(myReadList);
        setReadList(myReadList);
    }, [] )
    return (
        <div className='p-3'>
            

            <Tabs>
                <TabList>
                    <Tab>Mark as Read ({readList.length})</Tab>
                    <Tab>My Wishlist</Tab>
                </TabList>

                <TabPanel>
                    {
                        readList.map(book => <ListedSingleBook key={book.Id} singleBook={book}></ListedSingleBook>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;