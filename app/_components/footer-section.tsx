import Logo from "@/components/svg/logo";
import Link from "next/link";
import React from "react";

export default function FooterSection() {
    return (
        <footer className="bg-dark text-light">
            <div className="container px-4">
                <Link href={"/"} className={`mb-8 flex w-fit flex-col items-center gap-1`}>
                    <Logo className={`h-20 w-20 py-2 text-secondary`} />
                </Link>
                <div className="grid w-full pb-6 md:grid-cols-6">
                    <div className="col-span-2">
                        <h2 className="title-font mb-3 text-sm font-medium tracking-widest text-light">
                            QUICK LINKS
                        </h2>
                        <nav className="mb-10 flex list-none flex-col gap-2">
                            <li>
                                <Link
                                    href={"/videos"}
                                    className="text-light/75 hover:text-secondary"
                                >
                                    Training Resources
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"/events"}
                                    className="text-light/75 hover:text-secondary"
                                >
                                    Create Events
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"/reports"}
                                    className="text-light/75 hover:text-secondary"
                                >
                                    Submit Reports{" "}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"/contact"}
                                    className="text-light/75 hover:text-secondary"
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </nav>
                    </div>

                    <div className="col-span-4 flex flex-col items-start gap-2">
                        <div className="relative mr-2 w-40 sm:mr-4 sm:w-64">
                            <h2 className="title-font mb-3 text-sm font-medium tracking-widest text-light">
                                NEWSLETTER EMAIL
                            </h2>
                            <input
                                type="email"
                                name="email"
                                className="block w-full rounded-md border-2 bg-white px-3 py-2.5 text-base text-textcolor -outline-offset-1 outline-primary ring-primary/25 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:ring-2 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500 disabled:ring-0 sm:text-sm/6 md:text-sm"
                            />
                        </div>
                        <button
                            disabled
                            className="inline-flex w-fit rounded border-0 bg-primary px-6 py-2 text-white hover:bg-primary focus:outline-none"
                        >
                            Submit
                        </button>
                        <small className="">
                            Subscribe to our newsletter to stay up to date with our latest updates.
                            We promise to never spam you.
                        </small>
                    </div>
                </div>
            </div>

            <div className="bg-primary/10">
                <div className="container mx-auto flex flex-col flex-wrap px-5 py-4 sm:flex-row">
                    <p className="text-center text-sm text-light/70 sm:text-left">
                        © 2025 Go2Inc —
                        <a
                            href="https://kingschat.online/user/icm4c"
                            rel="noopener noreferrer"
                            className="ml-1 text-light/50"
                            target="_blank"
                        >
                            @Innercitymission4children
                        </a>
                    </p>
                    <span className="mt-2 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
                        <a className="text-gray-500">
                            <svg
                                fill="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                className="h-5 w-5"
                                viewBox="0 0 24 24"
                            >
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-500">
                            <svg
                                fill="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                className="h-5 w-5"
                                viewBox="0 0 24 24"
                            >
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-500">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                className="h-5 w-5"
                                viewBox="0 0 24 24"
                            >
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-500">
                            <svg
                                fill="currentColor"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="0"
                                className="h-5 w-5"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="none"
                                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                                ></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    );
}
