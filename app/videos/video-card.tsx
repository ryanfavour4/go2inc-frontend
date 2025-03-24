import Download from "@/components/svg/download";

type VideoCardProps = {
    title: string;
    description: string;
    videoUrl: string;
};

export function VideoCard({ videoUrl, title, description }: VideoCardProps) {
    return (
        <div className="max-w-md rounded-lg border border-primary bg-primary/10 p-2">
            <video width="400" className="w-full rounded-md" controls>
                <source src={videoUrl} type="video/mp4" />
            </video>
            <div className="flex flex-col gap-2 pt-4">
                <div className="flex items-center justify-between border-b border-textcolor/25 pb-3 text-base font-semibold">
                    <h3>{title}</h3>
                    <button className="btn w-fit bg-white/50 p-1.5">
                        <Download className="text-3xl" />
                    </button>
                </div>
                <p className="ellipsis-3 text-sm">{description}</p>
            </div>
        </div>
    );
}
