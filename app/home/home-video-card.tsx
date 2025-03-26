export function HomeVideoCard() {
    return (
        <div className="rounded-lg bg-primary/10 p-2">
            <video width="400" className="w-full rounded-md" controls>
                <source
                    src="https://cdn1.kingscloud.co/kingscloud/files/626d3321d97bd9000785f2e4/a7ebe045-43f3-4c01-8560-05e7c62030c0?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJZ7R2RYYHYMD7OLA%2F20250326%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250326T121755Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=dbbcfe3f4d992e1c50c248ca47abba59f1c4a78fd232e9dd5e18270d81e88184"
                    type="video/mp4"
                />
            </video>
            <div className="flex flex-col gap-2 pt-4">
                <div className="flex items-center justify-between border-b border-textcolor/25 pb-3 text-base font-semibold">
                    <h3>GO2INC 4.0 Outreach</h3>
                </div>
                <p className="ellipsis-3 text-sm"></p>
            </div>
        </div>
    );
}
