import axios from "axios";

export const postLoginService = async (credentials: { email: string }) => {
    const response = await axios.post("/api/auth/login", credentials);
    const res = response.data;

    if (res.status < 200 || res.status >= 300) {
        const errorMessage = res.error?.message || res.message || "Something went wrong";
        throw new Error(errorMessage);
    }

    return response;
};

export const postRegisterService = async (credentials: {
    email: string;
    fullname: string;
    kingsChatId: string;
    zone: string;
    church: string;
    designation: string[];
}) => {
    const response = await axios.post("/api/auth/register", credentials);
    const res = response.data;

    if (res.status < 200 || res.status >= 300) {
        const errorMessage = res.error?.message || res.message || "Something went wrong";
        throw new Error(errorMessage);
    }

    return response;
};

export const getAuthUserService = async () => {
    const response = await axios.get(`/api/session`);
    const res = response.data;

    if (res.status < 200 || res.status >= 300) {
        const errorMessage = res.error?.message || res.message || "Something went wrong";
        throw new Error(errorMessage);
    }

    return res;
};
