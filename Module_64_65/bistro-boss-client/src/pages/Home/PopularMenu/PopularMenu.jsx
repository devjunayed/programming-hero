import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const populerItems = data.filter(item => item.category === 'popular');
            setMenu(populerItems);
        })
    }, []);

    return (
        <section>
            <SectionTitle
                heading={"From our menu"}
                subHeading={"Check it out"}>
            </SectionTitle>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
                {
                    menu.map((item)=> <MenuItem 
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="text-center mb-4">
                <button className="btn bg-white border-b-black border-b-4 rounded-lg uppercase">View full menu</button>
            </div>

        </section>
    );
};

export default PopularMenu;