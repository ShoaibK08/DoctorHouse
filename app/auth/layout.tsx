// 'use client'
// import { profileTopContainerStyle, whiteIconButtonStyle } from '@/themes/styles';
// import { secondary } from '@/utils/colors';
// import { Box, Container, IconButton, useTheme } from '@mui/material';
// import Image from 'next/image';
// import { usePathname, useRouter } from 'next/navigation';
// import { ReactNode } from 'react';
// import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

// interface PrivateRouteProps {
//     children: ReactNode;
// }

// const AuthLayout: React.FC<PrivateRouteProps> = ({ children }) => {

//     const theme = useTheme();
//     const mode = theme.palette.mode;
//     const router = useRouter()
//     const pathname = usePathname()
//     return <>
//         <Box sx={{ minHeight: '100vh' }}>
//             <Box sx={profileTopContainerStyle(mode)}>
//                 <Container fixed>
//                     <IconButton onClick={() => router.push(pathname === "/auth/login" ? "/" : "/auth/login")} sx={whiteIconButtonStyle(mode)}>
//                         <KeyboardArrowLeftIcon />
//                     </IconButton>
//                 </Container>
//             </Box>
//             <Container fixed >
//                 <Box sx={splashContainer(mode)}>
//                     <Box sx={{ width: "75%", mb: '10px' }}>
//                         <Image src="/logo.png" alt='logo' width={300} height={20} layout='responsive' />
//                     </Box>
//                     {children}
//                 </Box>
//             </Container >
//         </Box>
//     </>;
// };

// export default AuthLayout;

// const splashContainer = (mode: string) => {
//     return {
//         height: 'auto',
//         gap: '20px',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'flex-start',
//         py: '20px',
//         background: mode === "light" ? '#fff' : secondary
//     }
// }

import { Container } from '@mui/material'
import React from 'react'

const AuthLayout = ({ children }: any) => {
    return (
        <>
            <Container fixed sx={{ py: '30px' }}>
                {children}
            </Container>
        </>
    )
}

export default AuthLayout