// lib/navigation.ts
"use client";

export const goTo = (path: string = "/auth/login") => {
    if (typeof window !== "undefined") {
        window.location.href = path;
    }
};
