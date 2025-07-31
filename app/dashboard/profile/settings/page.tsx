'use client'
import React from 'react'
import { Box, Container, useTheme, IconButton, Typography, } from '@mui/material'
import { lineClampStyle, profileTopContainerStyle, whiteIconButtonStyle } from '@/themes/styles';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useRouter } from 'next/navigation';
import languageStore from '@/zustand/languageStore';
import { ToggleBtn } from '@/components/ThemeToggleBtn';

const Settings = () => {
    const theme = useTheme();
    const mode = theme.palette.mode;
    const router = useRouter()
    const { getLabels } = languageStore()
    const Labels = getLabels('Menu') as any
    return (
        <>
            <Box sx={{ minHeight: '100vh' }}>
                <Box sx={profileTopContainerStyle(mode)}>
                    <Container fixed>
                        <Box display="flex" alignItems="center" gap='20px' justifyContent="space-between">
                            <IconButton onClick={() => router.push("/dashboard/profile")} sx={whiteIconButtonStyle(mode)}>
                            <KeyboardArrowLeftIcon />
                            </IconButton>
                            <Box width="100%" textAlign="center">
                                <Typography variant="body1" color="#fff" sx={lineClampStyle(1)}>
                                    <b>{Labels?.lbl_settings}</b>
                                </Typography>
                            </Box>
                        </Box>
                    </Container>
                </Box>
                <br />
                <Container fixed>
                    <ToggleBtn />
                </Container>
            </Box>
        </>
    )
}

export default Settings