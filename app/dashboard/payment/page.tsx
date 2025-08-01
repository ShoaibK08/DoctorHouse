'use client'
import React, { useState } from 'react'
import {
    Box,
    Container,
    useTheme,
    IconButton,
    Typography,
    Radio,
    RadioGroup,
    FormControlLabel,
    Button,
    Card,
    CardContent,
    Divider
} from '@mui/material'
import { lineClampStyle, profileTopContainerStyle, whiteIconButtonStyle } from '@/themes/styles';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { useRouter } from 'next/navigation';
import languageStore from '@/zustand/languageStore';
import CardPayment from './components/Card';

const Payment = () => {
    const theme = useTheme();
    const mode = theme.palette.mode;
    const router = useRouter()
    const { getLabels } = languageStore()
    const Labels = getLabels('Menu') as any

    const [paymentOption, setPaymentOption] = useState('daily');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showCardPayment, setShowCardPayment] = useState(false);

    const handlePaymentOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPaymentOption(event.target.value);
    };

    const handleSubmit = () => {
        if (paymentOption === 'voucher') {
            setShowCardPayment(true);
        } else {
            setIsSubmitting(true);
            // Simulate payment processing for daily option
            setTimeout(() => {
                setIsSubmitting(false);
                // Handle payment logic here
            }, 2000);
        }
    };

    const paymentHistory = [
        {
            id: 1,
            type: 'Day',
            startDate: '12/07/2023',
            startTime: '08:02 pm',
            endDate: '15/07/2023',
            endTime: '08:02 pm',
            amount: '$1.99'
        },
        {
            id: 2,
            type: 'Day',
            startDate: '08/07/2023',
            startTime: '08:02 pm',
            endDate: '11/07/2023',
            endTime: '08:02 pm',
            amount: '$1.99'
        },
        {
            id: 3,
            type: 'Day',
            startDate: '04/07/2023',
            startTime: '08:02 pm',
            endDate: '07/07/2023',
            endTime: '08:02 pm',
            amount: '$1.99'
        }
    ];

    // If showing card payment, render the Card component
    if (showCardPayment) {
        return <CardPayment />;
    }

    return (
        <Box sx={{
            minHeight: '100vh',
            backgroundColor: '#f8f9fa',
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
                        <Box width="100%" textAlign="center">
                            <Typography variant="body1" color="#fff" sx={lineClampStyle(1)}>
                                <b>{Labels?.lbl_payment || 'Payment'}</b>
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* Content */}
            <Container fixed sx={{
                pt: 3,
                backgroundColor: '#FFFFFF',
                position: 'relative',
                zIndex: 2,
                pb: 4,
                px: 2
            }}>
                {/* Payment Options Card */}
                <Card sx={{
                    mb: 3,
                    borderRadius: 3,
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #35558A',
                    overflow: 'hidden'
                }}>
                    <CardContent sx={{ p: 0 }}>
                        <RadioGroup
                            value={paymentOption}
                            onChange={handlePaymentOptionChange}
                        >
                            <FormControlLabel
                                value="daily"
                                labelPlacement="start"
                                control={<Radio sx={{
                                    color: '#8F8EA4',
                                    '&.Mui-checked': {
                                        color: '#1976d2',
                                    },
                                }} />}
                                label={
                                    <Typography variant="body1">
                                        <Box component="span" sx={{ fontWeight: 600, fontSize: '20px', fontFamily: 'Poppins',color:'#0E0D39' }}>
                                            $1.99
                                        </Box>{' '}
                                        <Box component="span" sx={{ fontWeight: 500, fontSize: '18px', fontFamily: 'Poppins',color:'#0E0D39' }}>
                                            for a day
                                        </Box>
                                    </Typography>
                                }
                                sx={{
                                    m: 0,
                                    px: 3,
                                    py: 2,
                                    width: '100%',
                                    borderBottom: '1.2px dashed #35558A',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}
                            />

                            <FormControlLabel
                                value="voucher"
                                labelPlacement="start"
                                control={<Radio sx={{
                                    color: '#8F8EA4',
                                    '&.Mui-checked': {
                                        color: '#1976d2',
                                    },
                                }} />}
                                label={
                                    <Typography variant="body1" sx={{
                                        fontWeight: 500,
                                        fontSize: '18px',
                                        fontFamily: 'Poppins',
                                        color: '#0E0D39'
                                    }}>
                                        Subscribe with a voucher
                                    </Typography>
                                }
                                sx={{
                                    m: 0,
                                    px: 3,
                                    py: 2,
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}
                            />
                        </RadioGroup>
                    </CardContent>
                </Card>

                <Button
                    variant="contained"
                    fullWidth
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    sx={{
                        background: 'linear-gradient(180deg, #3498DB 0%, #35558A 100%)',
                        color: '#FFFFFF',
                        fontFamily: 'Poppins',
                        py: 1.8,
                        borderRadius: 3,
                        fontWeight: 500,
                        fontSize: '16px',
                        mb: 4,
                        textTransform: 'none',
                        '&:hover': {
                            background: 'linear-gradient(180deg, #3498DB 0%, #35558A 100%)',
                        },
                    }}
                >
                    {isSubmitting ? 'Processing...' : 'Submit'}
                </Button>

                {/* Payment History */}
                <Box>
                    <Typography variant="h6" sx={{
                        mb: 3,
                        fontFamily: 'Poppins',
                        fontWeight: 600,
                        color: '#0E0D39',
                        fontSize: '20px',
                        textAlign: 'center'
                    }}>
                        Payment History
                    </Typography>

                    {paymentHistory.map((payment, index) => (
                        <Box key={payment.id}>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                justifyContent: 'space-between',
                                py: 2,
                                px: 1
                            }}>
                                {/* Left Section - Icon and Details */}
                                <Box display="flex" alignItems="flex-start" gap={1.4}>
                                    {/* Icon */}
                                    <Box sx={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: 1.5,
                                        background: 'linear-gradient(122deg, #35558A 4.67%, #3498DB 85.99%)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flexShrink: 0
                                    }}>
                                        <TrendingUpIcon sx={{ color: '#fff', fontSize: 20 }} />
                                    </Box>

                                    {/* Payment Details */}
                                    <Box>
                                        <Typography variant="body1" sx={{
                                            fontWeight: 500,
                                            color: '#0E0D39',
                                            fontSize: '18px',
                                            mb: 0.4,
                                            fontFamily: 'Poppins'
                                        }}>
                                            {payment.type}
                                        </Typography>

                                        {/* Start Date */}
                                        <Box mb={0.8}>
                                            <Typography variant="caption" sx={{
                                                color: '#494869',
                                                fontSize: '12px',
                                                fontWeight: 500,
                                                display: 'block',
                                                lineHeight: 1.2,
                                                fontFamily: 'Poppins'
                                            }}>
                                                Start Date
                                            </Typography>
                                            <Typography variant="caption" sx={{
                                                color: '#79789E',
                                                fontSize: '12px',
                                                display: 'block',
                                                fontWeight: 500,
                                                fontFamily: 'Poppins'
                                            }}>
                                                {payment.startDate} <span style={{ color: '#E8381E' }}>{payment.startTime}</span>
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>

                                {/* Right Section - Amount and End Date */}
                                <Box textAlign="right">
                                    <Typography variant="h6" sx={{
                                        fontWeight: 600,
                                        color: '#35558A',
                                        fontSize: '20px',
                                        mb: 1,
                                        fontFamily: 'Poppins'
                                    }}>
                                        {payment.amount}
                                    </Typography>

                                    {/* End Date */}
                                    <Box>
                                        <Typography variant="caption" sx={{
                                            color: '#494869',
                                            fontSize: '12px',
                                            fontWeight: 500,
                                            display: 'block',
                                            lineHeight: 1.2,
                                            fontFamily: 'Poppins'
                                        }}>
                                            End Date
                                        </Typography>
                                        <Typography variant="caption" sx={{
                                            color: '#79789E',
                                            fontSize: '12px',
                                            display: 'block',
                                            fontWeight: 500,
                                            fontFamily: 'Poppins'
                                        }}>
                                            {payment.endDate} <span style={{ color: '#E8381E' }}>{payment.endTime}</span>
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>

                            {/* Dotted divider line between items */}
                            {index < paymentHistory.length - 1 && (
                                <Box sx={{
                                    borderBottom: '1px dashed #79789E',
                                    mx: 0,
                                    mb: 1
                                }} />
                            )}
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    )
}

export default Payment