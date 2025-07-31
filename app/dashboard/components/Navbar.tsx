'use client'
import React from 'react'
import Container from '@mui/material/Container'
import AppBar from '@mui/material/AppBar'
import { Box, IconButton, InputBase, useTheme } from '@mui/material'
import Image from 'next/image'
import MenuIcon from '@mui/icons-material/Menu';
import { secondary } from '@/utils/colors'
import { iconStyles } from '@/themes/styles'
import { useRouter } from 'next/navigation'

const Navbar = () => {
    const router = useRouter();
    const theme = useTheme();
    const mode = theme.palette.mode;
    return (
        <>
            <AppBar position="fixed" sx={{ background: 'transparent', boxShadow: 'none' }}>
                <Container fixed>
                    <Box display="flex" alignItems="center" width="100%" mt='15px' gap='10px'>
                        <Box sx={navbarStyles(mode)}>
                            <Box sx={{ width: "25px" }}>
                                <Image src="/icons/favicon.svg" alt='logo' width={10} height={10} layout='responsive' />
                            </Box>
                            <InputBase
                                fullWidth
                                placeholder='Search...'
                            />
                        </Box>
                        <IconButton onClick={() => router.push('/dashboard/profile')} sx={{
                            ...iconStyles(mode),
                            height: '40px',
                        }}>
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Container>
            </AppBar>
        </>
    )
}

export default Navbar


const navbarStyles = (mode: string) => {
    return {
        borderRadius: '12px',
        boxShadow: "0px 6px 24px -4px rgba(105, 105, 105, 0.19)",
        // background: "#fff",
        background: mode === "light" ? "#fff" : secondary,
        border: '1px solid rgba(145, 158, 171, 0.19)',
        boxSizing: 'border-box',
        // p: '8px 10px',
        height: '50px',
        px: '10px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        // justifyContent: 'space-between',
        width: '100%',
        gap: '10px',
    }
}