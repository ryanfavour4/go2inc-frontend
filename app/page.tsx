import kidsImage from "@/assets/images/kids-smiling.png";
import stockImage1 from "@/assets/images/stock-image-1.png";
import stockImage4 from "@/assets/images/stock-image-4.jpg";
import logo from "@/assets/images/logo.png";
import Link from "next/link";
import { HeaderNav } from "./_components/header-nav";
import FooterSection from "./_components/footer-section";
import HeroSection from "./_components/hero-section";
import Image from "next/image";
import Logo from "@/components/svg/logo";
import Script from "next/script";

const Home = () => {
    const targetLocations = [
        "Inner-city communities",
        "Orphanage homes, foster homes, and other child care institutions",
        "Streets",
        "IDP Camps, Refugee Camps, Immigration Camps",
        "Correctional institutions and facilities such as Prisons, Remand homes, detention centers, etc.",
        "Labour camps, factories, etc.",
        "Disabled Persons Homes for Children and Adults",
        "Specialized Institutionalized Care Homes",
        "Community Health Centers",
        "Homeless Shelters",
        "Other forms of formal and informal settlements for the indigent",
    ];

    return (
        <>
            <HeaderNav />
            <HeroSection />

            {/* VIDEOS */}
            {/* <section className="bg-pattern-hero relative bg-cover text-gray-600">
                <div className="container mx-auto flex flex-col items-center px-2 md:flex-row md:gap-10">
                    <div className="relative mb-10 w-10/12">
                        <div>
                            <iframe
                                src="https://player.vimeo.com/video/1065561755?h=e64fa4dae8&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                                title="GO2INC for Church Planters"
                                className="relative mx-auto flex h-[250px] w-full !max-w-4xl flex-col items-center justify-center rounded-lg border-4 border-dashed border-transparent bg-transparent md:h-[500px]"
                            ></iframe>
                        </div>
                        <Script src="https://player.vimeo.com/api/player.js"></Script>
                    </div>
                    <div className="flex w-full flex-col text-center md:text-left">
                        <h3 className="mb-4 text-balance text-xl font-semibold text-primary md:text-2xl">
                            GO2INC for Church Planters
                        </h3>
                        <p className="mb-8 leading-relaxed">
                            Discover powerful strategies for church planting and outreach as this
                            training explores how to effectively reach and transform indigent
                            communities worldwide. Learn how to leverage the Inner City Mission to
                            spread the Gospel, provide humanitarian aid, and impact millions in
                            underserved areas. Gain insights, tools, and inspiration to fulfil the
                            mission of taking the Gospel to all nations
                        </p>
                        <div className="flex w-full justify-center gap-4 md:justify-start">
                            <Link href="/auth/login" className="btn-primary w-fit px-8">
                                Join Us Now
                            </Link>
                            <Link href="/auth/login" className="btn-white w-fit px-8">
                                Register Outreach
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-pattern-hero relative bg-cover text-gray-600">
                <div className="container mx-auto flex flex-col items-center px-2 pb-16 md:flex-row md:gap-10">
                    <div className="relative mb-10 w-10/12">
                        <div>
                            <iframe
                                src="https://player.vimeo.com/video/1068814156?h=f7b2e9f20a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                                title="GO2INC for Cell Leaders"
                                className="relative mx-auto flex h-[250px] w-full !max-w-4xl flex-col items-center justify-center rounded-lg border-4 border-dashed border-transparent bg-transparent md:h-[500px]"
                            ></iframe>
                        </div>
                        <Script src="https://player.vimeo.com/api/player.js"></Script>
                    </div>
                    <div className="flex w-full flex-col text-center md:text-left">
                        <h3 className="mb-4 text-balance text-xl font-semibold text-primary md:text-2xl">
                            GO2INC for Cell Leaders
                        </h3>
                        <p className="mb-8 leading-relaxed">
                            Step into your divine calling as a cell leader with GO2INC for Cell
                            Leaders. This dynamic session equips you with strategic insights,
                            practical tools, and a renewed vision to grow and strengthen your cell
                            group. Learn how to inspire, disciple, and expand your reach as you take
                            the Gospel further. Elevate your leadership, impact lives, and drive
                            unstoppable growth in your ministry!
                        </p>
                        <div className="flex w-full justify-center gap-4 md:justify-start">
                            <Link href="/auth/login" className="btn-primary w-fit px-8">
                                Join Us Now
                            </Link>
                            <Link href="/auth/login" className="btn-white w-fit px-8">
                                Register Outreach
                            </Link>
                        </div>
                    </div>
                </div>
            </section> */}

            <section className="body-font bg-primary/10 px-3 py-9">
                <div className="container rounded-xl bg-white py-8">
                    <h3 className="m-auto max-w-sm text-center text-2xl font-semibold text-primary">
                        GO2INC 4.0
                    </h3>

                    <div className="relative m-auto mb-10 mt-10 w-[90%] md:mt-0 lg:mt-8">
                        <div>
                            <iframe
                                src="https://player.vimeo.com/video/1069559842?h=c363242a1a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                                title="GO2INC OUTREACH PROMO"
                                className="relative mx-auto flex h-[300px] w-[100%] !max-w-4xl flex-col items-center justify-center rounded-lg border-4 border-dashed border-transparent bg-transparent md:h-[550px]"
                            ></iframe>
                        </div>
                        <Script src="https://player.vimeo.com/api/player.js" />
                    </div>
                </div>
            </section>

            <section id="about" className="body-font bg-primary/10 px-3 py-9">
                <div className="container rounded-xl bg-white py-8">
                    <h3 className="m-auto max-w-sm text-center text-2xl font-semibold text-primary">
                        Welcome to GO2INC 4.0 – The Gospel Outreach to the Inner Cities!
                    </h3>

                    <div className="mt-8 border-t-2 py-8">
                        <div className="flex flex-col items-center justify-between gap-8 px-4 py-6 md:flex-row">
                            <div className="flex w-full items-center justify-center border-l-2 border-primary bg-gradient-to-r from-primary/15 to-white/5 py-4">
                                <Image
                                    width={250}
                                    height={250}
                                    className="h-full w-full max-w-40 opacity-50 md:max-w-60"
                                    alt="hero"
                                    src={logo}
                                />
                            </div>
                            <div className="w-full">
                                <p className="text-left leading-normal md:ml-auto md:w-3/4 md:text-right md:text-base">
                                    A collaborative initiative of Loveworld Church Growth
                                    International, Loveworld Children Ministry and Schools, The
                                    Loveworld Cell Ministry, Loveworld Global Missions Mandate, and
                                    the InnerCity Mission for Children,
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col-reverse items-center justify-between gap-8 px-4 py-6 md:flex-row">
                            <div className="w-full">
                                <p className="text-left leading-normal md:ml-auto md:w-3/4 md:text-left md:text-base">
                                    The Gospel Outreach to the Inner Cities aka GO2INC is a
                                    specialized global ministry strategy designed to reach and
                                    preserve the over 3.4 billion indigent population living in
                                    rural areas, inner cities, villages, streets, slums, displaced
                                    persons camps, orphanages, informal settlements, and underserved
                                    locations with the saving power of the Gospel.
                                </p>
                            </div>

                            <div className="flex w-full items-center justify-center border-r-2 border-primary bg-gradient-to-l from-primary/15 to-white/5 py-4">
                                <Image
                                    width={250}
                                    height={250}
                                    className="h-full w-full max-w-40 opacity-50 md:max-w-60"
                                    alt="hero"
                                    src={logo}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-between gap-8 px-4 py-6 md:flex-row">
                            <div className="flex w-full items-center justify-center border-l-2 border-primary bg-gradient-to-r from-primary/15 to-white/5 py-4">
                                <Image
                                    width={250}
                                    height={250}
                                    className="h-full w-full max-w-40 opacity-50 md:max-w-60"
                                    alt="hero"
                                    src={logo}
                                />
                            </div>
                            <div className="w-full">
                                <p className="text-left leading-normal md:ml-auto md:w-3/4 md:text-right md:text-base">
                                    GO2INC 4.0 is not just about evangelism—it is about impacting
                                    lives holistically, demonstrating God’s love in action through
                                    strategic humanitarian interventions that eliminate distractions
                                    and open hearts to receive the Gospel
                                    <br />
                                    <i>
                                        <b>(James 2:15-16).</b>
                                    </i>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-3 py-9">
                <div className="container">
                    <h3 className="m-auto max-w-sm text-center text-2xl font-semibold text-secondary">
                        GO2INC Outreach Models
                    </h3>

                    <p className="m-auto mt-4 max-w-lg text-center">
                        GO2INC 4.0 is designed to reach every segment of the indigent population
                        through strategic, customized outreaches. our mission is to ensure no one is
                        left out of the Gospel&apos;s saving power.
                    </p>

                    <div className="mt-8 border-t-2 py-8">
                        <div className="flex flex-col items-center md:flex-row">
                            <div className="mb-10 w-10/12">
                                <div className="clip-blob m-auto max-w-96 shadow-2xl">
                                    <Image
                                        width={250}
                                        height={250}
                                        className="h-full w-full max-w-96 bg-contain"
                                        alt="kidsImage"
                                        src={kidsImage}
                                    />
                                </div>
                            </div>
                            <div className="flex w-full flex-col gap-3">
                                <h4 className="text-lg font-semibold md:text-xl">
                                    1. GO2INC LightUp Children – Reaching Indigent Children with the
                                    Gospel
                                </h4>
                                <p className="leading-relaxed">
                                    Millions of children in slums, orphanages, and refugee camps
                                    have never heard the Gospel or experienced the love of God.
                                    GO2INC LightUp Children is an outreach model specifically
                                    designed to minister to this vulnerable population through fun,
                                    engaging, and life-transforming activities while incorporating
                                    humanitarian aid as the need arises (food, clothing, scholastic
                                    kits)
                                </p>
                                <div className="">
                                    <h5 className="mb-4 text-lg font-semibold text-primary">
                                        Ideal Locations for GO2INC LightUp Children:
                                    </h5>
                                    <ul className="list-inside list-disc">
                                        <li>Orphanages & foster homes</li>
                                        <li>Schools in underserved communities</li>
                                        <li>Refugee & IDP camps </li>
                                        <li>Homeless shelters & streets </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <hr />
                        <div className="mt-9 flex flex-col items-center md:flex-row">
                            <div className="mb-10 w-10/12">
                                <div className="clip-blob m-auto max-w-96 shadow-2xl">
                                    <Image
                                        width={250}
                                        height={250}
                                        className="h-full w-full max-w-96 bg-contain"
                                        alt="kidsImage"
                                        src={kidsImage}
                                    />
                                </div>
                            </div>
                            <div className="flex w-full flex-col gap-3">
                                <h4 className="text-lg font-semibold md:text-xl">
                                    2. GO2INC Street – Transforming Street Lives Through the
                                    Gospel{" "}
                                </h4>
                                <p className="leading-relaxed">
                                    Many young people live on the streets, labeled as misfits,
                                    outcasts, and forgotten. GO2INC Street is an outreach model
                                    designed to bring them hope, restoration, and purpose through
                                    the Word of God and practical interventions.
                                </p>
                                <div className="">
                                    <h5 className="mb-4 text-lg font-semibold text-primary">
                                        Ideal Locations for GO2INC Street:
                                    </h5>
                                    <ul className="list-inside list-disc">
                                        <li>Inner-city slums</li>
                                        <li>Homeless shelters</li>
                                        <li>Urban streets & hangout spots</li>
                                        <li>Drug rehabilitation centers </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <hr />
                        <div className="mt-9 flex flex-col items-center md:flex-row">
                            <div className="mb-10 w-10/12">
                                <div className="clip-blob m-auto max-w-96 shadow-2xl">
                                    <Image
                                        width={250}
                                        height={250}
                                        className="h-full w-full max-w-96 bg-contain"
                                        alt="kidsImage"
                                        src={kidsImage}
                                    />
                                </div>
                            </div>
                            <div className="flex w-full flex-col gap-3">
                                <h4 className="text-lg font-semibold md:text-xl">
                                    3. GO2INC Community{" "}
                                </h4>
                                <p className="leading-relaxed">
                                    GO2INC Community is designed for large-scale outreach programs
                                    targeting entire communities This model enables us to reach
                                    entire populations in underserved locations at once.{" "}
                                </p>
                                <div className="">
                                    <h5 className="mb-4 text-lg font-semibold text-primary">
                                        Ideal Locations for GO2INC Community:{" "}
                                    </h5>

                                    <ul className="list-inside list-disc">
                                        <li>Remote villages & rural areas</li>
                                        <li>IDP & refugee camps</li>
                                        <li>Inner-city neighborhoods</li>
                                        <li>Large homeless & slum communities</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="">
                <div className="container mx-auto flex flex-wrap px-5 py-16">
                    <div className="mb-5 flex w-full flex-col items-center gap-2">
                        <h3 className="m-auto max-w-sm text-center text-2xl font-semibold text-secondary">
                            Where Can Go2Inc Be Organized
                        </h3>

                        <p className="m-auto mt-4 max-w-lg text-center">
                            GO2INC events can be hosted in the following official locations.
                        </p>
                    </div>

                    <div className="flex w-full flex-wrap justify-between border-t pt-6">
                        <div className="md:w-1/2 md:py-6 md:pr-10 lg:w-2/5">
                            {targetLocations.map((location) => {
                                return (
                                    <div key={location} className="relative flex pb-12">
                                        <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                                            <div className="pointer-events-none h-full w-1 bg-gray-200"></div>
                                        </div>
                                        <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-primary bg-white text-white shadow">
                                            <Logo className="w-10" />
                                        </div>
                                        <div className="flex flex-grow items-center pl-4">
                                            <h2 className="title-font text-base font-medium capitalize tracking-wider text-dark">
                                                {location}
                                            </h2>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <Image
                            width={250}
                            height={250}
                            className="mt-12 w-full rounded-lg object-cover object-center md:mt-0 md:w-1/2"
                            unoptimized
                            src={stockImage4}
                            alt="step"
                        />
                    </div>
                </div>
            </section>

            <section className="overflow-hidden bg-primary/10">
                <div className="container mx-auto px-5 py-20">
                    <div className="-my-8 divide-y-2 divide-gray-100">
                        <div className="flex flex-wrap border-y border-dark/25 bg-light px-4 py-8 md:flex-nowrap">
                            <div className="mb-6 flex flex-shrink-0 flex-col md:mb-0 md:w-64">
                                <span className="title-font font-semibold text-dark/75">
                                    Upcoming
                                </span>
                                <span className="mt-1 text-sm text-gray-500">
                                    March 26th - March 28th, 2025
                                    <br />
                                    (2 PM Daily)
                                </span>
                            </div>
                            <div className="md:flex-grow">
                                <h2 className="mb-2 text-2xl font-medium text-secondary">
                                    GO2INC Effectuators Training Dates{" "}
                                </h2>
                                <p className="leading-relaxed">
                                    Get equipped for effective outreach execution with GO2INC 4.0
                                    Download Training Materials and Resources! Prepare, Engage,
                                    Transform Lives!
                                </p>
                                <Link
                                    href={"/events"}
                                    className="mt-4 inline-flex items-center text-secondary"
                                >
                                    Learn More
                                    <svg
                                        className="ml-2 h-4 w-4"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white">
                <div className="mx-auto max-w-screen-xl items-center gap-8 px-4 py-8 sm:py-16 md:grid md:grid-cols-2 lg:px-6 xl:gap-16">
                    <Image
                        className="w-full rounded-lg"
                        width={250}
                        height={250}
                        src={stockImage1}
                        alt="dashboard image"
                    />
                    <div className="mt-4 md:mt-0">
                        <h2 className="mb-4 text-3xl font-extrabold tracking-tight">
                            Be a Part of the Mission – Get Started Today!{" "}
                        </h2>
                        <p className="mb-6 md:text-base">
                            Join GO2INC in reaching and transforming lives across inner cities,
                            orphanages, refugee camps, and underserved communities. Whether
                            you&apos;re launching an outreach, submitting reports, or accessing
                            training, you&apos;re making an eternal impact. Take the next step and
                            be part of the mission today!
                        </p>
                        <Link
                            href="/auth/login"
                            className="inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-medium text-white focus:ring-4"
                        >
                            Register an Outreach
                            <svg
                                className="-mr-1 ml-2 h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            <FooterSection />
        </>
    );
};

export default Home;
