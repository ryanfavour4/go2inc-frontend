import Download from "@/components/svg/download";

export function VideoCard() {
    return (
        <div className="max-w-md rounded-lg border border-primary bg-primary/10 p-2">
            <video width="400" className="w-full rounded-md" controls>
                <source
                    src="https://videos.pexels.com/video-files/6804117/6804117-uhd_2732_1440_25fps.mp4"
                    type="video/mp4"
                />
            </video>
            <div className="flex flex-col gap-2 pt-4">
                <div className="flex items-center justify-between border-b border-textcolor/25 pb-3 text-base font-semibold">
                    <h3>Video Title</h3>
                    <button className="btn w-fit bg-white/50 p-1.5">
                        <Download className="text-3xl" />
                    </button>
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
