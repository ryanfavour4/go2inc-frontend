import axiosInstance from "@/config/axios";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        const queryUrl = req.url;
        const { searchParams } = new URL(queryUrl);
        const page = searchParams.get("page");
        const pageSize = searchParams.get("pageSize");

        try {
            const response = await axiosInstance.get(
                `${process.env.NEXT_PUBLIC_API_BASEURL}/event/user?page=${page}&pageSize=${pageSize}`,
            );

            if (response.status >= 200 && response.status < 300) {
                const { data } = response;

                return NextResponse.json({
                    message: "Successful",
                    data: data,
                    status: 200,
                });
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            if (error.response) {
                const { status, data } = error.response;

                return NextResponse.json({
                    message: "Error while getting events!",
                    status: status,
                    error: data,
                });
            } else {
                return NextResponse.json({
                    message: "Unexpected error occurred!",
                    status: 500,
                    error: error,
                });
            }
        }
    } catch (error) {
        return NextResponse.json({
            message: "Error trying to get to events db!",
            status: 500,
            error: error,
        });
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, location, expectedParticipants, eventDate } = body;

        try {
            const response = await axiosInstance.post(
                `${process.env.NEXT_PUBLIC_API_BASEURL}/event/create`,
                {
                    name,
                    location,
                    expectedParticipants,
                    eventDate,
                },
            );

            if (response.status >= 200 && response.status < 300) {
                const { data } = response;

                return NextResponse.json({
                    message: "Successful",
                    data: data,
                    status: 201,
                });
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            if (error.response) {
                const { status, data } = error.response;

                return NextResponse.json({
                    message: "Error while creating event!",
                    status: status,
                    error: data,
                });
            } else {
                return NextResponse.json({
                    message: "Unexpected error occurred!",
                    status: 500,
                    error: error,
                });
            }
        }
    } catch (error) {
        return NextResponse.json({
            message: "Error trying to upload event to db!",
            status: 500,
            error: error,
        });
    }
}

// EDIT REQUEST
export async function PUT(req: Request) {
    try {
        const body = await req.json();
        const { id, name, location, expectedParticipants, eventDate } = body;

        try {
            const response = await axiosInstance.put(
                `${process.env.NEXT_PUBLIC_API_BASEURL}/event/update/${id}`,
                {
                    name,
                    location,
                    expectedParticipants,
                    eventDate,
                },
            );

            if (response.status >= 200 && response.status < 300) {
                const { data } = response;

                return NextResponse.json({
                    message: "Successful",
                    data: data,
                    status: 200,
                });
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            if (error.response) {
                const { status, data } = error.response;

                return NextResponse.json({
                    message: "Error while updating event!",
                    status: status,
                    error: data,
                });
            } else {
                return NextResponse.json({
                    message: "Unexpected error occurred!",
                    status: 500,
                    error: error,
                });
            }
        }
    } catch (error) {
        return NextResponse.json({
            message: "Error trying to update event to db!",
            status: 500,
            error: error,
        });
    }
}
