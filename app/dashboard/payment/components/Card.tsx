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
    Card,
    CardContent
} from '@mui/material'
import { lineClampStyle, profileTopContainerStyle, whiteIconButtonStyle } from '@/themes/styles';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { useRouter } from 'next/navigation';
import languageStore from '@/zustand/languageStore';

const CardPayment = () => {
    const theme = useTheme();
    const mode = theme.palette.mode;
    const router = useRouter()
    const { getLabels } = languageStore()
    const Labels = getLabels('Menu') as any
    const PaymentsLabels = getLabels('Payments') as any
    const CommonLabels = getLabels('Common') as any

    const [cardData, setCardData] = useState({
        cardNumber: '',
        cardholderName: '',
        expiryDate: '',
        cvv: ''
    });
    const [isProcessing, setIsProcessing] = useState(false);

    const handleInputChange = (field: string, value: string) => {
        setCardData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleCardNumberChange = (value: string) => {
        // Format card number with spaces
        const formatted = value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
        handleInputChange('cardNumber', formatted);
    };

    const handleExpiryChange = (value: string) => {
        // Format expiry date as MM/YY
        const cleaned = value.replace(/\D/g, '');
        if (cleaned.length <= 2) {
            handleInputChange('expiryDate', cleaned);
        } else {
            const formatted = cleaned.slice(0, 2) + '/' + cleaned.slice(2, 4);
            handleInputChange('expiryDate', formatted);
        }
    };

    const handleSubmit = () => {
        setIsProcessing(true);
        // Simulate payment processing
        setTimeout(() => {
            setIsProcessing(false);
            // Handle payment success
            router.push('/dashboard');
        }, 2000);
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
                backgroundColor: theme.palette.background.paper,
                position: 'relative',
                zIndex: 2,
                pb: 4,
                px: 2
            }}>
                {/* Total Subscription Card */}
                <Card sx={{
                    mb: 3,
                    borderRadius: 3,
                    background: 'linear-gradient(122deg, #35558A 4.67%, #3498DB 85.99%)',
                    color: '#FFFFFF',
                    overflow: 'hidden'
                }}>
                    <CardContent sx={{ p: 3 }}>
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                            <Typography variant="h6" sx={{
                                fontWeight: 600,
                                fontSize: '15px',
                                fontFamily: 'Poppins',
                                color: '#FFFFFF'
                            }}>
                                {PaymentsLabels?.lbl_total_subval || 'Total Subscription'}
                            </Typography>
                            <Typography variant="h6" sx={{
                                fontWeight: 600,
                                fontSize: '24px',
                                fontFamily: 'Poppins',
                                color: '#FFFFFF'
                            }}>
                                $1.99
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>

                {/* Credit Card Display */}
                <Card sx={{
                    mb: 3,
                    borderRadius: 3,
                    background: 'linear-gradient(135deg, #4CAF50 0%, #2196F3 50%, #9C27B0 100%)',
                    color: '#FFFFFF',
                    overflow: 'hidden',
                    position: 'relative',
                    height: 200
                }}>
                    <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        {/* Top Section */}
                        <Box display="flex" justifyContent="space-between" alignItems="flex-start">
                            <Box sx={{
                                width: 40,
                                height: 30,
                                backgroundColor: '#FFD700',
                                borderRadius: 1,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <CreditCardIcon sx={{ color: '#000', fontSize: 20 }} />
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1
                            }}>
                                <Box sx={{
                                    width: 30,
                                    height: 30,
                                    borderRadius: '50%',
                                    backgroundColor: '#FF6B35'
                                }} />
                                <Box sx={{
                                    width: 30,
                                    height: 30,
                                    borderRadius: '50%',
                                    backgroundColor: '#FF0000'
                                }} />
                            </Box>
                        </Box>

                        {/* Middle Section */}
                        <Box>
                            <Typography variant="h5" sx={{
                                fontWeight: 600,
                                fontSize: '24px',
                                fontFamily: 'monospace',
                                letterSpacing: 2,
                                mb: 2
                            }}>
                                **** **** **** 1234
                            </Typography>
                        </Box>

                        {/* Bottom Section */}
                        <Box display="flex" justifyContent="space-between" alignItems="flex-end">
                            <Box>
                                <Typography variant="caption" sx={{
                                    fontSize: '12px',
                                    opacity: 0.8,
                                    display: 'block',
                                    mb: 0.5
                                }}>
                                    {PaymentsLabels?.lbl_cardholder_name || 'Cardholder Name'}
                                </Typography>
                                <Typography variant="body1" sx={{
                                    fontWeight: 500,
                                    fontSize: '16px'
                                }}>
                                    Abuzer Firdousi
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant="caption" sx={{
                                    fontSize: '12px',
                                    opacity: 0.8,
                                    display: 'block',
                                    mb: 0.5
                                }}>
                                    {PaymentsLabels?.lbl_expiry_date || 'Expiry Date'}
                                </Typography>
                                <Typography variant="body1" sx={{
                                    fontWeight: 500,
                                    fontSize: '16px'
                                }}>
                                    01/22
                                </Typography>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>

                {/* Input Fields */}
                <Box sx={{ mb: 10 }}>
                    <Typography variant="body1" sx={{
                        fontWeight: 600,
                        fontSize: '14px',
                        color: theme.palette.text.primary,
                        mb: 1,
                        fontFamily: 'Poppins'
                    }}>
                        {PaymentsLabels?.lbl_creditcard || 'Credit card'}
                    </Typography>
                    <TextField
                        fullWidth
                        placeholder={PaymentsLabels?.msg_credit_card || 'Enter'}
                        value={cardData.cardNumber}
                        onChange={(e) => handleCardNumberChange(e.target.value)}
                        sx={{
                            mb: 2,
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
                                fontWeight: 400,
                                color: theme.palette.text.secondary,
                                opacity: 1
                            }
                        }}
                    />

                    <Box display="flex" gap={2}>
                        <Box flex={1}>
                            <Typography variant="body1" sx={{
                                fontWeight: 600,
                                fontSize: '14px',
                                color: theme.palette.text.primary,
                                mb: 1,
                                fontFamily: 'Poppins'
                            }}>
                                {PaymentsLabels?.lbl_cvv || 'CVV'}
                            </Typography>
                            <TextField
                                fullWidth
                                placeholder={PaymentsLabels?.msg_cvv || 'Enter'}
                                value={cardData.cvv}
                                onChange={(e) => handleInputChange('cvv', e.target.value)}
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
                                        fontWeight: 400,
                                        color: theme.palette.text.secondary,
                                        opacity: 1
                                    }
                                }}
                            />
                        </Box>
                        <Box flex={1}>
                            <Typography variant="body1" sx={{
                                fontWeight: 600,
                                fontSize: '14px',
                                color: theme.palette.text.primary,
                                mb: 1,
                                fontFamily: 'Poppins'
                            }}>
                                {PaymentsLabels?.lbl_monthyear || 'MM/YY'}
                            </Typography>
                            <TextField
                                fullWidth
                                placeholder={PaymentsLabels?.msg_exp_date || 'Enter'}
                                value={cardData.expiryDate}
                                onChange={(e) => handleExpiryChange(e.target.value)}
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
                                        fontWeight: 400,
                                        color: theme.palette.text.secondary,
                                        opacity: 1
                                    }
                                }}
                            />
                        </Box>
                    </Box>
                </Box>

                {/* Payment Button */}
                <Button
                    variant="contained"
                    fullWidth
                    onClick={handleSubmit}
                    disabled={isProcessing}
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
                    {isProcessing ? (CommonLabels?.lbl_submit || 'Processing...') : (PaymentsLabels?.btn_creditcard || 'Credit Card')}
                </Button>
            </Container>
        </Box>
    )
}

export default CardPayment 