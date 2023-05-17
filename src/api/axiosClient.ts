import axios from "axios";

const axiosClient = axios.create({
    baseURL: "https://dummyjson.com/",
    headers: { //backend yêu cầu gì thì nạp vào
        // "Content-Type": "application/json",
    },
});
export default axiosClient;
/// Add a request interceptor
axiosClient.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response.data;
    },
    function (error) {
        // Do something with response error
        return Promise.reject(error);
    }
);
// dùng axios.create khác axios.get ở interceptors