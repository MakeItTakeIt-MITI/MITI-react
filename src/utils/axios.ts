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

axiosUrl.interceptors.request.use((config) => {

    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
}

);

// axiosUrl.interceptors.response.use(
//     (response) => response,
//     async (error) => {
//         // localStorage.removeItem('accessToken')

//         const statusCode = error.response.data.status_code
//         const errorCode = error.response.data.error_code

//         // if (statusCode === 400 && errorCode === 520) {
//         if (statusCode === 401 && errorCode === 502) {
//             try {
//                 const refreshToken = localStorage.getItem('refreshToken');
//                 if (!refreshToken) {
//                     return Promise.reject(error);
//                 }
//                 const response = await axios.post('https://dev.makeittakeit.kr/auth/refresh-token', {}, {
//                     headers: {
//                         'refresh': refreshToken,
//                     }
//                 });
//                 const { access, refresh } = response.data.data
//                 localStorage.setItem('accessToken', access)
//                 localStorage.setItem('refreshToken', refresh)
//                 if (!localStorage.getItem("accessToken")) {
//                     window.location.reload()
//                 }
//                 const originalRequest = error.config;
//                 originalRequest.headers.Authorization = `Bearer ${access}`;
//                 return axios(originalRequest);
//             } catch (newError) {
//                 return Promise.reject(newError);
//             }
//         }
//         return error.response
//     }
// )

axios.interceptors.response.use()

export default axiosUrl;


