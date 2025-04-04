// lib/navigation.ts
"use client";
import { redirect, useRouter } from "next/navigation";

export const goTo = (path: string = "/auth/login") => {
    if (typeof window !== "undefined") {
        window.location.href = path;
    }
};
