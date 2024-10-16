import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = ({ searchTerm, onSearchChange, onSearchClick }) => {
    const cartItems = useSelector((store) => store.cart.cartItems);
    
    return (
        <div className="flex justify-between items-center p-4 bg-gray-800 text-white fixed top-0 left-0 w-full z-10">
            <div className="text-2xl font-bold"><Link to='/' className='text-white'>Ajio</Link></div>
            <div className="flex items-center">
                <input
                    type="text"
                    className="border rounded-md p-2 w-64 text-black"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                />
                <button
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-4 ml-2"
                    onClick={onSearchClick}
                >
                    Search
                </button>
            </div>
            <ul className="flex space-x-6">
                <li className="hover:text-gray-400 cursor-pointer"><Link to='/' className='text-white'> Home </Link></li>
                <li className="hover:text-gray-400 cursor-pointer">About</li>
                <li className="hover:text-gray-400 cursor-pointer "> <Link to ='/contact' className='no-underline text-white'>Contact </Link></li>
                <li className="hover:text-gray-400 cursor-pointer">Orders</li>
                <li className='hover:text-gray-400 cursor-pointer'><Link to = '/cart' className='no-underline text-white'> Cart - {cartItems.length} </Link></li>
            </ul>
        </div>
    );
};

export default Navbar;
