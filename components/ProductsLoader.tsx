import { Box, Skeleton } from '@mui/material'
import React from 'react'

const ProductsLoader = () => {
    return (
        <>
            <Box display="flex" flexWrap="wrap" gap={5} justifyContent="center">
                {new Array(8).fill(0).map((_, i) => (
                    <Skeleton key={i}
                        animation="wave"
                        variant="rounded"
                        sx={{
                            height: '286px',
                            width: '22.5%'
                        }}
                    />
                ))}
            </Box>
        </>
    )
}

export default ProductsLoader