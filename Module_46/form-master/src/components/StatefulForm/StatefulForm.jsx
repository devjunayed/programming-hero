import { useState } from "react";

const StatefulForm = () => {

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const handleSubmit = e => {
        e.preventDefault();
        console.log(name, email, password);
    }


    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleNameChange} type="text" name="name" placeholder="Enter your name..."/>
                <br />
                <br />
                <input  onChange={handleEmailChange} type="text" name="email" placeholder="Enter your email..." />
                <br />
                <br />
                <input onChange={handlePasswordChange} type="password" name="password" placeholder="Enter your password..."/>
                <br />
                <br />
                <button >Submit</button>
            </form>
        </div>
    );
};

export default StatefulForm;