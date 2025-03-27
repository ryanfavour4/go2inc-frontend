import Logo from "@/components/svg/logo";
import Link from "next/link";

export default function NotFound() {
    return (
        <>
            <section className="">
                <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-center gap-8 px-4 py-8 lg:px-6 lg:py-16">
                    <Link href={"#"} className="m-auto inline-block w-fit self-center">
                        <Logo className={`h-20 w-20 py-2 text-secondary`} />
                    </Link>
                    <div className="mx-auto max-w-screen-sm text-center">
                        <h1 className="mb-4 text-5xl font-extrabold tracking-tight text-primary lg:text-7xl">
                            404
                        </h1>
                        {/* <p className="mb-4 text-2xl font-bold tracking-tight text-secondary md:text-3xl">
                            Something&apos;s missing.
                        </p> */}
                        <p className="mb-4 text-2xl font-bold tracking-tight text-secondary md:text-3xl">
                            Coming Soon.
                        </p>
                        <p className="mb-4 text-base font-light text-textcolor">
                            Sorry, we can&apos;t find that page. You&apos;ll find lots to explore on
                            the home page.{" "}
                        </p>
                        <Link href={"/"} className="btn-primary mx-auto w-fit">
                            Back Home
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
