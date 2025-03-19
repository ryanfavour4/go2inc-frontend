import { SessionOptions } from "iron-session";

/**
 * This is an example of how to extend the built-in session data type.
 * You can add custom properties here, and then use them in your
 * application with `req.session.yourCustomProperty`.
 */

export interface UserSessionData {
    id: number;
    admin: boolean;
    fullname: string;
    email: string;
    kingsChatId: string;
    zone: string;
    church: string;
    createdAt: string;
    updatedAt: string;
    isLoggedIn?: boolean;
}

export interface SessionData {
    token?: string;
    isLoggedIn: boolean;
    user?: UserSessionData;
}

export const defaultSession: SessionData = {
    isLoggedIn: false,
};

export const sessionOptions: SessionOptions = {
    password: process.env.SESSION_SECRET!,
    cookieName: "go-2-inc-session",
    cookieOptions: {
        httpOnly: true, // Prevent client-side JavaScript from accessing the cookie
        secure: process.env.NODE_ENV === "production", // Set to true in production
    },
};
