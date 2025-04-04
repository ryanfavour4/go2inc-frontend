import axiosInstance from "@/config/axios";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        const queryUrl = req.url;
        const { searchParams } = new URL(queryUrl);
        const category = searchParams.get("category");
        const page = searchParams.get("page");
        const pageSize = searchParams.get("pageSize");

        try {
            const response = await axiosInstance.get(
                `${process.env.NEXT_PUBLIC_API_BASEURL}/video?category=${category}&page=${page}&pageSize=${pageSize}`,
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
                    message: "Error while getting video!",
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
            message: "Error trying to get to video db!",
            status: 500,
            error: error,
        });
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { category, link, title, isRecorded, isActive, description } = body;

        try {
            const response = await axiosInstance.post(
                `${process.env.NEXT_PUBLIC_API_BASEURL}/video/create`,
                {
                    category,
                    link,
                    title,
                    isRecorded,
                    isActive,
                    description,
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
                    message: "Error while creating video!",
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
            message: "Error trying to upload video to db!",
            status: 500,
            error: error,
        });
    }
}
