import React from 'react'
import Container from '@mui/material/Container'
import { Box, Typography, } from '@mui/material'
import NoData from '@/components/NoData'

const NotFound = () => {
    return (
        <>
            <Container maxWidth="lg">
                <Box height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                    <Typography variant="h6" color="text.primary">
                        404 - Page Not Found
                    </Typography>
                </Box>
            </Container>
        </>
    )
}

export default NotFound