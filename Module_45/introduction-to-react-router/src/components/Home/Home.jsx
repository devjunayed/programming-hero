import { Outlet, useLocation, useNavigation } from "react-router-dom";
import { RotatingLines } from 'react-loader-spinner';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
    const navigation = useNavigation();
    const location = useLocation();
    console.log(location);
    return (
        <div>
            <Header />
            {
                navigation.state === "loading" ?
                    <RotatingLines
                        strokeColor="red"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="96"
                        visible={true}
                    /> :
                    <Outlet></Outlet>
            }
            <Footer></Footer>
        </div>
    );
};

export default Home;