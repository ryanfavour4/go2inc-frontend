import { getSession } from "@/lib/sessions/actions";
import { SessionData } from "@/lib/sessions/config";
import axios, { AxiosInstance } from "axios";
import { IronSession } from "iron-session";

const getToken: () => Promise<IronSession<SessionData>> = async () => {
    const session: IronSession<SessionData> = await getSession();
    return session;
};

const axiosInstance: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASEURL,
});

axiosInstance.interceptors.request.use(
    async (config) => {
        const token = await getToken().then((res) => res.token);

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
