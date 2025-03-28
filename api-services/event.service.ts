import { objToQueryParams } from "@/utils/formatting";
import axios from "axios";

export interface GetEventServiceResponse {
    message: string;
    data: Data;
    status: number;
}

export interface Data {
    events: EventData[];
    pagination: Pagination;
}

export interface EventData {
    id: number;
    name: string;
    location: string;
    expectedParticipants: number;
    eventDate: string;
    createdAt: string;
    updatedAt: string;
}

export interface Pagination {
    page: number;
    pages: number;
    total: number;
    pageSize: number;
}

export const getEventService = async (credentials: { page?: number; pageSize?: number }) => {
    const response = await axios.get(`/api/event?${objToQueryParams(credentials)}`);
    const res = response.data;

    if (res.status < 200 || res.status >= 300) {
        const errorMessage = res.error?.message || res.message || "Something went wrong";
        throw new Error(errorMessage);
    }

    return res as unknown as GetEventServiceResponse;
};

export const postEventService = async (credentials: {
    name: string;
    location: string;
    expectedParticipants: number;
    eventDate: string;
}) => {
    const response = await axios.post("/api/event", credentials);
    const res = response.data;

    if (res.status < 200 || res.status >= 300) {
        const errorMessage = res.error?.message || res.message || "Something went wrong";
        throw new Error(errorMessage);
    }

    return response;
};

export const putEventService = async (credentials: {
    id: string;
    name: string;
    location: string;
    expectedParticipants: number;
    eventDate: string;
}) => {
    const response = await axios.put("/api/event/edit", credentials);
    const res = response.data;

    if (res.status < 200 || res.status >= 300) {
        const errorMessage = res.error?.message || res.message || "Something went wrong";
        throw new Error(errorMessage);
    }

    return response;
};
