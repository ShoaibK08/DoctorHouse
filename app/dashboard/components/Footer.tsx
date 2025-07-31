'use client'
import React from 'react'
import Container from '@mui/material/Container'
import { Box, Paper, useTheme, Typography } from '@mui/material'
import { secondary } from '@/utils/colors'
import SearchDoctor from './SearchDoctor'

const Footer = () => {
    const theme = useTheme();
    const mode = theme.palette.mode;
    return (
        <>
            <Paper sx={parentStyle} elevation={0}>
                <Container maxWidth="lg">
                    <Box p='20px 10px'>
                        <Typography variant="h6" color="#fff" gutterBottom>
                            Dear Chandra Pratap
                        </Typography>
                        <Typography variant="body2" color="#fff" fontWeight={500}>
                            62 Physicians found near you
                        </Typography>
                        <Typography variant="subtitle1" color="#fff">
                            Click on physicians’ icon to view more information
                        </Typography>
                    </Box>
                </Container>
                <Box sx={footerStyles(mode)}>
                    <Container maxWidth="lg">
                        <SearchDoctor />
                    </Container>
                </Box>
            </Paper>
        </>
    )
}

export default Footer

const parentStyle = {
    position: 'fixed',
    bottom: 0,
    left: 0, right: 0,
    background: "linear-gradient(to right, #35558a, #3487c7)",
    borderRadius: '30px 30px 0 0',
    // background: 'transparent'
}

const footerStyles = (mode: string) => {
    return {
        borderRadius: '30px 30px 0 0',
        boxShadow: "0px 6px 24px -4px rgba(105, 105, 105, 0.19)",
        // background: "#fff",
        background: mode === "light" ? "#fff" : secondary,
        border: '1px solid #3D6ADF',
        boxSizing: 'border-box',
        p: '15px',
        width: '100%'
    }
}