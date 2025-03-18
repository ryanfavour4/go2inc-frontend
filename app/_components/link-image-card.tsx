import Link from "next/link";
import ArrowRight from "@/components/svg/arrow-right";

export function LinkImageCard() {
    return (
        <div
            className={`min-h-36 rounded-lg bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('../assets/images/kids-smiling.png')] bg-center`}
        >
            <div className="wrapper flex flex-col justify-between gap-3 px-3 py-3 text-light">
                <h3 className="text-lg font-semibold">Training Videos</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere aspernatur
                    tempore, pariatur.
                </p>

                <Link
                    href={"#"}
                    className="btn-white ml-auto mt-4 flex aspect-square w-fit items-center justify-center rounded-full p-2"
                >
                    <ArrowRight className="text-lg" />
                </Link>
            </div>
        </div>
    );
}
