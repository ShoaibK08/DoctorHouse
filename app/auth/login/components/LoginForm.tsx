'use client'
import React from 'react'
import TextField from '@mui/material/TextField'
import { Box, Button, IconButton, InputAdornment, Typography } from '@mui/material'
import { primary } from '@/utils/colors';
import Link from 'next/link';
import languageStore from '@/zustand/languageStore';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { LuEyeClosed } from "react-icons/lu";
import { RxEyeOpen } from "react-icons/rx";

const LoginForm = () => {
    const router = useRouter()
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const { getLabels } = languageStore()
    const LabelsLogin = getLabels('Login') as any
    const LabelsSingup = getLabels('SignUp') as any
    return (
        <>
            <Box sx={{ width: "205px", mx: 'auto' }}>
                <Image src="/logo.png" alt='logo' width={300} height={50} layout='responsive' />
            </Box>
            <br />
            <br />
            <Box width="100%">
                <Typography variant="h6" fontWeight={600} color="#000" mb="15px">
                    {LabelsLogin?.lbl_lets} {LabelsLogin?.lbl_login}
                </Typography>
                <br />
                <Box width="100%">
                    <Typography variant="body2" color='text.primary' fontWeight={600} gutterBottom>
                        {LabelsLogin?.lbl_username}
                    </Typography>
                    <TextField
                        id=""
                        label=""
                        fullWidth
                        placeholder={LabelsLogin?.lbl_username}
                    />
                </Box>
                <br />
                <Box width="100%">
                    <Typography variant="body2" color='text.primary' fontWeight={600} gutterBottom>
                        {LabelsLogin?.lbl_password}
                    </Typography>
                    <TextField
                        id=""
                        label=""
                        type={showPassword ? "" : 'password'}
                        placeholder={LabelsLogin?.lbl_password}
                        fullWidth
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        edge="end"
                                    >
                                        {showPassword ?
                                            <RxEyeOpen style={{ color: "#C6C6CE", fontSize: '20px' }} /> :
                                            <LuEyeClosed style={{ color: "#C6C6CE", fontSize: '20px' }} />
                                        }
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>
                <Box width="100%" display="flex" justifyContent="flex-end" mt='10px'>
                    <Typography variant="body2" fontSize="14px" fontWeight={600} color="primary">
                        <Link href="/auth/forget-password">
                            {LabelsLogin?.lbl_forget_password}?
                        </Link>
                    </Typography>
                    {/* <Typography variant="subtitle1" color="primary" onClick={() => setViewPassword(!viewPassword)}>
                        {viewPassword ? LabelsLogin?.lbl_hidepwd : LabelsLogin?.lbl_showpwd}
                    </Typography> */}
                </Box>
                <br />
                <Button disableElevation onClick={() => router.push("/dashboard")} variant="contained" color="primary" size='large' fullWidth>
                    {LabelsLogin?.lbl_login}
                </Button>
                <Box display="flex" alignItems="center" gap='10px' my='20px'>
                    <Box sx={{ height: '1px', width: "100%", background: "#C4C4CD" }} />
                    <Typography variant="body2" color="#000" fontWeight={600}>OR</Typography>
                    <Box sx={{ height: '1px', width: "100%", background: "#C4C4CD" }} />
                </Box>
                <Button onClick={() => router.push("/dashboard")} variant="outlined" color="primary" size='large' fullWidth>
                    Login via OTP
                </Button>
                <br />
                <Typography variant="body2" color="text.secondary" textAlign="center" mt='10px'>
                    {LabelsLogin?.lbl_dont_account} <Link href="/auth/register" style={{ color: primary, fontWeight: '600' }}>{LabelsSingup?.lbl_signup}</Link>
                </Typography>
            </Box>
        </>
    )
}

export default LoginForm