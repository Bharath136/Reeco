// src/components/Navbar.js
import React from 'react';
import './Navbar.css'
import { TfiShoppingCart } from "react-icons/tfi";
import { IoIosArrowDown } from "react-icons/io";


const Navbar = () => {


    return (
        <div className='nav-container'>
            <nav className='container d-flex align-items-center justify-content-between'>
                <ul className='nav-items-container'>
                    <h1 className='nav-logo'>Reeco</h1>
                    <li>
                        Store
                    </li>
                    <li>
                        Orders
                    </li>
                    <li >
                        Analytics
                    </li>
                </ul>
                <ul className='nav-items-container'>
                    <li>
                        <TfiShoppingCart size={25} />
                    </li>
                    <li className='item'>
                        Hello, James <IoIosArrowDown style={{ marginTop: '4px' }} size={16} />
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
