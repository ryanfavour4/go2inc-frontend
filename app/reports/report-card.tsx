import File from "@/components/svg/file";
import Logo from "@/components/svg/logo";
import PenEdit from "@/components/svg/pen-edit";
import TrashDelete from "@/components/svg/trash-delete";

type ReportCardProps = {
    documentLink: string;
    videoLink: string;
    title: string;
    description: string;
};

export function ReportCard({ description, documentLink, title, videoLink }: ReportCardProps) {
    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        alert("Copied to clipboard: " + text);
    };

    return (
        <div className="relative h-fit w-full overflow-hidden rounded-lg border border-primary bg-white p-4 shadow">
            <div className="">
                <video width="400" className="w-full rounded-md" controls>
                    <source src={videoLink} type="video/mp4" />
                </video>
            </div>

            <Logo
                className={`absolute -bottom-8 -right-8 h-40 w-40 -rotate-45 opacity-20 md:-bottom-12 md:-right-12 md:h-56 md:w-56`}
            />

            <div className="flex flex-col gap-3 overflow-hidden border-b-2 pb-4">
                <div className="flex items-center justify-between border-b border-textcolor/25 py-2 text-base font-semibold">
                    <h3>{title}</h3>
                    <a
                        className="btn w-fit bg-white/50 p-1.5"
                        href={documentLink}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button>
                            <File className="text-2xl" />
                        </button>
                    </a>
                </div>
                <div className="flex gap-1">
                    <h4 className="text-nowrap font-medium">Doc URL:</h4>
                    <p
                        onClick={() => copyToClipboard(documentLink)}
                        className="cursor-pointer rounded-md px-1 py-px underline-offset-1 hover:bg-primary/15 hover:underline"
                        title="Click to copy"
                    >
                        {documentLink}
                    </p>
                </div>
                <div className="flex gap-1">
                    <h4 className="text-nowrap font-medium">Video URL:</h4>
                    <p
                        onClick={() => copyToClipboard(videoLink)}
                        className="cursor-pointer rounded-md px-1 py-px underline-offset-1 hover:bg-primary/15 hover:underline"
                        title="Click to copy"
                    >
                        {videoLink}
                    </p>
                </div>
                <div className="flex gap-1">
                    <h4 className="font-medium">Description:</h4>
                    <p>{description}</p>
                </div>
            </div>

            <div className="flex items-center gap-3 pt-4">
                <button className="btn w-fit p-1.5 text-2xl text-secondary">
                    <PenEdit />
                </button>
                <button className="btn w-fit p-1.5 text-2xl text-secondary">
                    <TrashDelete />
                </button>
            </div>
        </div>
    );
}
