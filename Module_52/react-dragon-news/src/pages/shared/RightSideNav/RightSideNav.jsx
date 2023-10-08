import { FaGoogle, FaGithub, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';
const RightSideNav = () => {
    return (
        <div>
            <div className='p-4 space-y-3 mb-4'>
                <h2 className="text-2xl  font-bold">Login With</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    Login with Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    Login with Github
                </button>
            </div>
            <div className='p-4  mb-4'>
                <h2 className="text-2xl mb-4 font-bold">Find Us On</h2>
                <Link className='flex items-center gap-2 text-lg border p-4 rounded-t-lg' to="https://facebook.com">
                    <FaFacebook></FaFacebook>
                    Facebook
                </Link>
                <Link className='flex items-center gap-2 text-lg  p-4 border border-x' to="https://facebook.com">
                    <FaTwitter></FaTwitter>
                    Twitter
                </Link>
                <Link className='flex items-center gap-2 text-lg border p-4 rounded-b-lg' to="https://facebook.com">
                    <FaInstagram></FaInstagram>
                    Instagram
                </Link>
            </div>
   
            <div className='p-4  mb-4'>
                <h2 className="text-2xl mb-4 font-bold">Find Us On</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
   
        </div>
    );
};

export default RightSideNav;