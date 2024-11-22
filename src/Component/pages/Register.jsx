import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import auth from '../../firebase/firebase.config';


const Register = () => {
    const { createNewUser, setUser} = useContext(AuthContext);
    const [error, setError] = useState({});
    const[showPassword , setShowPassword] = useState(false);
    const navigate = useNavigate();

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
        const password = form.get("password");

        let passwordError = '';
    
        if(password.length < 6){
            setError((prevError) =>({...prevError, password: 'password should be 6 characters or longer'}))
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            passwordError = 'Password must contain at least one uppercase letter.';
        }
        // Check for at least one lowercase letter
        else if (!/[a-z]/.test(password)) {
            passwordError = 'Password must contain at least one lowercase letter.';
        }
        
        if(passwordError){
            setError((prevError)=>({
                ...prevError, password: passwordError,
            }))
            return;
        }
        // console.log({name, email, photo, password})
        setError({});
        
        createNewUser(email,password)
        .then(result => {
            const user = result.user;
            setUser(user);
            toast.success('Registration successfully!')
            
            setTimeout(() => {
                navigate('/')
            },1000)
        }) 
          .catch((err) => {
            toast.error("Registration Failed! Please try again")
            setError((prevError) => ({
                ...prevError, form: "Try again later"
            }));
          });
    }
     
     const googleProvider = new GoogleAuthProvider();

     const handleGoogleSignIn = () =>{
        signInWithPopup(auth, googleProvider)
        .then((result)=>{
            // console.log(result)
            toast.success("Google sign in successful!")
            navigate('/')
        })
        .catch(error => {
            // console.log('Error' ,error)
            toast.error("Failed to sign in with google!")
        })
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
                <div className="form-control relative">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type= {showPassword ? 'text' : 'password'}
                placeholder="password"
                 className="input input-bordered" name="password" required />
                <button onClick={()=> setShowPassword(!showPassword)}
                className='btn btn-xs absolute right-4 top-12'>
                    {
                        showPassword ? <FaEyeSlash /> : <FaEye />
                    }
                    </button>
                {
                    error.password && <label className='label text-xs text-rose-500'>{error.password}</label>
                }
                </div>
                {
                    error.form && (
                        <p className='text-xs text-center text-rose-500'>{error.form}</p>
                    )
                }
                <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
                </div>
            </form>
                    <div className='pb-5 pl-5'>
                    <button onClick={handleGoogleSignIn}
                    className='btn'>Login with Google</button>
                    </div>
                    <div>
                    <p className='text-center font-semibold'>
                            Already Have An Account? <Link to="/login" className='text-green-500 underline'>Login Now</Link>
                        </p>
                    </div>
            <ToastContainer position='top-center' autoClose={3000} />
        </div>
    </div>
    );
};

export default Register;