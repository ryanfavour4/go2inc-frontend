"use client";
import Image from "next/image";
import Link from "next/link";
import stockImage1 from "@/assets/images/stock-image-1.png";
import stockImage2 from "@/assets/images/stock-image-2.png";
import stockImage3 from "@/assets/images/stock-image-3.png";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { getSession } from "@/lib/sessions/actions";
import { SessionData } from "@/lib/sessions/config";
import { IronSession } from "iron-session";

export default function HeroSection() {
    const [auth, setAuth] = useState<null | IronSession<SessionData>>(null);

    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [stockImage1, stockImage2, stockImage3];

    useLayoutEffect(() => {
        getSession().then((session) => {
            setAuth(session);
        });
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 3000);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <>
            <header className="">
                {/* HERO BG AREA */}
                <div className="relative z-10 flex h-1/2 min-h-[640px] flex-col items-center justify-center overflow-hidden bg-cover bg-center text-light">
                    {/* OVERLAY & HERO IMAGE */}
                    {images.map((image, index) => (
                        <Image
                            key={index}
                            src={image}
                            alt="hero-bg"
                            className={`absolute inset-0 -z-10 h-1/2 min-h-[640px] w-full object-cover transition-opacity duration-1000 ${
                                index === currentIndex ? "opacity-100" : "opacity-0"
                            }`}
                            width={2000}
                            height={800}
                        />
                    ))}
                    <div className="absolute inset-0 -z-10 bg-black opacity-40" />

                    {/* HERO CONTENT */}
                    <div className="wrapper absolute inset-0 flex h-full flex-col justify-between gap-16 p-3">
                        {/* TOP SECTION */}
                        <div className="container mx-auto flex flex-col items-center px-2 py-10 md:flex-row">
                            <div className="relative mb-10 w-10/12">
                                <div className="clip-blob m-auto">
                                    <Image
                                        width={250}
                                        height={250}
                                        className="hidden h-full w-full bg-contain md:flex md:opacity-0"
                                        alt="hero"
                                        src={images[currentIndex]}
                                    />
                                </div>
                            </div>
                            <div className="flex w-full flex-col items-center text-center md:text-right">
                                <h1 className="mb-4 text-balance text-3xl font-semibold md:text-5xl">
                                    GO2INC 4.0 - Bringing Hope, Love & Salvation to Inner Cities
                                </h1>
                                <p className="mb-8 leading-relaxed">
                                    Join GO2INC 4.0—a global movement committed to reaching over 3.4
                                    billion indigent individuals with the life-changing power of the
                                    Gospel. Through strategic outreaches, humanitarian aid, and
                                    unwavering faith, we&apos;re transforming lives, one soul at a
                                    time. Be part of this mission today!
                                </p>
                                <div className="ml-auto flex w-full justify-center gap-4 md:w-fit md:justify-start">
                                    <Link
                                        href={auth?.isLoggedIn ? "/home" : "/auth/login"}
                                        className="btn-primary w-fit px-8"
                                    >
                                        Take the training
                                    </Link>
                                    <Link
                                        href={auth?.isLoggedIn ? "/events" : "/auth/login"}
                                        className="btn-white w-fit px-8"
                                    >
                                        Register Outreach
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
