"use client";
/* eslint-disable @next/next/no-html-link-for-pages */
import Logo from "@/components/svg/logo";
import { getSession } from "@/lib/sessions/actions";
import { SessionData } from "@/lib/sessions/config";
import { IronSession } from "iron-session";
import Link from "next/link";
import React, { useLayoutEffect, useState } from "react";

export function HeaderNav() {
    const [auth, setAuth] = useState<null | IronSession<SessionData>>(null);

    useLayoutEffect(() => {
        getSession().then((session) => {
            setAuth(session);
        });
    }, []);

    return (
        <header className="shadow-md backdrop-blur-md">
            <div className="container mx-auto flex flex-row flex-wrap items-center justify-between p-2 md:justify-normal">
                <Link
                    href="/"
                    className="title-font flex items-center font-medium text-gray-900 md:mb-0"
                >
                    <Logo className={`h-20 w-20`} />
                </Link>
                <nav className="hidden flex-wrap items-center justify-center gap-4 md:ml-4 md:mr-auto md:flex md:border-l md:border-dark/25 md:py-1 md:pl-4">
                    <a href="/#about" className="hover:text-secondary">
                        About
                    </a>
                    <Link href="/videos" className="hover:text-secondary">
                        Training Resources
                    </Link>
                    <Link href="/reports" className="hover:text-secondary">
                        Report
                    </Link>
                    <Link href="/contact" className="hover:text-secondary">
                        Contact
                    </Link>
                </nav>
                <Link
                    href={auth?.isLoggedIn ? "/videos" : "/auth/login"}
                    className="btn-primary w-fit px-6 py-1.5"
                >
                    Take Training
                </Link>
            </div>
        </header>
    );
}
