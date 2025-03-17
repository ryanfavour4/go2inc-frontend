import Link from "next/link";
import ArrowRight from "@/components/svg/arrow-right";
import Layouts from "@/layout/layout";

export default function Home() {
    return (
        <Layouts>
            <div className="">
                <div className="container grid grid-cols-1 gap-5 px-4 pb-8 md:grid-cols-5">
                    <div className="md:col-span-3">
                        <HomeVideoCard />
                    </div>
                    <div className="flex flex-col gap-4 md:col-span-2">
                        <LinkImageCard />
                        <LinkImageCard />
                        <LinkImageCard />
                    </div>
                </div>
            </div>
        </Layouts>
    );
}

export function HomeVideoCard() {
    return (
        <div className="rounded-lg bg-primary/10 p-2">
            <video width="400" className="w-full rounded-md" controls>
                <source
                    src="https://videos.pexels.com/video-files/6804117/6804117-uhd_2732_1440_25fps.mp4"
                    type="video/mp4"
                />
            </video>
            <div className="flex flex-col gap-2 pt-4">
                <div className="flex items-center justify-between border-b border-textcolor/25 pb-3 text-base font-semibold">
                    <h3>Video Title</h3>
                </div>
                <p className="ellipsis-3 text-sm">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam iure enim
                    alias architecto nobis labore debitis non unde vitae excepturi ipsa eaque saepe,
                    dignissimos consectetur ratione tempora repellendus! Enim, necessitatibus.
                </p>
            </div>
        </div>
    );
}

export function LinkImageCard() {
    return (
        <div
            className={`min-h-36 rounded-lg bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('../assets/images/kids-smiling.png')] bg-center`}
        >
            <div className="wrapper flex flex-col justify-between gap-3 px-3 py-3 text-light">
                <h3 className="text-lg font-semibold">Training Videos</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere aspernatur
                    tempore, pariatur.
                </p>

                <Link
                    href={"#"}
                    className="btn-white ml-auto mt-4 flex aspect-square w-fit items-center justify-center rounded-full p-2"
                >
                    <ArrowRight className="text-lg" />
                </Link>
            </div>
        </div>
    );
}
