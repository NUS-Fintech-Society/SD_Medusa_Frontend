import React from "react";

import WithSubnavigation from "../components/navbar/NavBar";

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
            <WithSubnavigation/>
                {children}
        </div>
    )
}