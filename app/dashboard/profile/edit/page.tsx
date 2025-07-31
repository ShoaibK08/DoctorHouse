'use client'
import { Box, Container, useTheme, IconButton, Avatar, Typography, } from '@mui/material'
import React from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Image from 'next/image';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import ProfileEditForm from './ProfileEditForm';
import { useRouter } from 'next/navigation';
import languageStore from '@/zustand/languageStore';
import { profileTopContainerStyle } from '@/themes/styles';

const EditProfile = () => {
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
                            <Typography variant="body1" color="#fff" textAlign="center">
                                <b>{Labels?.lbl_profile}</b>
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <br />
                <Container fixed>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Box display="flex" alignItems="flex-end" flexDirection="column">
                            <Avatar src='/assets/avatar.png' alt='user'
                                style={{ width: '130px', height: '130px', border: "2px solid #fff" }}
                            />
                            <IconButton sx={{ mt: '-40px' }}>
                                <img src="/icons/edit-new.svg" alt="" />
                            </IconButton>
                        </Box>
                        <IconButton>
                            <img src="/icons/qr-code.svg" alt="" />
                            {/* <QrCodeScannerIcon sx={{ fontSize: '45px', color: mode === 'light' ? '#000' : '#fff' }} /> */}
                        </IconButton>
                    </Box>
                    <br />
                    <ProfileEditForm />
                </Container>
            </Box>
        </>
    )
}

export default EditProfile


