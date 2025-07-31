import { Box, Typography } from '@mui/material'
import React from 'react'

const NoData = ({ title }: any) => {
    return (
        <>
            <Box display="flex" flexDirection="column" alignItems="center" mt='50px'>
                <img src="/assets/others/nodata.png" style={{ width: "30%", borderRadius: '12px', display: 'block' }} />
                <Typography variant="h6" color="initial">
                    {title}
                </Typography>
            </Box>
        </>
    )
}

export default NoData