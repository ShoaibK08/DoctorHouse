'use client'
import userStore from '@/zustand/userStore';
import { useRouter } from 'next/navigation'
import { useEffect, ReactNode } from 'react';

interface PrivateRouteProps {
    children: ReactNode;
}

const DashboardLayout: React.FC<PrivateRouteProps> = ({ children }) => {
    const router = useRouter();
    const { isLoggedIn } = userStore()
    // useEffect(() => {
    //     if (!isLoggedIn) {
    //         router.push('/auth/login');
    //     }
    // }, [isLoggedIn, router]);
    // if (!isLoggedIn) return null;
    return <>
        {children}
    </>;
};

export default DashboardLayout;
