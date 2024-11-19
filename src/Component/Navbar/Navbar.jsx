import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import user from '../../assets/user.png';
import { FaBarsStaggered } from 'react-icons/fa6';


const Navbar = () => {
    const links = 
        <>
        <li><NavLink to='/' className={({isActive}) => isActive ? 'text-purple-700 font-bold' : ''}>Home</NavLink></li>
        <li><NavLink to='/donation' className={({isActive}) => isActive ? 'text-purple-700 font-bold' : ''}>Donation Campaigns</NavLink></li>
        <li><NavLink to='/help'className={({isActive}) => isActive ? 'text-purple-700 font-bold' : ''}>How to help</NavLink></li>
        <li><NavLink to='/dashboard'className={({isActive}) => isActive ? 'text-purple-700 font-bold' : ''}>Dashboard</NavLink></li>
        <li><NavLink to='/faq'className={({isActive}) => isActive ? 'text-purple-700 font-bold' : ''}>FAQ</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <FaBarsStaggered />
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    {links}
                </ul>
                </div>
                <a className="btn btn-ghost text-xl"><img className='w-10 h-auto' src={logo} /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {links}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <div>
                    <img src={user} alt="icon" />
                </div>
                <a className="btn">Login</a>
            </div>
            </div>
    );
};

export default Navbar;