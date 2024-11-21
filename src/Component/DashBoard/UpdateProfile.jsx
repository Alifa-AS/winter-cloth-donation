import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';

const UpdateProfile = () => {

    const{ user, updateUserProfile } = useContext(AuthContext);
    const[newName, setNewName] = useState(user?.displayName || '');
    const[newPhoto, setNewPhoto] = useState(user?.displayPhotoURL || '');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        updateUserProfile({ displayName: newName, photoURL: newPhoto })
        .then(() => {
            navigate('/dashboard');
        })
        .catch((error) => {
            console.error("Error updating profile: ", error);
        });
    };
    
    return (
        <div>
             <div className='min-h-screen flex justify-center items-center bg-indigo-50'>
            <div className="card bg-base-100 w-full max-w-lg p-10 shrink-0 shadow-2xl">
                <h2 className='text-3xl font-bold text-center'>Update Your Profile</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="name" 
                    className="input input-bordered" name="name"
                    onChange={(e) => setNewName(e.target.value)}
                    value={newName} required />
                    </div>
                     {/* Photo input */}
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" placeholder="photo-url" 
                    value={newPhoto}
                    onChange={(e) => setNewPhoto(e.target.value)}
                    name='photo' className="input input-bordered" required />
                    </div>
                    {/* btn */}
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Update Information</button>
                    </div>
                </form>
                <p className='px-7 font-semibold'>
                    <button className='btn'><Link to='/dashboard'>go back</Link></button>
                    
                </p>
            </div>
        </div>
        </div>
    );
};

export default UpdateProfile;


