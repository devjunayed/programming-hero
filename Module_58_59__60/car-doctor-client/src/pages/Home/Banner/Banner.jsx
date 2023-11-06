import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";
import Slides from "./Slides";

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px] rounded-xl overflow-x-hidden">
            <Slides
                id={"Slide1"}
                next={"#Slide2"}
                prev={"#Slide6"}
                image={img1}
                btn1={"Discover More"}
                btn2={"Latest Project"}
                title={"Affordable Price For Car Servicing"}
                descripton={
                    "There are many variations of passages of  available, but the majority have suffered alteration in some form"
                }
            />
            <Slides
                id={"Slide2"}
                next={"#Slide3"}
                prev={"#Slide1"}
                image={img2}
                btn1={"Discover More"}
                btn2={"Latest Project"}
                title={"Affordable Price For Car Servicing"}
                descripton={
                    "There are many variations of passages of  available, but the majority have suffered alteration in some form"
                }
            />
            <Slides
                id={"Slide3"}
                next={"#Slide4"}
                prev={"#Slide2"}
                image={img3}
                btn1={"Discover More"}
                btn2={"Latest Project"}
                title={"Affordable Price For Car Servicing"}
                descripton={
                    "There are many variations of passages of  available, but the majority have suffered alteration in some form"
                }
            />
            <Slides
                id={"Slide4"}
                next={"#Slide5"}
                prev={"#Slide3"}
                image={img4}
                btn1={"Discover More"}
                btn2={"Latest Project"}
                title={"Affordable Price For Car Servicing"}
                descripton={
                    "There are many variations of passages of  available, but the majority have suffered alteration in some form"
                }
            />
            <Slides
                id={"Slide5"}
                next={"#Slide6"}
                prev={"#Slide4"}
                image={img5}
                btn1={"Discover More"}
                btn2={"Latest Project"}
                title={"Affordable Price For Car Servicing"}
                descripton={
                    "There are many variations of passages of  available, but the majority have suffered alteration in some form"
                }
            />
            <Slides
                id={"Slide6"}
                next={"#Slide1"}
                prev={"#Slide5"}
                image={img6}
                btn1={"Discover More"}
                btn2={"Latest Project"}
                title={"Affordable Price For Car Servicing"}
                descripton={
                    "There are many variations of passages of  available, but the majority have suffered alteration in some form"
                }
            />
        </div>
    );
};

export default Banner;
