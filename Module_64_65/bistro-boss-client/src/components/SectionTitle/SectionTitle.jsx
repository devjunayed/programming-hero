import PropTypes from 'prop-types';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='text-center w-max mx-auto my-10'>
            <p className='text-[#D99904] italic mb-4'>---{subHeading}---</p>
            <h3 className="py-4 font-['Inter'] border-y-2  text-4xl uppercase px-10 border-[#E8E8E8]">{heading}</h3>
        </div>
    );
};

SectionTitle.propTypes = {
    heading: PropTypes.string,
    subHeading: PropTypes.string
}

export default SectionTitle;