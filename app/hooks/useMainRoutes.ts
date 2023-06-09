import { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { HiArrowLeftOnRectangle, HiUsers } from 'react-icons/hi2';
import { GiMedusaHead } from 'react-icons/gi';

const useMainRoutes = () => {
    const pathname = usePathname();
    
    const routes = useMemo(() => [
        {
            label: 'Projects',
            href: '/projects',
            icon: GiMedusaHead,
            active: pathname.includes('/projects')
        },
        {
            label: 'Profile',
            href: '/profile',
            icon: HiUsers,
            active: pathname === '/profile'
        },
        {
            label: 'Logout',
            href: '#',
            // TODO: Create sign out once JWT Authentication is setup
            // onClick: () => signOut(),
            icon: HiArrowLeftOnRectangle
        }
    ], [pathname])

    return routes
}

export default useMainRoutes;