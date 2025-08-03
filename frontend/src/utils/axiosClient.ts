import axios from 'axios';
import { getLocalStorageItem } from './storage';
import { LOCAL_STORAGE_TOKEN_KEY } from './constants';

const axiosClient = axios.create({
    baseURL : process.env.NEXT_PUBLIC_API_URL
});

axiosClient.interceptors.request.use(config => {
    const token = getLocalStorageItem(LOCAL_STORAGE_TOKEN_KEY);
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
})

export default axiosClient;
