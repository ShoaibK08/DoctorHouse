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
    InputLabel
} from '@mui/material'
import { useRouter } from 'next/navigation'
import languageStore from '@/zustand/languageStore'

interface LoginPopupProps {
    open: boolean
    onClose: () => void
}

const LoginPopup: React.FC<LoginPopupProps> = ({ open, onClose }) => {
    const router = useRouter()
    const [loginMode, setLoginMode] = useState<'mobile' | 'email'>('mobile')
    const [mobileNumber, setMobileNumber] = useState('')
    const [email, setEmail] = useState('')
    const [countryCode, setCountryCode] = useState('+39')

    const { getLabels } = languageStore()
    const LabelsLogin = getLabels('Login') as any

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
            maxWidth="sm"
            fullWidth
            PaperProps={{
                style: {
                    borderRadius: '12px',
                    padding: '20px'
                }
            }}
        >
            <DialogContent sx={{ p: 0 }}>
                <Box sx={{ p: 2 }}>
                    {loginMode === 'mobile' ? (
                        // Mobile Number Login Mode
                        <>
                            <Typography variant="h6" fontWeight={600} mb={2}>
                                Login using Mobile Number
                            </Typography>
                            
                            <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
                                <FormControl sx={{ minWidth: 80 }}>
                                    <Select
                                        value={countryCode}
                                        onChange={(e) => setCountryCode(e.target.value)}
                                        size="small"
                                        sx={{ 
                                            '& .MuiSelect-select': { 
                                                py: 1.5,
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 0.5
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
                                    placeholder="Enter mobile number"
                                    value={mobileNumber}
                                    onChange={(e) => setMobileNumber(e.target.value)}
                                    size="small"
                                />
                            </Box>
                        </>
                    ) : (
                        // Email Login Mode
                        <>
                            <Typography variant="h6" fontWeight={600} mb={2}>
                                Login using Email
                            </Typography>
                            
                            <TextField
                                fullWidth
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                size="small"
                                sx={{ mb: 3 }}
                            />
                        </>
                    )}

                    {/* Action Buttons */}
                    <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                        <Button
                            variant="outlined"
                            onClick={handleCancel}
                            fullWidth
                            sx={{ 
                                borderColor: '#1976d2', 
                                color: '#1976d2',
                                '&:hover': {
                                    borderColor: '#1976d2',
                                    backgroundColor: 'rgba(25, 118, 210, 0.04)'
                                }
                            }}
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="contained"
                            onClick={handleSubmit}
                            fullWidth
                            sx={{ 
                                backgroundColor: '#1976d2',
                                '&:hover': {
                                    backgroundColor: '#1565c0'
                                }
                            }}
                        >
                            Submit
                        </Button>
                    </Box>

                    {/* Toggle Link */}
                    <Typography 
                        variant="body2" 
                        color="primary" 
                        textAlign="center"
                        sx={{ 
                            textDecoration: 'underline',
                            cursor: 'pointer',
                            '&:hover': {
                                color: '#1565c0'
                            }
                        }}
                        onClick={toggleLoginMode}
                    >
                        {loginMode === 'mobile' 
                            ? 'Login using Email' 
                            : 'Login using Mobile number!'
                        }
                    </Typography>
                </Box>
            </DialogContent>
        </Dialog>
    )
}

export default LoginPopup 