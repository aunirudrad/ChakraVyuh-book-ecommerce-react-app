import React, { use, useState } from 'react';
import { auth } from '../../firebase/firebase.init';
import {  sendEmailVerification, updateProfile } from 'firebase/auth';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router';
import { AuthContext } from '../../contextProvider/AuthContext';

const SignUp = () => {

    const {createUser, signOutUser} = use(AuthContext);

    const [showPass, setShowPass] = useState(false);

    const handleCreateUser = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const photoURL = e.target.photoURL.value;

        console.log(email, password);

        createUser(email, password)
        .then((result) => {
            console.log(result.user);
            const user = result.user;
            
            // Update user profile with display name and photo URL
            updateProfile(user, {
                displayName: name,
                photoURL: photoURL
            })
            .then(() => {
                console.log('Profile updated successfully');
                
                // Send email verification
                if(!user.emailVerified){
                    sendEmailVerification(auth.currentUser)
                    .then(() => {
                        alert('Account Creation Successful! Please Check your Email for Verification.');
                        
                        // Sign out the user after account creation
                        signOutUser()
                        .then(() => {
                            console.log('User signed out after registration');
                        })
                        .catch((error) => {
                            console.log('Sign out error:', error);
                        });
                    })
                }
            })
            .catch((error) => {
                console.log('Profile update error:', error.message);
            });
            
        }).catch(err => {
            console.log(err.message);
        })
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold text-gray-900 mb-2">Create Account</h2>
                    <p className="text-gray-600">Join Boipoka and start your reading journey</p>
                </div>

                {/* Sign Up Form Card */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    {/* Name Input */}
                    <form onSubmit={handleCreateUser} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 outline-none"
                                placeholder="Enter your full name"
                            />
                        </div>

                        {/* Email Input */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 outline-none"
                                placeholder="Enter your email"
                            />
                        </div>

                        {/* Photo URL Input */}
                        <div>
                            <label htmlFor="photoURL" className="block text-sm font-medium text-gray-700 mb-2">
                                Photo URL
                            </label>
                            <input
                                type="url"
                                id="photoURL"
                                name="photoURL"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 outline-none"
                                placeholder="Enter your photo URL"
                            />
                        </div>

                        {/* Password Input */}
                        <div className='relative'>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                Password
                            </label>
                            <input
                                type={showPass ? "text" : "password"}
                                id="password"
                                name="password"
                                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 outline-none"
                                placeholder="Create a password"
                            />
                            <button 
                                type="button"
                                onClick={() => setShowPass(!showPass)}
                                className='absolute right-4 top-[42px] text-gray-600 hover:text-gray-800 transition duration-200'
                            >
                                {showPass ? <FaEye /> : <FaEyeSlash />}
                            </button>
                        </div>

                        {/* Confirm Password Input */}
                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 outline-none"
                                placeholder="Confirm your password"
                            />
                        </div>

                        {/* Terms and Conditions */}
                        <div className="flex items-start">
                            <input
                                type="checkbox"
                                id="terms"
                                name="terms"
                                className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded cursor-pointer"
                            />
                            <label htmlFor="terms" className="ml-3 text-sm text-gray-600 cursor-pointer">
                                I agree to the{' '}
                                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                                    Terms and Conditions
                                </a>{' '}
                                and{' '}
                                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                                    Privacy Policy
                                </a>
                            </label>
                        </div>

                        {/* Sign Up Button */}
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] transition duration-200 shadow-lg"
                        >
                            Sign Up
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-white text-gray-500">Or continue with</span>
                        </div>
                    </div>

                    {/* Social Sign Up Buttons */}
                    <div className="grid grid-cols-2 gap-4">
                        <button
                            type="button"
                            className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-200 font-medium text-gray-700"
                        >
                            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                                <path
                                    fill="#4285F4"
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                />
                                <path
                                    fill="#34A853"
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                />
                                <path
                                    fill="#FBBC05"
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                />
                                <path
                                    fill="#EA4335"
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                />
                            </svg>
                            Google
                        </button>
                        <button
                            type="button"
                            className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-200 font-medium text-gray-700"
                        >
                            <svg className="w-5 h-5 mr-2" fill="#1877F2" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                            Facebook
                        </button>
                    </div>

                    {/* Sign In Link */}
                    <div className="text-center pt-4">
                        <p className="text-sm text-gray-600">
                            Already have an account?{' '}
                            <Link to='/signin'>
                            <span className="text-blue-600 hover:text-blue-700 font-semibold">
                                Sign In
                            </span></Link>
                        </p>
                    </div>
                </div>

                {/* Additional Info */}
                <p className="text-center text-xs text-gray-500 mt-8">
                    By signing up, you'll get access to thousands of books and personalized recommendations.
                </p>
            </div>
        </div>
    );
};

export default SignUp;