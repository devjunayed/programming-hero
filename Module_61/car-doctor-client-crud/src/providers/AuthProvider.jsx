import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from 'axios';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email;
            const loggedEmail = { email: userEmail };

            setUser(currentUser);
            console.log('current user', currentUser);
            setLoading(false);

            // if user exists then issue a token
            if (currentUser) {

                axios.post('https://car-doctor-server-rouge-ten.vercel.app/jwt', loggedEmail, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                    })
            } else {
                axios.post('https://car-doctor-server-rouge-ten.vercel.app/logout', loggedEmail, {
                    withCredentials: true
                }).then(res => {
                    console.log(res.data);
                })
            }
        });
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;