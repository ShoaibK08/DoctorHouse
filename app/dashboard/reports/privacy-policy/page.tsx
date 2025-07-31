'use client'
import React from 'react'
import { Box, Container, useTheme, IconButton, Typography, } from '@mui/material'
import { lineClampStyle, profileTopContainerStyle, whiteIconButtonStyle } from '@/themes/styles';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useRouter } from 'next/navigation';
import languageStore from '@/zustand/languageStore';

const PrivacyPolicy = () => {
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
                        <Box display="flex" alignItems="center" gap='10px' justifyContent="flex-start">
                            <IconButton onClick={() => router.push("/dashboard/profile")} >
                                <KeyboardArrowLeftIcon sx={{ color: "#fff" }} />
                            </IconButton>
                            <Typography variant="body1" color="#fff" sx={{ ...lineClampStyle(1), fontWeight: 500 }}>
                                {Labels?.lbl_privacy}
                            </Typography>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </>
    )
}

export default PrivacyPolicy