"use client";
import { useEffect, useState } from "react";
import { T_menuChildren } from "./useSidebar";
import ChevronRight from "@/components/svg/chevron-right";
import HorizontalLine from "@/components/svg/horizontal-line";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const MenuItem = ({
    menu,
    dockSideBar,
    clickedNavYPosition,
}: {
    menu: T_menuChildren;
    dockSideBar: boolean;
    clickedNavYPosition: number;
}) => {
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setSubMenuOpen(false);
    }, [clickedNavYPosition]);

    const isActive =
        pathname.slice(1).length === menu?.path?.slice(1).length &&
        pathname.slice(1).includes(menu?.path?.slice(1) || "");

    return (
        <li className="my-4 pl-2">
            <Link
                href={menu.subMenus ? "#" : menu.path || "#"}
                title={menu.title}
                className={`relative flex items-center justify-between gap-1 py-2 pl-3 ${
                    isActive && !menu.subMenus
                        ? "rounded-l-xl border-r-4 border-secondary bg-accent text-light"
                        : "hover:bg-light/25"
                } ${subMenuOpen ? "bg-light/25" : ""}`}
                onClick={() => {
                    if (menu.subMenus) setSubMenuOpen(!subMenuOpen);
                }}
            >
                <div className="flex items-center gap-3">
                    {menu.icon}
                    <p className={`${!dockSideBar ? "inline" : "md:hidden"}`}>{menu.title}</p>
                </div>
                {menu.subMenus && (
                    <ChevronRight
                        className={`-rotate-90 text-2xl font-bold ${subMenuOpen && "!rotate-90"}`}
                    />
                )}
            </Link>
            <div
                style={{ top: clickedNavYPosition }}
                className={`overflow-hidden ${subMenuOpen ? "h-fit" : "h-0"} ${
                    dockSideBar && `absolute left-[calc(4rem)] z-50 w-56 rounded bg-primary shadow`
                }`}
            >
                {menu.subMenus && (
                    <ul>
                        {menu.subMenus.map(
                            (subMenu: { title: string; path: string; external?: boolean }) => (
                                <li className="" key={subMenu.title}>
                                    <Link
                                        href={subMenu.path || "#"}
                                        className={`group flex w-full items-center gap-1 p-2 pl-5 text-sm ${
                                            isActive
                                                ? "bg-light text-primary hover:bg-light hover:text-primary"
                                                : "text-light hover:bg-light hover:text-primary"
                                        }`}
                                    >
                                        <HorizontalLine className="w-5" />
                                        <p>{subMenu.title}</p>
                                    </Link>
                                </li>
                            ),
                        )}
                    </ul>
                )}
            </div>
        </li>
    );
};
