import moment from 'moment/moment';
import logo from '../../../assets/logo.png';
const Header = () => {
    return (
        <div className='text-center space-y-2 mt-8'>
            <img className='mx-auto' src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            {/* <p className='text-xl'>Sunday, November 27, 2022</p> */}
            <p className='text-xl'>{moment().format('dddd, MMMM D, YYYY')}</p>
        </div>
    );
};

export default Header;