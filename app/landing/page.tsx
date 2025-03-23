import Image from "next/image";
import { HeaderNav } from "./header-nav";
import heroImage from "@/assets/images/kids-smiling.png";
import Link from "next/link";

const Home = () => {
    return (
        <>
            <HeaderNav />

            <section className="bg-pattern-hero relative bg-cover text-gray-600">
                <div className="container mx-auto flex flex-col items-center px-2 py-16 md:flex-row">
                    <div className="relative mb-10 w-10/12">
                        <div className="clip-blob m-auto">
                            <Image
                                width={250}
                                height={250}
                                className="h-full w-full"
                                alt="hero"
                                src={heroImage}
                            />
                        </div>
                    </div>
                    <div className="flex w-full flex-col items-center text-center md:text-left">
                        <h1 className="mb-4 text-balance text-3xl font-semibold text-primary md:text-5xl">
                            GO2INC 4.0 - Bringing Hope, Love & Salvation to Inner Cities
                        </h1>
                        <p className="mb-8 leading-relaxed">
                            Join GO2INC 4.0—a global movement committed to reaching over 3.4 billion
                            indigent individuals with the life-changing power of the Gospel. Through
                            strategic outreaches, humanitarian aid, and unwavering faith, we&apos;re
                            transforming lives, one soul at a time. Be part of this mission today!
                        </p>
                        <div className="flex w-full justify-center gap-4 md:justify-start">
                            <Link href="/" className="btn-primary w-fit px-8">
                                Join Us Now
                            </Link>
                            <Link href="/" className="btn-white w-fit px-8">
                                Watch Videos
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
