import { Link } from 'react-router-dom';

import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {

    const {createUser} = useContext(AuthContext);

    const [isVissible, setIsVissible] = useState(false);

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;


        // create user 
        createUser(email, password)
        .then(result => {
            console.log(result);
        })
        .catch(error=> {
            console.log(error);
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card p-4 flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                        </div>
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
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <p className='flex flex-row gap-1'>Already have an account?  <Link to="/login" className='hover:text-blue-500'>Please login now</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;