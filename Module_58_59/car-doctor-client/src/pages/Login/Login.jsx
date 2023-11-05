import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';
import axios from 'axios';

import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';


const Login = () => {
    const {signIn, setUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value; 

        signIn(email, password)
        .then(result => {
            const loggedInUser = result.user;
            setUser(loggedInUser);
            console.log(loggedInUser);
            const user = {email};
            // get access token
            axios.post('http://localhost:3000/jwt', user)
            .then(res => {
                console.log(res.data);
                navigate(location?.state ? location?.state : "/");
            })
            .catch(err => console.log(err))


           
        })
        .catch(err => console.log(err));

    }

    return (
        <div className="hero my-10">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center w-5/12 mr-12">
                    <img src={img} alt="" />
                </div>
                <div className=" card  w-7/12 border py-10">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-center text-3xl font-bold">Login</h1>
                        <div className="form-control">
                            <label className="label font-bold">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label font-bold">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary bg-red-700 border-none hover:bg-red-800 capitalize">Sign In</button>
                        </div>
                    </form>
                    <p className='text-center'>Or Sign In With</p>
                    <p className='text-center my-1'>New to Car Doctors? <Link to="/register" className='text-orange-600 font-bold'>Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;