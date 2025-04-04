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
                `${process.env.NEXT_PUBLIC_API_BASEURL}/report/user?page=${page}&pageSize=${pageSize}`,
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
                    message: "Error while getting reports!",
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
            message: "Error trying to get to reports db!",
            status: 500,
            error: error,
        });
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { title, description, documentLink, videoLink } = body;

        try {
            const response = await axiosInstance.post(
                `${process.env.NEXT_PUBLIC_API_BASEURL}/report/create`,
                {
                    title,
                    description,
                    documentLink,
                    videoLink,
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
                    message: "Error while creating report!",
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
            message: "Error trying to upload report to db!",
            status: 500,
            error: error,
        });
    }
}
