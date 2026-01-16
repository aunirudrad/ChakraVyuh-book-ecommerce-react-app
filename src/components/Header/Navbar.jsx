import React, { use } from 'react';
import './Navbar.css'
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../contextProvider/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';

const Navbar = () => {

    const { user } = use(AuthContext);

    const handleSignOut = () => {
        signOut(auth).then(res => {
            console.log("signed out", res);
        })
    }

    const links = <>
        <NavLink to='/'><li className=''>Home</li></NavLink>
        <NavLink to='/listed-books'><li className=''>Listed Books</li></NavLink>
        <NavLink to='/pages-to-read'><li>Pages to Read</li></NavLink>
    </>
    return (
        <div className='nav'>
            <div className="navbar bg-white-100 py-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            className="menu menu-sm dropdown-content bg-gray-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <a href='/' className="btn btn-ghost text-xl">ChakraVyuh</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex justify-between items-center gap-5">
                        {links}
                    </ul>
                </div>
                <div className='navbar-end'>
                    {
                        user ? <div className="mr-2">
                            <Link><button onClick={handleSignOut} className="btn">Sign Out</button></Link> </div> :
                            <>
                                <div className="mr-2">
                                    <Link to='/signin'><button className="btn">Sign In</button></Link>
                                </div>
                                <div className="">
                                    <Link to='/signup'><button className="btn">Sign Up</button></Link>
                                </div></>
                    
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;