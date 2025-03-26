import Layouts from "@/layout/layout";
import { HomeVideoCard } from "./home-video-card";
import { LinkImageCard } from "./link-image-card";
import { VideoCard } from "../videos/video-card";

export default function Home() {
    return (
        <Layouts>
            <div className="">
                <div className="container grid grid-cols-1 gap-5 px-4 pb-8 md:grid-cols-5">
                    <div className="md:col-span-3">
                        <HomeVideoCard
                            title="Go2Inc Training Pastor Lanre Alabi"
                            description=""
                            videoUrl="https://player.vimeo.com/video/1069630045?h=ec216667b3&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                            iframe={true}
                        />
                    </div>
                    <div className="flex flex-col gap-4 md:col-span-2">
                        <VideoCard
                            description=""
                            title="GO2INC 4.0 Publicity"
                            iframe={false}
                            videoUrl="https://cdn1.kingscloud.co/kingscloud/files/626d3321d97bd9000785f2e4/a7ebe045-43f3-4c01-8560-05e7c62030c0?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJZ7R2RYYHYMD7OLA%2F20250326%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250326T121755Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=dbbcfe3f4d992e1c50c248ca47abba59f1c4a78fd232e9dd5e18270d81e88184"
                        />

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
