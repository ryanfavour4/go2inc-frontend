"use client";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import SpinnerSemicircle from "@/components/svg/spinner-semicircle";

export const LoadingPopUp = () => {
    const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);

    useEffect(() => {
        setPortalElement(document.getElementById("portal"));
    }, []);

    if (!portalElement) return null; // Ensure the portal exists before rendering

    return ReactDOM.createPortal(
        <div className="fixed inset-0 z-50 flex flex-col items-center bg-white/80">
            <div className="my-auto flex h-full max-h-96 w-full flex-col items-center justify-center gap-8 p-6">
                <SpinnerSemicircle className="animate-spin text-2xl text-primary" />
            </div>
        </div>,
        portalElement,
    );
};
