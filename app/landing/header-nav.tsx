import Logo from "@/components/svg/logo";
import Link from "next/link";
import React from "react";

export function HeaderNav() {
    return (
        <header className="shadow-md backdrop-blur-md">
            <div className="container mx-auto flex flex-col flex-wrap items-center p-2 md:flex-row">
                <Link
                    href="/"
                    className="title-font mb-4 flex items-center font-medium text-gray-900 md:mb-0"
                >
                    <Logo className={`h-20 w-20 py-2`} />
                </Link>
                <nav className="flex flex-wrap items-center justify-center gap-4 md:ml-4 md:mr-auto md:border-l md:border-dark/25 md:py-1 md:pl-4">
                    <Link href="#" className="hover:text-secondary">
                        Resources
                    </Link>
                    <Link href="#" className="hover:text-secondary">
                        Videos
                    </Link>
                    <Link href="/contact" className="hover:text-secondary">
                        Contact
                    </Link>
                </nav>
                <Link
                    href={"/app/auth/login"}
                    className="mt-4 inline-flex items-center rounded border-0 bg-gray-100 px-3 py-1 text-base hover:bg-gray-200 focus:outline-none md:mt-0"
                >
                    Join Us
                </Link>
            </div>
        </header>
    );
}
