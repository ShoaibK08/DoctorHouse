'use client'
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    TextField,
    Button,
    Typography,
    Box,
    Select,
    MenuItem,
    FormControl,
    useTheme
} from '@mui/material'
import { useRouter } from 'next/navigation'
import languageStore from '@/zustand/languageStore'

interface LoginPopupProps {
    open: boolean
    onClose: () => void
}

// Reusable style objects following COMPONENT_RULES.md
const dialogPaperStyles = (mode: string) => ({
    borderRadius: '6px',
    padding: '0',
    margin: '16px',
    maxWidth: '320px',
    width: '90%',
    backgroundColor: mode === 'dark' ? '#1e1e1e' : '#ffffff',
    boxShadow: mode === 'dark' 
        ? '0 4px 20px rgba(0, 0, 0, 0.5)' 
        : '0 4px 20px rgba(0, 0, 0, 0.15)',
});

const backdropStyles = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
};

const countryCodeSelectStyles = (mode: string) => ({
    borderRadius: '8px 0 0 8px',
    backgroundColor: mode === 'dark' ? '#2d3748' : '#f5f7fa',
    border: mode === 'dark' ? '1px solid #4a5568' : '1px solid #e1e5e9',
    '& .MuiOutlinedInput-notchedOutline': {
        border: 'none'
    },
    '& .MuiSelect-select': {
        py: 1.75,
        px: 1.5,
        display: 'flex',
        alignItems: 'center',
        gap: 0.5,
        fontSize: '16px',
        fontWeight: 500,
        color: mode === 'dark' ? '#ffffff' : '#333'
    },
    height: '56px'
});

const mobileTextFieldStyles = (mode: string) => ({
    '& .MuiOutlinedInput-root': {
        borderRadius: '0 8px 8px 0',
        backgroundColor: mode === 'dark' ? '#2d3748' : '#ffffff',
        border: mode === 'dark' ? '1px solid #4a5568' : '1px solid #e1e5e9',
        borderLeft: 'none',
        '& fieldset': {
            border: 'none'
        },
        '&:hover fieldset': {
            border: 'none'
        },
        '&.Mui-focused fieldset': {
            border: '2px solid #2196f3',
            borderLeft: 'none'
        },
        height: '56px'
    },
    '& .MuiInputBase-input': {
        py: 1.75,
        fontSize: '16px',
        color: mode === 'dark' ? '#ffffff' : '#333',
        '&::placeholder': {
            color: mode === 'dark' ? '#a0aec0' : '#8F8EA4',
            fontSize: '14px',
            fontFamily: 'Poppins',
            fontWeight: 400,
            opacity: 1,
        }
    }
});

const emailTextFieldStyles = (mode: string) => ({
    mb: 3,
    '& .MuiOutlinedInput-root': {
        borderRadius: '8px',
        backgroundColor: mode === 'dark' ? '#2d3748' : '#ffffff',
        border: mode === 'dark' ? '1px solid #4a5568' : '1px solid #e1e5e9',
        '& fieldset': {
            border: 'none'
        },
        '&:hover fieldset': {
            border: 'none'
        },
        '&.Mui-focused fieldset': {
            border: '2px solid #2196f3'
        },
        height: '56px'
    },
    '& .MuiInputBase-input': {
        py: 1.75,
        fontSize: '16px',
        color: mode === 'dark' ? '#ffffff' : '#333',
        '&::placeholder': {
            color: mode === 'dark' ? '#a0aec0' : '#8F8EA4',
            fontSize: '14px',
            fontFamily: 'Poppins',
            fontWeight: 400,
            opacity: 1
        }
    }
});

const cancelButtonStyles = (mode: string) => ({
    borderRadius: '8px',
    py: 1.75,
    fontSize: '15px',
    fontWeight: 500,
    fontFamily: 'Poppins',
    textTransform: 'none' as const,
    color: mode === 'dark' ? '#a0aec0' : '#35558A',
    height: '40px',
    background: mode === 'dark' ? '#2d3748' : '#3498DB17',
    border: mode === 'dark' ? '1px solid #4a5568' : '1px solid #35558A',
    '&:hover': {
        background: mode === 'dark' ? '#4a5568' : '#3498DB17',
    }
});

const submitButtonStyles = {
    borderRadius: '8px',
    py: 1.75,
    fontSize: '15px',
    fontWeight: 500,
    textTransform: 'none' as const,
    background: 'linear-gradient(122deg, #35558A 4.67%, #3498DB 85.99%)',
    boxShadow: 'none',
    color: '#FFFFFF',
    height: '40px',
    '&:hover': {
        background: 'linear-gradient(122deg, #35558A 4.67%, #3498DB 85.99%)',
        boxShadow: 'none'
    }
};

const toggleLinkStyles = (mode: string) => ({
    fontSize: '14px',
    fontFamily: 'Poppins',
    textDecoration: 'underline',
    cursor: 'pointer',
    color: mode === 'dark' ? '#a0aec0' : '#35558A',
    fontWeight: 400,
    '&:hover': {
        color: mode === 'dark' ? '#cbd5e0' : '#35558A',
    }
});

const menuPaperStyles = (mode: string) => ({
    borderRadius: '8px',
    mt: 1,
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    backgroundColor: mode === 'dark' ? '#2d3748' : '#ffffff',
    '& .MuiMenuItem-root': {
        color: mode === 'dark' ? '#ffffff' : '#333',
        '&:hover': {
            backgroundColor: mode === 'dark' ? '#4a5568' : '#f5f5f5'
        }
    }
});

const LoginPopup: React.FC<LoginPopupProps> = ({ open, onClose }) => {
    const router = useRouter()
    const theme = useTheme()
    const mode = theme.palette.mode
    
    const [loginMode, setLoginMode] = useState<'mobile' | 'email'>('mobile')
    const [mobileNumber, setMobileNumber] = useState('')
    const [email, setEmail] = useState('')
    const [countryCode, setCountryCode] = useState('+39')

    // Language labels - following the pattern from other pages
    const { getLabels } = languageStore()
    const LoginLabels = getLabels('Login') as any // FormID 1
    const CommonLabels = getLabels('Common') as any // FormID 9

    const handleSubmit = () => {
        // Navigate to dashboard (same as current login button)
        router.push("/dashboard")
        onClose()
    }

    const handleCancel = () => {
        onClose()
    }

    const toggleLoginMode = () => {
        setLoginMode(loginMode === 'mobile' ? 'email' : 'mobile')
    }

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="xs"
            fullWidth
            PaperProps={{
                style: dialogPaperStyles(mode)
            }}
            sx={{
                '& .MuiBackdrop-root': backdropStyles
            }}
        >
            <DialogContent sx={{ p: 0 }}>
                <Box sx={{ p: 2.5, pb: 2 }}>
                    {loginMode === 'mobile' ? (
                        // Mobile Number Login Mode
                        <>
                            <Box sx={{ display: 'flex', gap: 0, mb: 3 }}>
                                <FormControl sx={{ minWidth: 80 }}>
                                    <Select
                                        value={countryCode}
                                        onChange={(e) => setCountryCode(e.target.value)}
                                        size="medium"
                                        sx={countryCodeSelectStyles(mode)}
                                        MenuProps={{
                                            PaperProps: {
                                                sx: menuPaperStyles(mode)
                                            }
                                        }}
                                    >
                                        <MenuItem value="+39">+39</MenuItem>
                                        <MenuItem value="+91">+91</MenuItem>
                                        <MenuItem value="+1">+1</MenuItem>
                                        <MenuItem value="+44">+44</MenuItem>
                                    </Select>
                                </FormControl>

                                <TextField
                                    fullWidth
                                    placeholder={LoginLabels?.lbl_mobile || "Mobile number"}
                                    value={mobileNumber}
                                    onChange={(e) => setMobileNumber(e.target.value)}
                                    size="medium"
                                    sx={mobileTextFieldStyles(mode)}
                                />
                            </Box>
                        </>
                    ) : (
                        // Email Login Mode
                        <>
                            <TextField
                                fullWidth
                                placeholder={LoginLabels?.lbl_email || "Enter email"}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                size="medium"
                                sx={emailTextFieldStyles(mode)}
                            />
                        </>
                    )}

                    {/* Action Buttons */}
                    <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                        <Button
                            variant="outlined"
                            onClick={handleCancel}
                            fullWidth
                            sx={cancelButtonStyles(mode)}
                        >
                            {CommonLabels?.lbl_cancel || 'Cancel'}
                        </Button>
                        <Button
                            variant="contained"
                            onClick={handleSubmit}
                            fullWidth
                            sx={submitButtonStyles}
                        >
                            {CommonLabels?.lbl_submit || 'Submit'}
                        </Button>
                    </Box>

                    {/* Toggle Link */}
                    <Typography
                        variant="body2"
                        textAlign="center"
                        sx={toggleLinkStyles(mode)}
                        onClick={toggleLoginMode}
                    >
                        {loginMode === 'mobile'
                            ? (LoginLabels?.lbl_loginotp ? `Login using ${LoginLabels.lbl_email}` : 'Login using Email')
                            : (LoginLabels?.lbl_loginotp ? `Login using ${LoginLabels.lbl_mobile}` : 'Login using Mobile number')
                        }
                    </Typography>
                </Box>
            </DialogContent>
        </Dialog>
    )
}

export default LoginPopup