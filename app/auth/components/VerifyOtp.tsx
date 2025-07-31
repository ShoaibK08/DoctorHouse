'use client'
import { Box, Typography, Button } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { MuiOtpInput } from 'mui-one-time-password-input'
import Link from 'next/link'
import { primary } from '@/utils/colors'

const VerifyOtp = () => {
    const [otp, setOtp] = React.useState('')

    const handleChange = (newValue: any) => {
        setOtp(newValue)
    }
    return (
        <>
            <Box sx={{ width: "205px", mx: 'auto' }}>
                <Image src="/logo.png" alt='logo' width={300} height={50} layout='responsive' />
            </Box>
            <br />
            <br />
            <Box width="100%">
                <Typography variant="h6" fontWeight={600} color="#000" mb="15px">
                    Verify OTP
                </Typography>
                <br />
                <Box width="80%" mx="auto">
                    <MuiOtpInput value={otp} onChange={handleChange} />
                </Box>
                <Typography variant="body2" color="text.secondary" textAlign="center" mt='10px'>
                    Didn't recieve email?  <span style={{ color: primary, fontWeight: '600' }}>Resend</span>
                </Typography>
                <br />
                <br />
                <Link href="/dashboard" style={{ textDecoration: 'none', }}>
                    <Button variant="contained" color="primary" size='large' fullWidth>
                        Submit
                    </Button>
                </Link>
            </Box>
        </>
    )
}

export default VerifyOtp