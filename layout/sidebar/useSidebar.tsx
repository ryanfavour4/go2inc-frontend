"use client";
import { JSX, useEffect, useRef, useState } from "react";
import DashboardSquares from "@/components/svg/dashboard-squares";
import Video from "@/components/svg/video";
import EventCalender from "@/components/svg/event-calender";
import File from "@/components/svg/file";
import { postLogoutService } from "@/api-services/auth.service";
import toast from "react-hot-toast";

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
    const [loading, setLoading] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [menus, _setMenu] = useState<T_menu[]>([
        {
            section: "",
            children: [
                {
                    title: "Home",
                    path: "/home",
                    icon: <DashboardSquares className="text-2xl" />,
                },

                {
                    title: "Videos",
                    path: "/videos",
                    icon: <Video className="text-2xl" />,
                },

                {
                    title: "Outreach",
                    path: "/events",
                    icon: <EventCalender className="text-2xl" />,
                },

                {
                    title: "Reports",
                    path: "/reports",
                    icon: <File className="text-2xl" />,
                },
            ],
        },
    ]);

    const navListRef = useRef<HTMLUListElement>(null);
    const [clickedNavYPosition, setClickedNavYPosition] = useState<number>(0);
    const [dockSideBar, setDockSideBar] = useState(false);

    const handleLogout = () => {
        if (loading) return;
        setLoading(true);
        postLogoutService()
            .then((res) => {
                console.log(res);
                toast("Logout successful");
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
                alert(err.message);
            });
    };

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
        loading,
        menus,
        dockSideBar,
        navListRef,
        clickedNavYPosition,
        handleLogout,
        setDockSideBar,
    };
}
