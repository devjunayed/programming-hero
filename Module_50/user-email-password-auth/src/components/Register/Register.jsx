
const Register = () => {
    return (
        <div>
            <div className="mx-auto md:w-1/2">
                <h2 className='text-3xl'>Please Register</h2>
                <form>
                    <br />
                    <input className="w-full p-4" type="email" name="email" id="" placeholder="Enter your email......"/> 
                    <br />
                    <br />
                    <input className="w-full p-4" placeholder="Enter your password......" type="password" name="password" id="" /> <br />
                    <input className="w-full p-4 cursor-pointer mt-4 bg-green-500 text-white border-none" type="submit" name="" id="" />
                </form>
            </div>
        </div>
    );
};

export default Register;