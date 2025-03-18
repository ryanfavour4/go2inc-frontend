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
