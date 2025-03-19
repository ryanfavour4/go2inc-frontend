import axiosInstance from "@/config/axios";
import { getSession, setSession } from "@/lib/sessions/actions";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { fullname, email, kingsChatId, zone, church, designation } = body;

        try {
            const response = await axiosInstance.post(
                `${process.env.NEXT_PUBLIC_API_BASEURL}/auth/register`,
                {
                    email,
                    fullname,
                    kingsChatId,
                    zone,
                    church,
                    designation,
                },
            );

            if (response.status >= 200 && response.status < 300) {
                const { data } = response;
                const session = await getSession();
                session.isLoggedIn = true;
                session.token = data.token;
                session.user = data.user;
                await setSession({ user: data.user, token: data.token });
                await session.save();

                return NextResponse.json({
                    message: "Registration successful",
                    user: response.data.user,
                    session: session,
                    status: 201,
                });
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            if (error.response) {
                const { status, data } = error.response;

                return NextResponse.json({
                    message: "Error while registering user!",
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
            message: "Error trying to register this user!",
            status: 500,
            error: error,
        });
    }
}
