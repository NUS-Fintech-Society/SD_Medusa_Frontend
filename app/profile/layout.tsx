import React from "react";

import DesktopSidebar from "../components/sidebar/DesktopSidebar";

export default async function ProfileLayout({
    children
} : {
    children: React.ReactNode;
}) {
    return (
        <div
            className="
                h-full
            "
        >
            <DesktopSidebar />
            {children}
        </div>
    )
}