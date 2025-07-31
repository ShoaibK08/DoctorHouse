'use client'
import { Box, TextField, Typography, Button } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import VerifyOtp from '../components/VerifyOtp'

const ForgetPassword = () => {
    const [isOtp, setIsOtp] = React.useState(false);
    return (
        <>
            {!isOtp ?
                <Box>
                    <Box sx={{ width: "205px", mx: 'auto' }}>
                        <Image src="/logo.png" alt='logo' width={300} height={50} layout='responsive' />
                    </Box>
                    <br />
                    <br />
                    <Box width="100%">
                        <Typography variant="h6" fontWeight={600} color="#000" mb="15px">
                            Forgot Password
                        </Typography>
                        <br />
                        <Box width="100%">
                                                <Typography variant="body2" color='text.primary' fontWeight={600} gutterBottom>

                                Email
                            </Typography>
                            <TextField
                                id=""
                                label=""
                                fullWidth
                                placeholder={"Enter email"}
                            />
                        </Box>
                        <br />
                        <br />
                        <Box>
                            <Button onClick={() => setIsOtp(true)} variant="contained" color="primary" size='large' fullWidth>
                                Submit
                            </Button>
                        </Box>
                        <Link href="/auth/login" style={{ textDecoration: 'none', }}>
                            <Button variant="text" color="primary" size='large' fullWidth sx={{ marginTop: '10px' }}>
                                Cancel
                            </Button>
                        </Link>
                    </Box>
                </Box>
                :
                <VerifyOtp />
            }
        </>
    )
}

export default ForgetPassword