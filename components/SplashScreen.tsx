'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { Box, CircularProgress, Container, useTheme, Typography, } from '@mui/material';
import userStore from '@/zustand/userStore';
import Image from 'next/image';
import { primary, secondary } from '@/utils/colors';
import SelectLanguge from './SelectLanguge';

const splashContainer = (mode: string) => {
    return {
        height: '100vh',
        gap: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: '30px',
        background: mode === "light" ? '#fff' : secondary,
    }
}

const splashParent = (mode: string) => {
    return {
        background: mode === "light" ? primary : secondary,
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}

const SplashScreen = () => {
    const { isLoggedIn, hydrated, } = userStore();
    const router = useRouter();

    const theme = useTheme();
    const mode = theme.palette.mode;

    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        if (hydrated) {
            setIsLoading(false);
            // if (isLoggedIn) {
            //     setTimeout(() => {
            //         router.replace('/dashboard')
            //     }, 3000);
            // } 
        }
    }, [hydrated, isLoggedIn, router]);
    return (
        <>
            <Container fixed >
                <Box sx={splashContainer(mode)}>
                    <Box>
                        <Box sx={{ width: "205px", mx: 'auto' }}>
                            <Image src="/logo.png" alt='logo' width={300} height={50} />
                        </Box>
                        <br />
                        <Typography variant="body1" color="primary" textAlign="center">
                            Lorem ipsum is a dummy or placeholder text commonly used in graphic design.
                        </Typography>
                    </Box>
                    <SelectLanguge />
                    <Box>
                        <Typography variant="body1" color="primary" textAlign="center" fontWeight={600}>
                            Version 3.0
                        </Typography>
                        <Typography variant="body1" color="primary" textAlign="center">
                            •••••
                        </Typography>
                    </Box>
                    {isLoading && <CircularProgress />}
                </Box>
            </Container >
        </>
    )
}

export default SplashScreen