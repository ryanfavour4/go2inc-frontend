import { objToQueryParams } from "@/utils/formatting";
import axios from "axios";

export interface GetCategoryServiceResponse {
    message: string;
    data: Data;
    status: number;
}

export interface Data {
    categories: unknown[];
    pagination: Pagination;
}

export interface Pagination {
    page: number;
    pages: number;
    total: number;
    pageSize: number;
}

export const getCategoryService = async (credentials: { page?: number; pageSize?: number }) => {
    const response = await axios.get(`/api/category?${objToQueryParams(credentials)}`);
    const res = response.data;

    if (res.status < 200 || res.status >= 300) {
        const errorMessage = res.error?.message || res.message || "Something went wrong";
        throw new Error(errorMessage);
    }

    return res as unknown as GetCategoryServiceResponse;
};
