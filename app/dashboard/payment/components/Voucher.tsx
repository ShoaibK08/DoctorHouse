'use client'
import React, { useState } from 'react'
import {
    Box,
    Container,
    useTheme,
    IconButton,
    Typography,
    TextField,
    Button,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    Card,
    CardContent
} from '@mui/material'
import { lineClampStyle, profileTopContainerStyle, whiteIconButtonStyle } from '@/themes/styles';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import QrCodeIcon from '@mui/icons-material/QrCode';
import { useRouter } from 'next/navigation';
import languageStore from '@/zustand/languageStore';

const Voucher = () => {
    const theme = useTheme();
    const mode = theme.palette.mode;
    const router = useRouter()
    const { getLabels } = languageStore()
    const Labels = getLabels('Menu') as any
    const PaymentsLabels = getLabels('Payments') as any
    const CommonLabels = getLabels('Common') as any

    const [voucherCode, setVoucherCode] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('daily'); // Changed default to 'daily'
    const [showPaymentOptions, setShowPaymentOptions] = useState(false);

    const handleVoucherSubmit = () => {
        setShowPaymentOptions(true);
    };

    const handlePaymentMethodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        console.log('Radio button selected:', value);
        setPaymentMethod(value);
    };

    const handleSubmit = () => {
        console.log('Submit clicked, payment method:', paymentMethod);
        if (paymentMethod === 'daily') {
            console.log('Navigating to payment page...');
            router.push('/dashboard/payment');
        } else {
            // Handle voucher payment
            console.log('Processing voucher payment...');
        }
    };

    return (
        <Box sx={{
            minHeight: '100vh',
            backgroundColor: theme.palette.background.default,
            position: 'relative',
            zIndex: 1,
            width: '100%',
            maxWidth: '100%'
        }}>
            {/* Header */}
            <Box sx={profileTopContainerStyle(mode)}>
                <Container fixed>
                    <Box display="flex" alignItems="center" gap='20px' justifyContent="space-between">
                        <IconButton onClick={() => router.back()} sx={whiteIconButtonStyle(mode)}>
                            <KeyboardArrowLeftIcon />
                        </IconButton>
                    </Box>
                </Container>
            </Box>

            {/* Content */}
            <Container fixed sx={{
                pt: 3,
                backgroundColor: theme.palette.background.paper,
                position: 'relative',
                zIndex: 2,
                pb: 4,
                px: 2
            }}>
                {!showPaymentOptions ? (
                    // Voucher Input and QR Scanner Screen
                    <>
                        {/* Voucher Input */}
                        <Box sx={{ mb: 3 }}>
                            <Typography variant="h6" sx={{
                                fontWeight: 600,
                                fontSize: '14px',
                                color: '#0E0D39',
                                mb: 2,
                                fontFamily: 'Poppins'
                            }}>
                                Voucher
                            </Typography>
                            <TextField
                                fullWidth
                                placeholder="Enter"
                                value={voucherCode}
                                onChange={(e) => setVoucherCode(e.target.value)}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: 2,
                                        fontFamily: 'Poppins',
                                        backgroundColor: theme.palette.background.paper,
                                        '& fieldset': {
                                            borderColor: theme.palette.divider,
                                        },
                                        '&:hover fieldset': {
                                            borderColor: theme.palette.primary.main,
                                        },
                                        '&.Mui-focused fieldset': {
                                            borderColor: theme.palette.primary.main,
                                        },
                                    },
                                    '& .MuiOutlinedInput-input': {
                                        color: theme.palette.text.primary,
                                    },
                                    '& .MuiOutlinedInput-input::placeholder': {
                                        fontSize: '14px',
                                        fontFamily:'Poppins',
                                        fontWeight: 400,
                                        color: '#8F8EA4',
                                        opacity: 1
                                    }
                                }}
                            />
                        </Box>

                        {/* Separator */}
                        <Box display="flex" alignItems="center" gap='10px' my='20px'>
                            <Box sx={{ height: '1px', width: "100%", background: "#8F8EA4", borderStyle: 'dashed' }} />
                            <Typography variant="body2" color="#0E0D39" fontWeight={500} sx={{fontFamily:'Poppins', fontSize:'15px'}}>Or</Typography>
                            <Box sx={{ height: '1px', width: "100%", background: "#8F8EA4", borderStyle: 'dashed' }} />
                        </Box>

                        {/* QR Code Scanner */}
                        <Box sx={{ 
                            display: 'flex', 
                            flexDirection: 'column', 
                            alignItems: 'center', 
                            mb: 4,
                            position: 'relative'
                        }}>
                            <Box sx={{
                                width: 200,
                                height: 200,
                                borderRadius: 2,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'relative',
                            }}>
                                {/* Corner brackets */}
                                <Box sx={{
                                    position: 'absolute',
                                    top: -2,
                                    left: -2,
                                    width: 20,
                                    height: 20,
                                    borderTop: '3px solid #3498DB',
                                    borderLeft: '3px solid #3498DB',
                                }} />
                                <Box sx={{
                                    position: 'absolute',
                                    top: -2,
                                    right: -2,
                                    width: 20,
                                    height: 20,
                                    borderTop: '3px solid #3498DB',
                                    borderRight: '3px solid #3498DB',
                                }} />
                                <Box sx={{
                                    position: 'absolute',
                                    bottom: -2,
                                    left: -2,
                                    width: 20,
                                    height: 20,
                                    borderBottom: '3px solid #3498DB',
                                    borderLeft: '3px solid #3498DB',
                                }} />
                                <Box sx={{
                                    position: 'absolute',
                                    bottom: -2,
                                    right: -2,
                                    width: 20,
                                    height: 20,
                                    borderBottom: '3px solid #3498DB',
                                    borderRight: '3px solid #3498DB',
                                }} />
                                <img src="/assets/QR.png"/>
                            </Box>
                        </Box>

                        {/* Pay by Voucher Button */}
                        <Button
                            variant="contained"
                            fullWidth
                            onClick={handleVoucherSubmit}
                            sx={{
                                background: 'linear-gradient(122deg, #35558A 4.67%, #3498DB 85.99%)',
                                color: '#FFFFFF',
                                fontFamily: 'Poppins',
                                py: 1.8,
                                borderRadius: 3,
                                fontWeight: 500,
                                fontSize: '16px',
                                textTransform: 'none',
                                '&:hover': {
                                     background: 'linear-gradient(122deg, #35558A 4.67%, #3498DB 85.99%)',
                                },
                            }}
                        >
                            Pay by voucher
                        </Button>
                    </>
                ) : (
                    // Payment Options Screen
                    <>
                        <Card sx={{
                            mb: 3,
                            borderRadius: 3,
                            border: '1px solid #1976d2',
                            backgroundColor: '#FFFFFF'
                        }}>
                            <CardContent sx={{ p: 3 }}>
                                <FormControl component="fieldset" sx={{ width: '100%' }}>
                                    <RadioGroup
                                        value={paymentMethod}
                                        onChange={handlePaymentMethodChange}
                                    >
                                        <FormControlLabel
                                            value="daily"
                                            control={<Radio sx={{ color: '#1976d2', '&.Mui-checked': { color: '#1976d2' } }} />}
                                            label={
                                                <Typography sx={{
                                                    fontWeight: 600,
                                                    fontSize: '16px',
                                                    color: '#000'
                                                }}>
                                                    $1.99 for a day
                                                </Typography>
                                            }
                                            sx={{
                                                width: '100%',
                                                margin: 0,
                                                padding: '8px 0',
                                                '& .MuiFormControlLabel-label': {
                                                    width: '100%'
                                                }
                                            }}
                                        />
                                        
                                        <Box sx={{ 
                                            height: '1px', 
                                            width: "100%", 
                                            background: "#C4C4CD", 
                                            borderStyle: 'dotted',
                                            my: 1
                                        }} />
                                        
                                        <FormControlLabel
                                            value="voucher"
                                            control={<Radio sx={{ color: '#1976d2', '&.Mui-checked': { color: '#1976d2' } }} />}
                                            label={
                                                <Typography sx={{
                                                    fontWeight: 600,
                                                    fontSize: '16px',
                                                    color: '#000'
                                                }}>
                                                    Pay by voucher
                                                </Typography>
                                            }
                                            sx={{
                                                width: '100%',
                                                margin: 0,
                                                padding: '8px 0',
                                                '& .MuiFormControlLabel-label': {
                                                    width: '100%'
                                                }
                                            }}
                                        />
                                    </RadioGroup>
                                </FormControl>
                            </CardContent>
                        </Card>



                        {/* Submit Button */}
                        <Button
                            variant="contained"
                            fullWidth
                            onClick={handleSubmit}
                            sx={{
                                background: 'linear-gradient(122deg, #35558A 4.67%, #3498DB 85.99%)',
                                color: '#FFFFFF',
                                fontFamily: 'Poppins',
                                py: 1.8,
                                borderRadius: 3,
                                fontWeight: 500,
                                fontSize: '16px',
                                textTransform: 'none',
                                '&:hover': {
                                     background: 'linear-gradient(122deg, #35558A 4.67%, #3498DB 85.99%)',
                                },
                            }}
                        >
                            Submit
                        </Button>
                    </>
                )}
            </Container>
        </Box>
    )
}

export default Voucher