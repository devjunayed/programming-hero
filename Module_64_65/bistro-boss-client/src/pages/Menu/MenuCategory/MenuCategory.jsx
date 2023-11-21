import BottomBorderButton from "../../../components/BottomBorderButton/BottomBorderButton";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import PropTypes from 'prop-types';


const MenuCategory = ({ items, title, description, bgImg }) => {
    return (
        <div>

            {
                title &&
                <Cover
                    isBanner={false}
                    title={title}
                    description={description}
                    bgImg={bgImg}
                />
            }

            <div className={`grid md:grid-cols-2 grid-cols-1 gap-8 my-10`}>
                {
                    items.map((item) => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="text-center">
                <BottomBorderButton
                    title="Order your favourite food"
                />
            </div>
        </div>
    );
};

MenuCategory.propTypes = {
    items: PropTypes.object,
    title: PropTypes.string,
    description: PropTypes.string,
    bgImg: PropTypes.string,
}

export default MenuCategory;