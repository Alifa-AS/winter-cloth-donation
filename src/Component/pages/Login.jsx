import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {
    const {userLogin, setUser} = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        

        userLogin(email,password)
        .then(result => {
            const user = result.user;
            setUser(user);
            })
            .catch((error)=>{
                alert(error.code)
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
                    <input type="email" placeholder="email" className="input input-bordered" name="email" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" name="password" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className='text-center font-semibold'>
                    Don't Have Any Account? <Link to="/auth/register" className='text-red-600 underline'>Register Now</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;