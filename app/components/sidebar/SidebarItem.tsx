'use client'

import clsx from "clsx";
import Link from "next/link";
import React from "react";

interface SidebarItemProps {
    label: string;
    icon: any;
    href: string;
    active?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
    label,
    icon: Icon,
    href,
    active
}) => {
    return (
        <li>
            <Link 
                href={href}
                className={clsx(`
                    group
                    flex
                    gap-x-3
                    rounded-md
                    p-3
                    text-sm
                    leading-6
                    font-semibold
                    text-gray-500
                    hover:text-black
                    hover:bg-gray-100
                `,
                    active && 'bg-gray-100'
                )}    
            >
                <Icon 
                    className={clsx(`
                        h-6
                        w-6
                        shrink-0
                    `,
                        active && 'text-black'
                    )}
                />
                <span>{label}</span>
            </Link>
        </li>
    )
}

export default SidebarItem;
