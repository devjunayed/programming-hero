import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import LoginCoverImg from '../../assets/others/authentication2.png';
import LoginBgImg from '../../assets/others/authentication.png';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';


const Login = () => {
    const [disabled, setDisabled] = useState(true);
    const captchaRef = useRef();
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();


    const from = location.state?.from?.pathname || "/";


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(res => {
                console.log(res);
                Swal.fire({
                    title: "Logged In Successfully!",
                    icon: "success"
                  });
                navigate(from, {replace: true});
            })
            .catch(err => console.log(err));
    }

    const handleValidate = (e) => {
        e.preventDefault();
        const captchaValue = captchaRef.current.value;
        if (validateCaptcha(captchaValue, false) == true) {
            setDisabled(false);
        } else {
            setDisabled(true);
            loadCaptchaEnginge(6);
        }
    }

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    return (
        <div className="hero  min-h-screen" style={{ backgroundImage: `url(${LoginBgImg})` }}>
            <Helmet>
                <title>Bistro Boss | Sign in</title>
            </Helmet>

            <div className="hero-content shadow-2xl flex-col md:flex-row">
                <div className="text-center w-1/2 lg:text-left">
                    <img src={LoginCoverImg} alt="" />
                </div>
                <div className="card shrink-0  w-1/2 max-w-xl ">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input ref={captchaRef} type="text" placeholder="fill your captcha" className="input input-bordered" required />
                            <button onClick={handleValidate} className='btn-xs  btn-primary bg-black'>validate</button>
                        </div>
                        <div className="form-control mt-6">
                            <button disabled={disabled} className="btn border-none text-white hover:bg-[#e7ad56b3] bg-[#d1a054b3] btn-primary">Login</button>
                        </div>
                        <div>
                            <p className='text-center text-[#e7ad56b3]'>New here? <Link to="/signup" className='font-bold'>Create a New Account</Link></p>
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

export default Login;