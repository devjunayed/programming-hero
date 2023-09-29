import { useState } from "react";
import app from "../../firebase/firebase.init";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';

const Login = () => {
    const [user, setUser] = useState(null);

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const loggedInUser = result.user;
                setUser(loggedInUser);
            })
            .catch((err) => console.log(err));
    }

    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
        .then((result => setUser(result.user)))
        .catch(err => console.log(err));
    }

    const handleSignOut = () => {
        signOut(auth)
        .then(result => {
            setUser(null);
            console.log(result);
        })
        .catch(err => console.log(err));
    }
    return (
        <div>


            {
                user &&
                <div>
                    <h3>User: {user?.displayName}</h3>
                    <p>Email: {user?.email}</p>
                    <img src={user?.photoURL} alt="" />
                </div>
            }
            <div className="button-wrapper">
               {
                user ?
                <button onClick={handleSignOut}>Signout</button>
                :
                <div>
                    <button onClick={handleGoogleSignIn}>Google Login</button>
                    <button onClick={handleGithubSignIn}>Github Login</button>
                </div>
                }
            </div>

        </div>
    );
};

export default Login;