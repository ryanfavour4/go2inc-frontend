import Layouts from "@/layout/layout";
import { HomeVideoCard } from "./home-video-card";
import { LinkImageCard } from "./link-image-card";

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
