import Download from "@/components/svg/download";
import Layouts from "@/layout/layout";

export default function Videos() {
    return (
        <Layouts>
            <div className="">
                <div className="container px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-8">
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                </div>
            </div>
        </Layouts>
    );
}

export function VideoCard() {
    return (
        <div className="border bg-primary/10 p-2 rounded-lg border-primary max-w-md">
            <video width="400" className="w-full rounded-md" controls>
                <source
                    src="https://videos.pexels.com/video-files/6804117/6804117-uhd_2732_1440_25fps.mp4"
                    type="video/mp4"
                />
            </video>
            <div className="flex flex-col gap-2 pt-4">
                <div className="flex items-center justify-between font-semibold text-base pb-3 border-textcolor/25 border-b">
                    <h3>Video Title</h3>
                    <button className="btn bg-white/50 w-fit p-1.5">
                        <Download className="text-3xl" />
                    </button>
                </div>
                <p className="ellipsis-3 text-sm">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Aliquam iure enim alias architecto nobis labore debitis non
                    unde vitae excepturi ipsa eaque saepe, dignissimos
                    consectetur ratione tempora repellendus! Enim,
                    necessitatibus.
                </p>
            </div>
        </div>
    );
}
