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

const Payment = () => {
    const theme = useTheme();
    const mode = theme.palette.mode;
    const router = useRouter()
    const { getLabels } = languageStore()
    const Labels = getLabels('Menu') as any
    
    const [paymentOption, setPaymentOption] = useState('daily');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handlePaymentOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPaymentOption(event.target.value);
    };

    const handleSubmit = () => {
        setIsSubmitting(true);
        // Simulate payment processing
        setTimeout(() => {
            setIsSubmitting(false);
            // Handle payment logic here
        }, 2000);
    };

    const paymentHistory = [
        {
            id: 1,
            type: 'Day',
            startDate: '12/07/2023 08:02 pm',
            endDate: '15/07/2023 08:02 pm',
            amount: '$1.99'
        },
        {
            id: 2,
            type: 'Day',
            startDate: '08/07/2023 08:02 pm',
            endDate: '11/07/2023 08:02 pm',
            amount: '$1.99'
        },
        {
            id: 3,
            type: 'Day',
            startDate: '04/07/2023 08:02 pm',
            endDate: '07/07/2023 08:02 pm',
            amount: '$1.99'
        }
    ];

    return (
        <Box sx={{ 
            minHeight: '100vh', 
            backgroundColor: '#f5f5f5',
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
                mt: 2, 
                pt: 2,
                backgroundColor: 'transparent',
                position: 'relative',
                zIndex: 2,
                pb: 4
            }}>
                {/* Payment Options Card */}
                <Card sx={{ 
                    mb: 3, 
                    borderRadius: 2,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    backgroundColor: '#fff'
                }}>
                    <CardContent sx={{ p: 3 }}>
                        <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#333' }}>
                            Payment Options
                        </Typography>
                        
                        <RadioGroup
                            value={paymentOption}
                            onChange={handlePaymentOptionChange}
                            sx={{ mb: 3 }}
                        >
                            <FormControlLabel
                                value="daily"
                                control={<Radio />}
                                label={
                                    <Typography variant="body1" sx={{ fontWeight: 500, color: '#333' }}>
                                        $1.99 for a day
                                    </Typography>
                                }
                                sx={{ mb: 1 }}
                            />
                            <FormControlLabel
                                value="voucher"
                                control={<Radio />}
                                label={
                                    <Typography variant="body1" sx={{ fontWeight: 500, color: '#333' }}>
                                        Subscribe with a voucher
                                    </Typography>
                                }
                            />
                        </RadioGroup>

                        <Button
                            variant="contained"
                            fullWidth
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                            sx={{
                                background: 'linear-gradient(135deg, #35558a 0%, #3487c7 100%)',
                                color: '#fff',
                                py: 1.5,
                                borderRadius: 2,
                                fontWeight: 600,
                                '&:hover': {
                                    background: 'linear-gradient(135deg, #2a4a7a 0%, #2d7ab7 100%)',
                                },
                                '&:disabled': {
                                    background: '#ccc',
                                    color: '#666'
                                }
                            }}
                        >
                            {isSubmitting ? 'Processing...' : 'Submit'}
                        </Button>
                    </CardContent>
                </Card>

                {/* Payment History */}
                <Box>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#333' }}>
                        Payment History
                    </Typography>
                    
                    {paymentHistory.map((payment, index) => (
                        <Card key={payment.id} sx={{ 
                            mb: 2,
                            borderRadius: 2,
                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                            backgroundColor: '#fff'
                        }}>
                            <CardContent sx={{ p: 2 }}>
                                <Box display="flex" alignItems="center" justifyContent="space-between">
                                    <Box display="flex" alignItems="center" gap={2}>
                                        <Box sx={{
                                            width: 40,
                                            height: 40,
                                            borderRadius: 1,
                                            background: 'linear-gradient(135deg, #35558a 0%, #3487c7 100%)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            <TrendingUpIcon sx={{ color: '#fff', fontSize: 20 }} />
                                        </Box>
                                        <Box>
                                            <Typography variant="body1" sx={{ fontWeight: 600, color: '#333' }}>
                                                {payment.type}
                                            </Typography>
                                            <Typography variant="caption" color="text.secondary">
                                                Start Date: {payment.startDate}
                                            </Typography>
                                            <Typography variant="caption" color="text.secondary" display="block">
                                                End Date: {payment.endDate}
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Typography variant="h6" sx={{ fontWeight: 600, color: '#35558a' }}>
                                        {payment.amount}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Container>
        </Box>
    )
}

export default Payment