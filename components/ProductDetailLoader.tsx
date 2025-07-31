import { Skeleton } from '@mui/material'
import React from 'react'
import Grid from '@mui/material/Grid2';

const ProductDetailLoader = () => {
    return (
        <>
            <Grid
                container
                spacing={5}
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
                alignContent="flex-start"
                wrap="wrap"
            >
                <Grid size={{ md: 4, xs: 12 }}>
                    <Skeleton variant="rounded" width="100%" height="350px" />
                </Grid>
                <Grid size={{ md: 8, xs: 12 }}>
                    <Skeleton variant="rounded" width="100%" height={118} />
                    <br />
                    <Skeleton variant="rounded" width="100%" height={118} />
                    <br />
                    <Skeleton variant="rounded" width="100%" height={60} />
                </Grid>
            </Grid>
        </>
    )
}

export default ProductDetailLoader