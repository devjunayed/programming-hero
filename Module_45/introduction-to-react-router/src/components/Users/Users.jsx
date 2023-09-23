import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css';

const Users = () => {

    const users = useLoaderData();
    // state --> data
    // state --> loader
    // use effect
    // fetch --> state set --> set state
    return (
        <div>
            <h2>Our Users {users.length}</h2>
            <p>Fnatastic and vodro users</p>
            <div className="users">
                {
                    users.map((user, index) => <User key={index} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;