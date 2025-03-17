import Layouts from "@/layout/layout";
import { VideoCard } from "./video-card";

export default function Videos() {
    return (
        <Layouts>
            <div className="">
                <div className="container grid grid-cols-1 gap-5 px-4 pb-8 md:grid-cols-2 lg:grid-cols-3">
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
