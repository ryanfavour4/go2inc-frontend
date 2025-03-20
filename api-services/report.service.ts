import { objToQueryParams } from "@/utils/formatting";
import axios from "axios";

export interface GetReportServiceResponse {
    message: string;
    data: Data;
    status: number;
}

export interface Data {
    reports: ReportData[];
    pagination: Pagination;
}

export interface ReportData {
    id: number;
    title: string;
    description: string;
    documentLink: string;
    videoLink: string;
    createdAt: string;
    updatedAt: string;
}

export interface Pagination {
    page: number;
    pages: number;
    total: number;
    pageSize: number;
}

export const getReportService = async (credentials: { page?: number; pageSize?: number }) => {
    const response = await axios.get(`/api/report?${objToQueryParams(credentials)}`);
    const res = response.data;

    if (res.status < 200 || res.status >= 300) {
        const errorMessage = res.error?.message || res.message || "Something went wrong";
        throw new Error(errorMessage);
    }

    return res as unknown as GetReportServiceResponse;
};

export const postReportService = async (credentials: {
    title: string;
    description: string;
    documentLink: string;
    videoLink: string;
}) => {
    const response = await axios.post("/api/report", credentials);
    const res = response.data;

    if (res.status < 200 || res.status >= 300) {
        const errorMessage = res.error?.message || res.message || "Something went wrong";
        throw new Error(errorMessage);
    }

    return response;
};
