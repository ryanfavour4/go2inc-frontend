import { goTo } from "@/lib/navigate";
import { objToQueryParams } from "@/utils/formatting";
import axios from "axios";
import toast from "react-hot-toast";

export interface GetVideosServiceResponse {
    message: string;
    data: Data;
    status: number;
}

export interface Data {
    videos: VideosData[];
    pagination: Pagination;
}

export interface VideosData {
    id: number;
    category: string;
    link: string;
    title: string;
    isRecorded: boolean;
    isActive: boolean;
    description: string;
    createdAt: string;
    updatedAt: string;
}

export interface Pagination {
    page: number;
    pages: number;
    total: number;
    pageSize: number;
}

export const getVideosService = async (credentials: {
    category?: number;
    page?: number;
    pageSize?: number;
}) => {
    const response = await axios.get(`/api/video?${objToQueryParams(credentials)}`);
    const res = response.data;
    if (res.error.statusCode === 401 || res.error.statusCode === 403) {
        toast.error("Your session has expired. Redirecting to login...");
        goTo("/auth/login");
    }

    if (res.status < 200 || res.status >= 300) {
        const errorMessage = res.error?.message || res.message || "Something went wrong";
        throw new Error(errorMessage);
    }

    return res as unknown as GetVideosServiceResponse;
};

export const postVideoService = async (credentials: {
    category: string;
    link: string;
    title: string;
    isRecorded: boolean;
    isActive: boolean;
    description: string;
}) => {
    const response = await axios.post("/api/video", credentials);
    const res = response.data;

    if (res.status < 200 || res.status >= 300) {
        const errorMessage = res.error?.message || res.message || "Something went wrong";
        throw new Error(errorMessage);
    }

    return response;
};
