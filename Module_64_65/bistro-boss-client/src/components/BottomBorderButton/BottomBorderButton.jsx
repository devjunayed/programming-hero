import PropTypes from 'prop-types';

const BottomBorderButton = ({title}) => {
    return  <button className="btn mb-4 bg-white border-b-black border-b-4 rounded-lg uppercase">{title}</button>;
};

BottomBorderButton.propTypes = {
    title: PropTypes.string
}

export default BottomBorderButton;