import React, { useContext, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import auth from '../../firebase/firebase.config';


const Login = () => {
    const {userLogin, setUser} = useContext(AuthContext)
    const [error, setError] = useState({});
    
    const emailRef = useRef();
    const navigate = useNavigate();

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
            toast.success('Login Successful!')
            })
            .catch((err)=>{
                // setError({...error, login: err.code})
                toast.error('Login failed! Please check your credentials.');
        })
    }

    const handleForgetPassword = () =>{
        // const email = emailRef.current.value;
        navigate('/forgetpassword')
    
    }
    const googleProvider = new GoogleAuthProvider();
    
    const handleGoogleSignIn = () =>{
        signInWithPopup(auth, googleProvider)
        .then((result)=>{
            setUser(result.user);
            // console.log(result)
            toast.success("Google sign in successful!")
            navigate('/')
        })
        .catch(error => {
            // console.log(error)
            toast.error("Failed to sign in with google!")
        })
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
                <div className='pb-5 pl-5'>
                  <button onClick={handleGoogleSignIn}
                  className='btn'>Login with Google</button>
                </div>
                <div>
                <p className='text-center font-semibold'>
                    Don't Have Any Account? <Link to="/register" className='text-red-600 underline'>Register Now</Link>
                </p>
                </div>
            </div>
            <Toaster />
        </div>

    );
};

export default Login;