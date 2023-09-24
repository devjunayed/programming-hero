const SimpleForm = () => {

    const handleSubmit = e => {
        e.preventDefault();
       
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" />
                <br />
                <br />
                <input type="text" name="email" />
                <br />
                <br />
                <button >Submit</button>
            </form>
        </div>
    );
};

export default SimpleForm;