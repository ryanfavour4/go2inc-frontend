import { decryptData } from "@/utils/crypt";
import axios, { AxiosInstance } from "axios";

const getToken = (): string | null => {
    return decryptData(sessionStorage.getItem("auth") || "null")?.token;
};

const axiosInstance: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASEURL,
    withCredentials: true,
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = getToken();
        if (token && config.headers) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

export default axiosInstance;
