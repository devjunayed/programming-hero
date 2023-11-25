import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import BottomBorderButton from "../../../components/BottomBorderButton/BottomBorderButton";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popularMenu = menu.filter((item) => item.category === 'popular');

    return (
        <section>
            <SectionTitle
                heading={"From our menu"}
                subHeading={"Check it out"}>
            </SectionTitle>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
                {
                    popularMenu.map((item)=> <MenuItem 
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="text-center mb-4">
               <BottomBorderButton title="View full menu" />
            </div>

        </section>
    );
};

export default PopularMenu;