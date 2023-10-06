import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const Register = () => {

    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleRegsiter = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;

        console.log(email, password, accepted);

        const regex = /[A-Z]/;

        if (!regex.test(password)) {
            setRegisterError('☹');
            return;
        }

        setRegisterError('');
        setSuccess('');

        if (password.length < 6) {
            setRegisterError('password should be at least 6 characters or longer');
            return;
        }


        // create a user
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('User Create successfully');
            })
            .catch((err) => {
                setRegisterError(err.message);
            });
    }
    return (
        <div>
            <div className="mx-auto md:w-1/2">
                <h2 className='text-3xl'>Please Register</h2>
                <form onSubmit={handleRegsiter} >
                    <br />
                    <input className="w-full p-4" type="email" name="email" id="email" placeholder="Enter your email......" required />
                    <br />
                    <br />
                    <div className="relative">
                        <input className="w-full p-4" placeholder="Enter your password......" type={showPassword ? "text" : "password"} name="password" id="password" required />
                        <span className="absolute top-2 right-2" onClick={() => setShowPassword(!showPassword)}>
                            {
                                showPassword ? <AiFillEyeInvisible className="text-5xl"></AiFillEyeInvisible> : <AiFillEye className="text-5xl"></AiFillEye>
                            }
                        </span>
                    </div>

                    <br />
                    <div>
                    <input className="mr-2" type="checkbox" name="terms" id="terms"/>
                    <label htmlFor="terms">Accept our <a href="">terms and conditions</a></label>

                    </div>
                    <br />
                    <input className="w-full p-4 cursor-pointer mt-4 bg-green-500 text-white border-none" type="submit" name="" id="submit" />
                </form>
                {
                    registerError && <p>{registerError}</p>
                }{
                    success && <p className="text-green-600">{success}</p>
                }
            </div>
        </div>
    );
};

export default Register;