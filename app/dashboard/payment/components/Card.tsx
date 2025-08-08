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
import { lineClampStyle } from '@/themes/styles';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { useRouter } from 'next/navigation';
import languageStore from '@/zustand/languageStore';
import { secondary } from '@/utils/colors';

interface CardData {
    cardNumber: string;
    cardholderName: string;
    expiryDate: string;
    cvv: string;
}

const CardPayment = () => {
    const theme = useTheme();
    const mode = theme.palette.mode;
    const router = useRouter()
    const { getLabels } = languageStore()
    const Labels = getLabels('Menu') as any
    const PaymentsLabels = getLabels('Payments') as any
    const CommonLabels = getLabels('Common') as any

    const [cardData, setCardData] = useState<CardData>({
        cardNumber: '',
        cardholderName: '',
        expiryDate: '',
        cvv: ''
    });
    const [isProcessing, setIsProcessing] = useState<boolean>(false);

    const handleInputChange = (field: keyof CardData, value: string) => {
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
        <Box sx={mainContainerStyle}>
            {/* Header - Profile screen jaisa styling */}
            <Box sx={topContainerStyle(mode)}>
                <Container fixed>
                    <Box sx={headerBoxStyle}>
                        <IconButton onClick={() => router.back()}>
                            <KeyboardArrowLeftIcon sx={backIconStyle} />
                        </IconButton>
                        <Box sx={headerTitleContainerStyle}>
                            <Typography variant="body1" sx={{ ...headerTitleStyle, ...lineClampStyle(1) }}>
                                <b>{Labels?.lbl_payment || 'Payment'}</b>
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* Content */}
            <Container fixed sx={contentContainerStyle}>
                {/* Total Subscription Card */}
                <Card sx={subscriptionCardStyle}>
                    <CardContent sx={subscriptionCardContentStyle}>
                        <Box sx={subscriptionCardBoxStyle}>
                            <Typography variant="h6" sx={subscriptionTitleStyle}>
                                {PaymentsLabels?.lbl_total_subval || 'Total Subscription'}
                            </Typography>
                            <Typography variant="h6" sx={subscriptionAmountStyle}>
                                $1.99
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>

                {/* Credit Card Display */}
                <Card sx={creditCardStyle}>
                    <CardContent sx={creditCardContentStyle}>
                        {/* Top Section */}
                        <Box sx={cardTopSectionStyle}>
                            <Box sx={cardChipStyle}>
                                <CreditCardIcon sx={cardChipIconStyle} />
                            </Box>
                            <Box sx={cardLogosContainerStyle}>
                                <Box sx={cardLogo1Style} />
                                <Box sx={cardLogo2Style} />
                            </Box>
                        </Box>

                        {/* Middle Section */}
                        <Box>
                            <Typography variant="h5" sx={cardNumberStyle}>
                                **** **** **** 1234
                            </Typography>
                        </Box>

                        {/* Bottom Section */}
                        <Box sx={cardBottomSectionStyle}>
                            <Box>
                                <Typography variant="caption" sx={cardLabelStyle}>
                                    {PaymentsLabels?.lbl_cardholder_name || 'Cardholder Name'}
                                </Typography>
                                <Typography variant="body1" sx={cardValueStyle}>
                                    Abuzer Firdousi
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant="caption" sx={cardLabelStyle}>
                                    {PaymentsLabels?.lbl_expiry_date || 'Expiry Date'}
                                </Typography>
                                <Typography variant="body1" sx={cardValueStyle}>
                                    01/22
                                </Typography>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>

                {/* Input Fields */}
                <Box sx={inputFieldsContainerStyle}>
                    <Typography variant="body1" sx={inputLabelStyle}>
                        {PaymentsLabels?.lbl_creditcard || 'Credit card'}
                    </Typography>
                    <TextField
                        fullWidth
                        placeholder={PaymentsLabels?.msg_credit_card || 'Enter'}
                        value={cardData.cardNumber}
                        onChange={(e) => handleCardNumberChange(e.target.value)}
                        sx={textFieldStyle(mode)}
                    />

                    <Box sx={inputRowStyle}>
                        <Box sx={inputHalfStyle}>
                            <Typography variant="body1" sx={inputLabelStyle}>
                                {PaymentsLabels?.lbl_cvv || 'CVV'}
                            </Typography>
                            <TextField
                                fullWidth
                                placeholder={PaymentsLabels?.msg_cvv || 'Enter'}
                                value={cardData.cvv}
                                onChange={(e) => handleInputChange('cvv', e.target.value)}
                                sx={textFieldHalfStyle(mode)}
                            />
                        </Box>
                        <Box sx={inputHalfStyle}>
                            <Typography variant="body1" sx={inputLabelStyle}>
                                {PaymentsLabels?.lbl_monthyear || 'MM/YY'}
                            </Typography>
                            <TextField
                                fullWidth
                                placeholder={PaymentsLabels?.msg_exp_date || 'Enter'}
                                value={cardData.expiryDate}
                                onChange={(e) => handleExpiryChange(e.target.value)}
                                sx={textFieldHalfStyle(mode)}
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
                    sx={paymentButtonStyle}
                >
                    {isProcessing ? (CommonLabels?.lbl_submit || 'Processing...') : (PaymentsLabels?.btn_creditcard || 'Credit Card')}
                </Button>
            </Container>
        </Box>
    )
}

export default CardPayment

// CSS Object Styles
const mainContainerStyle = {
    minHeight: '100vh'
};

const headerBoxStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    justifyContent: 'space-between'
};

const backIconStyle = {
    color: "#fff"
};

const headerTitleContainerStyle = {
    width: '100%',
    textAlign: 'center'
};

const headerTitleStyle = {
    color: '#fff'
};

const contentContainerStyle = {
    pt: 3,
    pb: 4,
    px: 2
};

const subscriptionCardStyle = {
    mb: 3,
    borderRadius: 3,
    background: 'linear-gradient(122deg, #35558A 4.67%, #3498DB 85.99%)',
    color: '#FFFFFF',
    overflow: 'hidden'
};

const subscriptionCardContentStyle = {
    p: 3
};

const subscriptionCardBoxStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
};

const subscriptionTitleStyle = {
    fontWeight: 600,
    fontSize: '15px',
    fontFamily: 'Poppins',
    color: '#FFFFFF'
};

const subscriptionAmountStyle = {
    fontWeight: 600,
    fontSize: '24px',
    fontFamily: 'Poppins',
    color: '#FFFFFF'
};

const creditCardStyle = {
    mb: 3,
    borderRadius: 3,
    background: 'linear-gradient(135deg, #4CAF50 0%, #2196F3 50%, #9C27B0 100%)',
    color: '#FFFFFF',
    overflow: 'hidden',
    position: 'relative',
    height: 200
};

const creditCardContentStyle = {
    p: 3,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
};

const cardTopSectionStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
};

const cardChipStyle = {
    width: 40,
    height: 30,
    backgroundColor: '#FFD700',
    borderRadius: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};

const cardChipIconStyle = {
    color: '#000',
    fontSize: 20
};

const cardLogosContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: 1
};

const cardLogo1Style = {
    width: 30,
    height: 30,
    borderRadius: '50%',
    backgroundColor: '#FF6B35'
};

const cardLogo2Style = {
    width: 30,
    height: 30,
    borderRadius: '50%',
    backgroundColor: '#FF0000'
};

const cardNumberStyle = {
    fontWeight: 600,
    fontSize: '24px',
    fontFamily: 'monospace',
    letterSpacing: 2,
    mb: 2
};

const cardBottomSectionStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
};

const cardLabelStyle = {
    fontSize: '12px',
    opacity: 0.8,
    display: 'block',
    mb: 0.5
};

const cardValueStyle = {
    fontWeight: 500,
    fontSize: '16px'
};

const inputFieldsContainerStyle = {
    mb: 10
};

const inputLabelStyle = {
    fontWeight: 600,
    fontSize: '14px',
    color: 'text.primary',
    mb: 1,
    fontFamily: 'Poppins'
};

const inputRowStyle = {
    display: 'flex',
    gap: 2
};

const inputHalfStyle = {
    flex: 1
};

const textFieldStyle = (mode: string) => ({
    mb: 2,
    '& .MuiOutlinedInput-root': {
        borderRadius: 2,
        fontFamily: 'Poppins',
        '& fieldset': {
            borderColor: mode === 'light' ? '#E5E7EB' : '#3B3B3B',
        },
        '&:hover fieldset': {
            borderColor: 'primary.main',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'primary.main',
        },
    },
    '& .MuiOutlinedInput-input': {
        color: 'text.primary',
    },
    '& .MuiOutlinedInput-input::placeholder': {
        fontSize: '14px',
        fontWeight: 400,
        color: 'text.secondary',
        opacity: 1
    }
});

const textFieldHalfStyle = (mode: string) => ({
    '& .MuiOutlinedInput-root': {
        borderRadius: 2,
        fontFamily: 'Poppins',
        '& fieldset': {
            borderColor: mode === 'light' ? '#E5E7EB' : '#3B3B3B',
        },
        '&:hover fieldset': {
            borderColor: 'primary.main',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'primary.main',
        },
    },
    '& .MuiOutlinedInput-input': {
        color: 'text.primary',
    },
    '& .MuiOutlinedInput-input::placeholder': {
        fontSize: '14px',
        fontWeight: 400,
        color: 'text.secondary',
        opacity: 1
    }
});

const paymentButtonStyle = {
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
};

// Profile screen jaisa topContainerStyle function
const topContainerStyle = (mode: string) => {
    return {
        background: mode === "light" ? "linear-gradient(to right, #35558a, #3487c7)" : secondary,
        pt: '20px',
        pb: '40px'
    }
}