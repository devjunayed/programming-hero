import BannerBg from '../../assets/menu/banner3.jpg'
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';
import DessertBg from '../../assets/menu/dessert-bg.jpeg';
import PizzaBg from '../../assets/menu/pizza-bg.jpg';
import SaladsBg from '../../assets/menu/salad-bg.jpg';
import SoupBg from '../../assets/menu/soup-bg.jpg';

const Menu = () => {
    const [menu] = useMenu();


    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');



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


            {/* Todays offer */}
            <SectionTitle
                heading="Today's Offer"
                subHeading="Don't miss"
            />

            <MenuCategory
                items={offered}
            />

            {/* Desserts */}

            <MenuCategory
                items={dessert}
                title="deserts"
                description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                bgImg={DessertBg}
            />


            {/* pizza*/}
            <MenuCategory
                items={pizza}
                title="pizza"
                description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                bgImg={PizzaBg}
            />

            {/* Salads*/}
            <MenuCategory
                items={salad}
                title="salads"
                description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                bgImg={SaladsBg}
            />

            {/* Soups*/}
            <MenuCategory
                items={soup}
                title="soups"
                description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                bgImg={SoupBg}
            />
        </div>
    );
};

export default Menu;