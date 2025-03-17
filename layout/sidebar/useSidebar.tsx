"use client";
import { JSX, useEffect, useRef, useState } from "react";
import DashboardSquares from "@/components/svg/dashboard-squares";
import Video from "@/components/svg/video";

export type T_menuChildren = {
    title: string;
    subPath?: string;
    path?: string;
    icon: JSX.Element;
    subMenus?: {
        title: string;
        path: string;
    }[];
};

export type T_menu = {
    section: string;
    children: T_menuChildren[];
};

export default function useSidebar() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [menus, _setMenu] = useState<T_menu[]>([
        {
            section: "",
            children: [
                {
                    title: "Home",
                    path: "/",
                    icon: <DashboardSquares className="text-2xl" />,
                },

                {
                    title: "Videos",
                    path: "/videos",
                    icon: <Video className="text-2xl" />,
                },
            ],
        },
    ]);

    const navListRef = useRef<HTMLUListElement>(null);
    const [clickedNavYPosition, setClickedNavYPosition] = useState<number>(0);
    const [dockSideBar, setDockSideBar] = useState(false);

    useEffect(() => {
        const navList = navListRef.current;

        if (navList) {
            const handleClick = (e: MouseEvent) => setClickedNavYPosition(e.pageY);
            navList.addEventListener("click", (e) => handleClick(e));
            return () => navList.removeEventListener("click", handleClick);
        }

        const handleResize = () => {
            const width = window.innerWidth;
            setDockSideBar(width <= 640 && false);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return {
        menus,
        dockSideBar,
        navListRef,
        clickedNavYPosition,
        setDockSideBar,
    };
}
