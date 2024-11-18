import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
           <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
                <ul className="grid grid-flow-col gap-4">
                    <li><NavLink to='/' className={({isActive}) => isActive ? 'text-purple-700 font-bold' : ''}>Home</NavLink></li>
                    <li><NavLink to='/donation' className={({isActive}) => isActive ? 'text-purple-700 font-bold' : ''}>Donation</NavLink></li>
                    <li><NavLink to='/help'className={({isActive}) => isActive ? 'text-purple-700 font-bold' : ''}>How to help</NavLink></li>
                    <li><NavLink to='/dashboard'className={({isActive}) => isActive ? 'text-purple-700 font-bold' : ''}>Dashboard</NavLink></li>
                    <li><NavLink to='/faq'className={({isActive}) => isActive ? 'text-purple-700 font-bold' : ''}>FAQ</NavLink></li>
                </ul>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                    <a href=''>
                        <FaFacebook className='text-blue-600 text-2xl' />
                    </a>
                    <a>
                        <FaYoutube className='text-red-600 text-2xl'/>
                    </a>
                    <a>
                        <FaInstagram className='text-purple-500 text-2xl'></FaInstagram>
                    </a>
                    <a>
                        <FaXTwitter className='text-2xl' />
                    </a>
                    </div>
                </nav>
                <aside>
                    <p className='text-sm font-medium text-gray-500'>Copyright © {new Date().getFullYear()} - All right reserved || Donate Clothes registered Company</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;