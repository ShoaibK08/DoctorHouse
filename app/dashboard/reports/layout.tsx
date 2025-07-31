'use client'
import { ReactNode } from 'react';

interface PrivateRouteProps {
    children: ReactNode;
}

const ReportLayout: React.FC<PrivateRouteProps> = ({ children }) => {
    return <>
        {children}
    </>;
};

export default ReportLayout;
