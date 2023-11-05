import { Link, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
const SignUp = () => {
    const navigate = useNavigate();
    
    const {createUser} = useContext(AuthContext);

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then(result => {
            const user = result.user;
            navigate("/login");
            console.log(user);
        })
        .catch(err => console.log(err));

        console.log(name, email, password);
    }
    return (
        <div className="hero my-10">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center w-5/12 mr-12">
                    <img src={img} alt="" />
                </div>
                <div className=" card  w-7/12 border py-10">
                    <form onSubmit={handleSignUp} className="card-body">
                        <h1 className="text-center text-3xl font-bold">Register</h1>
                        <div className="form-control">
                            <label className="label font-bold">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
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
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary bg-red-700 border-none hover:bg-red-800 capitalize">Sign Up</button>
                        </div>
                    </form>
                    <p className='text-center'>Or Sign In With</p>
                    <p className='text-center my-1'>Already have an account? <Link to="/login" className='text-orange-600 font-bold'>Login now</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;