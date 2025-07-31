import { Skeleton } from '@mui/material'
import React from 'react'

const TableLoader = () => {
    return (
        <>
            {new Array(5).fill(0).map((_, i) => (
                <Skeleton key={i} width="100%" height={80} />
            ))}
        </>
    )
}

export default TableLoader