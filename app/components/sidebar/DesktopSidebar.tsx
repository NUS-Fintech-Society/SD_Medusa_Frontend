'use client';

import useMainRoutes from "@/app/hooks/useMainRoutes";

import DesktopItem from "./DesktopItem";

const DesktopSidebar = () => {
    const routes = useMainRoutes();
    // const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div
            className="
                hidden
                lg:fixed
                lg:inset-y-0
                lg:left-0
                lg:z-40
                lg:w-20
                xl:px-6
                lg:overflow-y-auto
                lg:bg-white
                lg:border-r-[1px]
                lg:pb-4
                lg:flex
                lg:flex-col
                justify-between
            "
        
        >
            <nav
                className="
                    mt-4
                    flex
                    flex-col
                    justify-betwwen
                "
            >
                <ul
                    role="list"
                    className="
                        flex
                        flex-col
                        items-center
                        space-y-1
                    "   
                >
                    {routes.map((item) => (
                        <DesktopItem
                            key={item.label}
                            href={item.href}
                            label={item.label}
                            icon={item.icon}
                            active={item.active}
                            // TODO: uncomment once logout functionality in place
                            // onClick={item.onClick}
                        />
                    ))}
                </ul>

            </nav>
        </div>
    );
}

export default DesktopSidebar;