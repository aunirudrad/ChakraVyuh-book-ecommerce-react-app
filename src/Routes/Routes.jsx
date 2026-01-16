import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../pages/Root/Root';
import Home from '../pages/Home/Home';
import BookDetails from '../pages/BookDetails/BookDetails';
import ListedBooks from '../pages/ListedBooks/ListedBooks';
import SignUp from '../pages/SignUp/SignUp';
import SignIn from '../pages/SignIn/SignIn';
import PrivateRoutes from './PrivateRoutes';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                loader: async () => {
                    const res = await fetch("/booksData.json");
                    return res.json();
                },
                path: '/',
                Component: Home
            },
            {
                path:'/bookDetails/:ID',
                loader: async () => {
                    const res = await fetch("/booksData.json");
                    return res.json();
                },
                Component: BookDetails
            },
            {
                path: '/listed-books',
                loader: async () => {
                    const res = await fetch("/booksData.json");
                    return res.json();
                },
                element: <PrivateRoutes><ListedBooks></ListedBooks></PrivateRoutes>
            },
            {
                path: '/signup',
                Component: SignUp
            },
            {
                path: '/signin',
                Component: SignIn
            }
            
            
        ]
    }
  ])