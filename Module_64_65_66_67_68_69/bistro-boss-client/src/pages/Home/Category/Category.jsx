import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import Slide1 from '../../../assets/home/slide1.jpg';
import Slide2 from '../../../assets/home/slide2.jpg';
import Slide3 from '../../../assets/home/slide3.jpg';
import Slide4 from '../../../assets/home/slide4.jpg';
import Slide5 from '../../../assets/home/slide5.jpg';

import './Category.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section className='mx-auto'>
            <section>
                <SectionTitle
                 heading={"order online"}
                 subHeading={"From 11.00am to 12.00pm"}
                 ></SectionTitle>
            </section>
            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-4"
            >
                <SwiperSlide>
                    <img src={Slide1} alt="" />
                    <h3 className="font-['Cinzel'] text-4xl  text-center -mt-16 text-white ">Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Slide2} alt="" />
                    <h3 className="font-['Cinzel'] text-4xl  text-center -mt-16 text-white ">Soups</h3>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={Slide3} alt="" />
                    <h3 className="font-['Cinzel'] text-4xl  text-center -mt-16 text-white ">Pizzas</h3>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={Slide4} alt="" />
                    <h3 className="font-['Cinzel'] text-4xl  text-center -mt-16 text-white ">Desserts</h3>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={Slide5} alt="" />
                    <h3 className="font-['Cinzel'] text-4xl  text-center -mt-16 text-white ">Salads</h3>

                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default Category;