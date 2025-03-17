import { TLayoutProps } from "@/layout/layout";
import MenuCenter from "@/components/svg/menu-center";
import BackArrow from "@/components/svg/back-arrow";
import Logo from "@/components/svg/logo";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Topbar({ sidebarOpen, setSidebarOpen }: TLayoutProps) {
    const router = useRouter();

    return (
        <div className="mb-4 w-full border-b-2 bg-primary/10 px-2 py-4 md:px-10">
            <div className="flex items-center justify-between">
                <div
                    onClick={() => router.back()}
                    className="hidden cursor-pointer items-center justify-center gap-4 rounded-lg px-4 py-1 text-lg font-medium text-accent hover:bg-accent/25 lg:flex"
                >
                    <BackArrow />
                    <h2 className="text-base font-medium">Back</h2>
                </div>
                <div
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="inline w-fit cursor-pointer text-4xl font-medium text-accent lg:hidden"
                >
                    <MenuCenter />
                </div>

                <div className="flex items-center gap-5">
                    <div className="flex items-center">
                        <Link href={"#"} className={`flex flex-col items-center lg:hidden`}>
                            <Logo className={`h-16 w-16 text-secondary`} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
