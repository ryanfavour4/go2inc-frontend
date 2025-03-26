import Script from "next/script";

type VideoCardProps = {
    title: string;
    description: string;
    videoUrl: string;
    iframe: boolean;
    className?: string;
};

export function HomeVideoCard({
    videoUrl,
    title = "go2inc",
    description = "go2inc",
    iframe,
    className,
}: VideoCardProps) {
    return (
        <div className={`${className} rounded-lg bg-primary/10 p-2`}>
            {iframe ? (
                <>
                    <iframe
                        width={"100%"}
                        src={videoUrl}
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                        className="aspect-video h-full w-full"
                        title={title}
                    />
                    <Script src="https://player.vimeo.com/api/player.js" />
                </>
            ) : (
                <video width="400" className="w-full rounded-md" controls>
                    <source src={videoUrl} type="video/mp4" />
                </video>
            )}
            <div className="flex flex-col gap-2 pt-4">
                <div className="flex items-center justify-between border-b border-textcolor/25 pb-3 text-base font-semibold">
                    <h3>{title}</h3>
                </div>
                <p className="ellipsis-3 text-sm">{description}</p>
            </div>
        </div>
    );
}
