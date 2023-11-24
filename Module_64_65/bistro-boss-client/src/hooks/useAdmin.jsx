import {useQuery} from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useAdmin = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
   const {data: isAdmin, isPending: isAdminLoading} = useQuery({
    queryKey: [user?.email, 'isAdmin'],
    queryFn: async() => {
        const res = await axiosSecure.get(`/users/admin/${user.email}`);
        return res.data.admin;
    }
   })
   return [isAdmin, isAdminLoading];
};

export default useAdmin;