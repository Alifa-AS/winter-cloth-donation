import React, { useContext, useRef, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';


const Login = () => {
    const {userLogin, setUser} = useContext(AuthContext)
    const [error, setError] = useState({});
    
    const emailRef = useRef();
    const location = useLocation();
    const navigate = useNavigate();
    // console.log(location)

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;


        userLogin(email,password)
        .then(result => {
            const user = result.user;
            setUser(user);
            // navigate(location?.state ? location.state : '/')
            navigate('/', {replace: true})
            toast('Login Successful!')
            })
            .catch((err)=>{
                setError({...error, login: err.code})
                toast.error('Login failed! Please check your credentials.');
        })
    }

    const handleForgetPassword = () =>{
        const email = emailRef.current.value;
        navigate('/forgetpassword')
    
    }

    return (
        <div className='min-h-screen flex justify-center items-center bg-indigo-50'>
            <div className="card bg-base-100 w-full max-w-lg p-10 shrink-0 shadow-2xl">
                <h2 className='text-3xl font-bold text-center'>Login Your Account</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" 
                    className="input input-bordered" 
                    name="email" ref={emailRef} required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" name="password" required />
                    {
                        error.login && (
                            <label className='label text-sm text-red-600'>
                              {error.login}
                            </label>
                        )
                    }
                    <button onClick={handleForgetPassword}
                    className="label">
                        Forget Password?
                    </button>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className='text-center font-semibold'>
                    Don't Have Any Account? <Link to="/auth/register" className='text-red-600 underline'>Register Now</Link>
                </p>
            </div>
            <Toaster />
        </div>

    );
};

export default Login;