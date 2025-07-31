'use client'
import { Backdrop, Box, CircularProgress, LinearProgress } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const GlobalLoader = () => {
    const isAnythingLoading = useSelector((state: any) => Object.values(state.baseApi.queries).some((entry: any) => entry.status === 'pending'))
    return (
        <>
            {isAnythingLoading &&
                <Box sx={{ position: 'fixed', top: "0", width: '100%', left: '0', zIndex: "1500" }}>
                    <Box width="100%">
                        <LinearProgress value={100} style={{ width: "100%" }} />
                    </Box>
                </Box>
            }
        </>
    )
}

export default GlobalLoader


export const ManualLoader = () => {
    return (
        <>
            <Box sx={{ position: 'fixed', top: "0", width: '100%', left: '0', zIndex: "1500" }}>
                <Box width="100%">
                    <LinearProgress value={100} style={{ width: "100%" }} />
                </Box>
            </Box>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={true}
            >
                <CircularProgress color="primary" />
            </Backdrop>
        </>
    )
}