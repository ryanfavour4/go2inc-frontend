import Logo from "@/components/svg/logo";
import Link from "next/link";
import React from "react";

export function HeaderNav() {
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
                <Link href={"/auth/login"} className="btn-primary w-fit px-6 py-1.5">
                    Join Us
                </Link>
            </div>
        </header>
    );
}
