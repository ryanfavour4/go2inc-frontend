export function HomeVideoCard() {
    return (
        <div className="rounded-lg bg-primary/10 p-2">
            <video width="400" className="w-full rounded-md" controls>
                <source
                    src="https://player.vimeo.com/video/1068814156?h=f7b2e9f20a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    type="video/*"
                />
            </video>
            <div className="flex flex-col gap-2 pt-4">
                <div className="flex items-center justify-between border-b border-textcolor/25 pb-3 text-base font-semibold">
                    <h3>Watch Live Broadcast</h3>
                </div>
                <p className="ellipsis-3 text-sm">
                    No live video is available at this time. Please check back later for updates.
                </p>
            </div>
        </div>
    );
}
