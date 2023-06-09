import React from "react";

import DesktopSidebar from "../components/sidebar/DesktopSidebar";
import Sidebar from "../components/sidebar/Sidebar";

export default async function ProjectsLayout({
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
            <Sidebar>
                {children}
            </Sidebar>
        </div>
    )
}