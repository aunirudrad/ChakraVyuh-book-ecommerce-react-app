import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../pages/Root/Root';
import Home from '../pages/Home/Home';
import BookDetails from '../pages/BookDetails/BookDetails';
import ListedBooks from '../pages/ListedBooks/ListedBooks';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                loader: () => fetch("../../public/data/booksData.json"),
                path: '/',
                Component: Home
            },
            {
                path: '/listed-books',
                Component: ListedBooks
            },
            {
                path:'/bookDetails/:ID',
                Component: BookDetails
            }
        ]
    }
  ])