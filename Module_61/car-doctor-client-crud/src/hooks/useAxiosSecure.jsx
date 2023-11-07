import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: "https://car-doctor-server-rouge-ten.vercel.app",
    withCredentials: true
})

const useAxiosSecure = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        }, err => {
            console.log('error tracked in interceptors', err.response);
            if (err.response.status === 401 || err.response.status === 403) {
                console.log('logout the user');
                logOut()
                    .then(() => {
                        navigate("/login");
                    })
                    .catch(err => console.log(err));
            }
        })
    }, [logOut, navigate]);

    return axiosSecure;
};

export default useAxiosSecure;