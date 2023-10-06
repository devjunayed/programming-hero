import { useContext } from 'react';
import { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import {Link, Navigate} from 'react-router-dom';
import  { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const [isVissible, setIsVissible] = useState(false);


    const {signInUser, user} = useContext(AuthContext);


    const handleLogin = e => { 
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        signInUser(email, password)
        .then(result => {
            console.log(result);
        })
        .catch(err => {
            console.log(err);
        });
    }

    if(user){
        return <Navigate to='/orders'></Navigate>
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card p-4 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className='relative w-full'>
                                <input type={isVissible ? "text": "password"} placeholder="password" className="input w-full input-bordered" name="password" required />

                                {
                                isVissible ?
                                <AiFillEyeInvisible onClick={()=> {setIsVissible(!isVissible)}} className='absolute text-lg top-4 right-2'></AiFillEyeInvisible>
                                :
                                <AiFillEye onClick={()=> {setIsVissible(!isVissible)}} className='absolute text-lg top-4 right-2'></AiFillEye>
                                }
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className='flex flex-row gap-1'>New to Auth Moha Milon?  <Link to="/register" className='hover:text-blue-500'>Please Register now</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;