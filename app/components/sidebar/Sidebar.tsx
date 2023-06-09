'use client'

import React from "react";
import DesktopSidebar from "./DesktopSidebar";

import SidebarItem from "./SidebarItem";
import useProjectRoutes from "@/app/hooks/useProjectRoutes";

const Sidebar = ({ children }: { children: React.ReactNode }) => {
    const routes = useProjectRoutes();
    return (
        <div 
            className="h-full"
        >
            <main
                className="
                    lg:pl-20
                    h-full
                "
            >
                <div
                    className="
                        hidden
                        lg:fixed
                        lg:inset-y-0
                        lg:left-20
                        lg:z-40
                        lg:w-80
                        xl:px-6
                        lg:overflow-y-auto
                        lg:bg-white
                        lg:border-r-[1px]
                        lg:pb-4
                        lg:flex
                        lg:flex-col
                        h-full
                    "
                
                >
                    <nav
                        className="
                            mt-4
                            flex
                            flex-col
                            justify-between
                        "
                    >
                        <ul
                            role="list"
                            className="
                                flex
                                flex-col
                                space-y-1
                            "   
                        >
                            {routes.map((item) => (
                                <SidebarItem
                                    key={item.label}
                                    href={item.href}
                                    label={item.label}
                                    icon={item.icon}
                                    active={item.active}
                                />
                            ))}
                        </ul>
                    </nav>
                </div>
                <div
                    className="
                        w-auto
                        h-full
                    "
                >
                    {children}
                </div>
            </main>
        </div>
    )
}

export default Sidebar;