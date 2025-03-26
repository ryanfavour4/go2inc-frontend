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
                        <LinkImageCard
                            title="Training Videos"
                            description="Access exclusive GO2INC training videos to equip yourself for impactful outreach. Learn strategies, best practices, and insights to effectively share the Gospel and transform lives."
                            link="/videos"
                        />
                        <LinkImageCard
                            title="Register Outreach"
                            description="Ensure proper tracking and follow-up by submitting your GO2INC outreach report. Share your impact, testimonies, and key details to help advance the mission."
                            link="/reports"
                        />
                    </div>
                </div>
            </div>
        </Layouts>
    );
}
