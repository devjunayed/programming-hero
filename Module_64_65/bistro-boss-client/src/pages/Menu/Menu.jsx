import BannerBg from '../../assets/menu/banner3.jpg'
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover
                title="our menu"
                bgImg={BannerBg}
                isBanner={true}
                description={"Would you like to try a dish?"}
            />
        </div>
    );
};

export default Menu;