import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className='flex items-center justify-center py-36'>
            <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img 
                src= {user?.photoURL}
                alt="user"
                className="rounded-full" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Name:{user?.name}</h2>
                <p className='pb-5'>
                    <span className='font-bold px-2'>Email:</span>
                    {user?.email}</p>
                <div className="card-actions">
                <button className="btn btn-primary">
                    <Link to ="/update-profile">Update Profile</Link>
                    </button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Dashboard;