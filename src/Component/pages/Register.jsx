import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Register = () => {

    const { createNewUser, setUser} = useContext(AuthContext);
    const [error, setError] = useState({});

    // form
    const handleSubmit = (e)=> {
        e.preventDefault();

        // get form data
        const form = new FormData(e.target);
        const name = form.get("name")
        if (name.length < 4) {
            setError({ ...error, name: "name should be more then 5 character" });
            return;
          }
        const email = form.get("email")
        const photo = form.get("photo")
        const password = form.get("password")
        console.log({name, email, photo, password})

        createNewUser(email,password)
        .then(result => {
            const user = result.user;
            setUser(user);
            
        }) 
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
          });
    }

    return (
        <div className='min-h-screen flex justify-center items-center bg-indigo-50'>
        <div className="card bg-base-100 w-full max-w-lg p-10 shrink-0 shadow-2xl">
            <h2 className='text-3xl font-bold text-center'>Register Your Account</h2>
            <form onSubmit={handleSubmit} className="card-body">
                {/* Name input */}
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                </div>
                {
                error.name && (
                <label className="label text-xs text-rose-500">{error.name}</label>)
                }
                {/* Photo input */}
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Photo URL</span>
                </label>
                <input type="text" placeholder="photo-url" name='photo' className="input input-bordered" required />
                </div>
                {/* email input */}
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" className="input input-bordered" name="email" required />
                </div>
                {/* password input */}
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" className="input input-bordered" name="password" required />
                </div>
                <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
                </div>
            </form>
            <p className='text-center font-semibold'>
                Already Have An Account? <Link to="/auth/login" className='text-green-500 underline'>Login Now</Link>
            </p>
        </div>
    </div>
    );
};

export default Register;