// eslint-disable-next-line import/named
import axios, { AxiosInstance } from "axios";

// const baseUrl = 'https://dev.makeittakeit.kr'
const baseUrl = 'https://api.makeittakeit.kr'

const axiosUrl: AxiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,

});

axiosUrl.interceptors.request.use(
    (config) => config,
    (error) => Promise.reject(error)
);

axiosUrl.interceptors.response.use(
    (response) => response,
    (error) => {
        console.log(error);
        return Promise.reject(error);
    }
);



export default axiosUrl;


