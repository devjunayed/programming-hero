import LoginCoverImg from '../../assets/others/authentication2.png';
import LoginBgImg from '../../assets/others/authentication.png';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useContext } from 'react';
import { useForm } from "react-hook-form"
import { updateProfile } from 'firebase/auth';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../hooks/useAxiosPublic';




const SignUp = () => {
    const { createUser, auth } = useContext(AuthContext);
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    const { register, reset, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then(res => {
                if (res.user) {
                    updateProfile(auth.currentUser, { displayName: data.name, photoURL: data.photoUrl })
                        .then(() => {
                            // create user entry in the database
                            const userInfo = {
                                name: data.name,
                                email: data.email,
                            }
                            axiosPublic.post('/users', userInfo)
                                .then(res => {
                                    if (res.data.insertedId) {
                                        navigate("/");
                                        console.log('name updated');
                                        reset();
                                        Swal.fire({
                                            title: "Account Created Successfully!",
                                            icon: "success"
                                        });
                                    }
                                })
                        })
                }
            })
    }


    return (
        <div className="hero  min-h-screen" style={{ backgroundImage: `url(${LoginBgImg})` }}>
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
            <div className="hero-content shadow-2xl flex-col md:flex-row-reverse">
                <div className="text-center w-1/2 lg:text-left">
                    <img src={LoginCoverImg} alt="" />
                </div>
                <div className="card shrink-0  w-1/2 max-w-xl ">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input {...register("name", { required: true })} name="name" type="text" placeholder="name" className="input input-bordered" />
                            {errors.name?.type === "required" && (
                                <p className='text-red-600'>name is required</p>
                            )}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input {...register("photoUrl", { required: true })} name="photoUrl" type="text" placeholder="photo url" className="input input-bordered" />
                            {errors.photoUrl?.type === "required" && (
                                <p className='text-red-600'>name is required</p>
                            )}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered" />
                            {errors.email?.type === "required" && (
                                <p className='text-red-600'>email is required</p>
                            )}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })} name="password" type="password" placeholder="password" className="input input-bordered" />
                            {errors.password?.type === "required" && (
                                <p className='text-red-600'>password is required</p>
                            )}
                            {errors.password?.type === "minLength" && (
                                <p className='text-red-600'>password must be 6 characters</p>
                            )}
                            {errors.password?.type === "maxLength" && (
                                <p className='text-red-600'>password must be less than 20 chracters</p>
                            )}
                            {errors.password?.type === "pattern" && (
                                <p className='text-red-600'>password must include one uppercase letter</p>
                            )}
                            {errors.password?.type === "pattern" && (
                                <p className='text-red-600'>password must include one lowercase letter</p>
                            )}
                            {errors.password?.type === "pattern" && (
                                <p className='text-red-600'>password must include one special character</p>
                            )}
                            {errors.password?.type === "pattern" && (
                                <p className='text-red-600'>password must include one number</p>
                            )}
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn border-none text-white hover:bg-[#e7ad56b3] bg-[#d1a054b3] btn-primary">Register</button>
                        </div>
                        <div>
                            <p className='text-center text-[#e7ad56b3]'>Already have an account? <Link to="/login" className='font-bold'>Sign in</Link></p>
                            <p className='text-center'>Or sign in with</p>
                        </div>
                        <div className='flex justify-center gap-8'>
                            <span className='border-2 border-black p-2 rounded-full'>
                                <FaFacebookF />
                            </span>
                            <span className='border-2 border-black p-2 rounded-full'>
                                <FaGoogle />
                            </span>
                            <span className='border-2 border-black p-2 rounded-full'>
                                <FaGithub />
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;