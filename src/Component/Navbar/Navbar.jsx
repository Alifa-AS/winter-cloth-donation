import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import userIcon from '../../assets/user.png';
import { FaBarsStaggered } from 'react-icons/fa6';
import { AuthContext } from '../AuthProvider/AuthProvider';


const Navbar = () => {

    const {user, logOut} = useContext(AuthContext);

    const links = 
        <>
        <li><NavLink to='/' className={({isActive}) => isActive ? 'text-purple-700 font-bold' : 'font-semibold'}>Home</NavLink></li>
        <li><NavLink to='/donation' className={({isActive}) => isActive ? 'text-purple-700 font-bold' : 'font-semibold'}>Donation Campaigns</NavLink></li>
        <li><NavLink to='/help'className={({isActive}) => isActive ? 'text-purple-700 font-bold' : 'font-semibold'}>How to help</NavLink></li>
        <li><NavLink to='/dashboard'className={({isActive}) => isActive ? 'text-purple-700 font-bold' : 'font-semibold'}>Dashboard</NavLink></li>
        <li><NavLink to='/faq'className={({isActive}) => isActive ? 'text-purple-700 font-bold' : 'font-semibold'}>FAQ</NavLink></li>
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

                {/* <h2>{user && user.email}</h2> */}
                <div>
                {user && user?.email ? (
                        <div>
                        <img className="w-10 h-10 rounded-full" src={user?.photoURL} alt="" />
                        <p>{user.displayName}</p>
                        </div>
                    ) : (
                        <img src={userIcon} alt="" />
                    )}
                </div>
                {
                    user && user?.email ? (
                        <button onClick={logOut} className='btn'>Logout</button>
                    ) : 
                    <Link to="/auth/login" className="btn">Login</Link>
                }
                
            </div>
            </div>
    );
};

export default Navbar;