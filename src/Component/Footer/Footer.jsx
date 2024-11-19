import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
      <>
        <footer className="footer bg-base-300 text-base-content p-10">
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <ul>
                <h6 className="footer-title">Services</h6>
                <li><NavLink to='/' className={({isActive}) => isActive ? 'text-purple-700 font-bold underline' : ''}>Home</NavLink></li>
                <li><NavLink to='/donation' className={({isActive}) => isActive ? 'text-purple-700 font-bold underline' : ''}>Donation</NavLink></li>
                <li><NavLink to='/help'className={({isActive}) => isActive ? 'text-purple-700 font-bold underline' : ''}>How to help</NavLink></li>
                <li><NavLink to='/dashboard'className={({isActive}) => isActive ? 'text-purple-700 font-bold underline' : ''}>Dashboard</NavLink></li>
                <li><NavLink to='/faq'className={({isActive}) => isActive ? 'text-purple-700 font-bold underline' : ''}>FAQ</NavLink></li>
            </ul>
            <nav>
                <h6 className="footer-title">Social</h6>
            <div className="grid grid-flow-col gap-4">
                <a><FaFacebook className='text-blue-600 text-2xl' /></a>
                <a><FaYoutube className='text-red-600 text-2xl'/></a>
                <a><FaInstagram className='text-purple-500 text-2xl'></FaInstagram></a>
                <a><FaXTwitter className='text-2xl' /></a>
            </div>
            </nav> 
        </footer>
        <div className="footer footer-center bg-base-300 text-base-content p-4 border-t border-gray-300 px-10">
            <aside>
            <p className='text-sm font-medium text-gray-500'>Copyright © {new Date().getFullYear()} - All right reserved || Donate Clothes registered Company</p>
            </aside>
        </div>
      </>   
    );
};

export default Footer;