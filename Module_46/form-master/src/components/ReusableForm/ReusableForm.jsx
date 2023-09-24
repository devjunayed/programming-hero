import PropTypes from 'prop-types';


const ReusableForm = ({formTitle, handleSubmit, submitButtonText='submit', children}) => {
    const handleLocalSubmit = e => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        handleSubmit(data);
    }
    return (
        <div>
            <h2>{formTitle}</h2>
            {
                children
            }
        <form onSubmit={handleLocalSubmit}>
            <input type="text" name="name" />
            <br />
            <br />
            <input type="email" name="email" />
            <br />
            <br />
            <input type="password" name="password" />
            <br />
            <br />
            <button >{submitButtonText}</button>
        </form>
    </div>
    );
};


ReusableForm.propTypes = {
    formTitle: PropTypes.string,
    handleSubmit: PropTypes.func,
    submitButtonText: PropTypes.string,
    children: PropTypes.element
}
export default ReusableForm;