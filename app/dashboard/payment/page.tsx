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
} from '@mui/material'
import { lineClampStyle } from '@/themes/styles';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import { useRouter } from 'next/navigation';
import languageStore from '@/zustand/languageStore';
import { secondary } from '@/utils/colors';
import CardPayment from './components/Card';
import Voucher from './components/Voucher';

interface PaymentHistoryItem {
    id: number;
    type: string;
    startDate: string;
    startTime: string;
    endDate: string;
    endTime: string;
    amount: string;
}

const Payment = () => {
    const theme = useTheme();
    const mode = theme.palette.mode;
    const router = useRouter()
    const { getLabels } = languageStore()
    const Labels = getLabels('Menu') as any
    const PaymentHistoryLabels = getLabels('Payment_History') as any
    const PaymentsLabels = getLabels('Payments') as any
    const CommonLabels = getLabels('Common') as any

    const [paymentOption, setPaymentOption] = useState<string>('daily');
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [showCardPayment, setShowCardPayment] = useState<boolean>(false);
    const [showVoucher, setShowVoucher] = useState<boolean>(false);

    const handlePaymentOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPaymentOption(event.target.value);
    };

    const handleSubmit = () => {
        if (paymentOption === 'daily') {
            setShowCardPayment(true);
        } else {
            setShowVoucher(true);
        }
    };

    const paymentHistory: PaymentHistoryItem[] = [
        {
            id: 1,
            type: PaymentHistoryLabels?.lbl_day || 'Day',
            startDate: '12/07/2023',
            startTime: '08:02 pm',
            endDate: '15/07/2023',
            endTime: '08:02 pm',
            amount: '$1.99'
        },
        {
            id: 2,
            type: PaymentHistoryLabels?.lbl_day || 'Day',
            startDate: '08/07/2023',
            startTime: '08:02 pm',
            endDate: '11/07/2023',
            endTime: '08:02 pm',
            amount: '$1.99'
        },
        {
            id: 3,
            type: PaymentHistoryLabels?.lbl_day || 'Day',
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

    // If showing voucher, render the Voucher component
    if (showVoucher) {
        return <Voucher />;
    }

    return (
        <Box sx={mainContainerStyle}>
            {/* Header - Same as Profile */}
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
                {/* Payment Options Card */}
                <Card sx={paymentOptionsCardStyle(theme)}>
                    <CardContent sx={cardContentStyle}>
                        <RadioGroup
                            value={paymentOption}
                            onChange={handlePaymentOptionChange}
                        >
                            <FormControlLabel
                                value="daily"
                                labelPlacement="start"
                                control={<Radio sx={radioStyle(theme)} />}
                                label={
                                    <Typography variant="body1">
                                        <Box component="span" sx={priceTextStyle(theme)}>
                                            $1.99
                                        </Box>{' '}
                                        <Box component="span" sx={dayTextStyle(theme)}>
                                            {PaymentHistoryLabels?.lbl_pmt_day || 'for a day'}
                                        </Box>
                                    </Typography>
                                }
                                sx={dailyOptionStyle(theme)}
                            />

                            <FormControlLabel
                                value="voucher"
                                labelPlacement="start"
                                control={<Radio sx={radioStyle(theme)} />}
                                label={
                                    <Typography variant="body1" sx={voucherTextStyle(theme)}>
                                        {PaymentsLabels?.lbl_couponcode || 'Subscribe with a voucher'}
                                    </Typography>
                                }
                                sx={voucherOptionStyle}
                            />
                        </RadioGroup>
                    </CardContent>
                </Card>

                <Button
                    variant="contained"
                    fullWidth
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    sx={submitButtonStyle}
                >
                    {isSubmitting ? (CommonLabels?.lbl_submit || 'Processing...') : (CommonLabels?.lbl_submit || 'Submit')}
                </Button>

                {/* Payment History */}
                <Box>
                    <Typography variant="h6" sx={historyTitleStyle(theme)}>
                        {PaymentHistoryLabels?.lbl_payment_history || 'Payment History'}
                    </Typography>

                    {paymentHistory.map((payment: PaymentHistoryItem, index: number) => (
                        <Box key={payment.id}>
                            <Box sx={historyItemContainerStyle}>
                                {/* Left Section - Icon and Details */}
                                <Box sx={leftSectionStyle}>
                                    {/* Icon */}
                                    <Box sx={iconContainerStyle}>
                                        <NorthEastIcon sx={iconStyle} />
                                    </Box>

                                    {/* Payment Details */}
                                    <Box>
                                        <Typography variant="body1" sx={paymentTypeStyle(theme)}>
                                            {payment.type}
                                        </Typography>

                                        {/* Start Date */}
                                        <Box sx={dateContainerStyle}>
                                            <Typography variant="caption" sx={dateLabelStyle(theme)}>
                                                {PaymentHistoryLabels?.lbl_start_date || 'Start Date'}
                                            </Typography>
                                            <Typography variant="caption" sx={dateValueStyle(theme)}>
                                                {payment.startDate} <Box component="span" sx={timeStyle}>
                                                    {payment.startTime}
                                                </Box>
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>

                                {/* Right Section - Amount and End Date */}
                                <Box sx={rightSectionStyle}>
                                    <Typography variant="h6" sx={amountStyle(theme)}>
                                        {payment.amount}
                                    </Typography>

                                    {/* End Date */}
                                    <Box>
                                        <Typography variant="caption" sx={dateLabelStyle(theme)}>
                                            {PaymentHistoryLabels?.lbl_end_date || 'End Date'}
                                        </Typography>
                                        <Typography variant="caption" sx={dateValueStyle(theme)}>
                                            {payment.endDate} <Box component="span" sx={timeStyle}>
                                                {payment.endTime}
                                            </Box>
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>

                            {/* Dotted divider line between items */}
                            {index < paymentHistory.length - 1 && (
                                <Box sx={dividerStyle(theme)} />
                            )}
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    )
}

export default Payment

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
    pb: 4
};

const paymentOptionsCardStyle = (theme: any) => ({
    mb: 3,
    borderRadius: 3,
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.primary.main}`,
    overflow: 'hidden'
});

const cardContentStyle = {
    p: 0,
    '&:last-child': {
        paddingBottom: 0
    }
};

const radioStyle = (theme: any) => ({
    color: theme.palette.text.secondary,
    '&.Mui-checked': {
        color: theme.palette.primary.main,
    },
});

const priceTextStyle = (theme: any) => ({
    fontWeight: 600,
    fontSize: '20px',
    fontFamily: 'Poppins',
    color: theme.palette.text.primary
});

const dayTextStyle = (theme: any) => ({
    fontWeight: 500,
    fontSize: '18px',
    fontFamily: 'Poppins',
    color: theme.palette.text.primary
});

const dailyOptionStyle = (theme: any) => ({
    m: 0,
    px: 3,
    py: 2,
    width: '100%',
    borderBottom: `1.2px dashed ${theme.palette.primary.main}`,
    display: 'flex',
    justifyContent: 'space-between',
});

const voucherTextStyle = (theme: any) => ({
    fontWeight: 500,
    fontSize: '18px',
    fontFamily: 'Poppins',
    color: theme.palette.text.primary
});

const voucherOptionStyle = {
    m: 0,
    px: 3,
    py: 2,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
};

const submitButtonStyle = {
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
};

const historyTitleStyle = (theme: any) => ({
    mb: 3,
    fontFamily: 'Poppins',
    fontWeight: 600,
    color: theme.palette.text.primary,
    fontSize: '20px',
    textAlign: 'center'
});

const historyItemContainerStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    py: 2,
    px: 1
};

const leftSectionStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 1.4
};

const iconContainerStyle = {
    width: 40,
    height: 40,
    borderRadius: 1.5,
    background: 'linear-gradient(122deg, #35558A 4.67%, #3498DB 85.99%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
};

const iconStyle = {
    color: '#fff',
    fontSize: 20
};

const paymentTypeStyle = (theme: any) => ({
    fontWeight: 500,
    color: theme.palette.text.primary,
    fontSize: '18px',
    mb: 0.4,
    fontFamily: 'Poppins'
});

const dateContainerStyle = {
    mb: 0.8
};

const dateLabelStyle = (theme: any) => ({
    color: theme.palette.text.secondary,
    fontSize: '12px',
    fontWeight: 500,
    display: 'block',
    lineHeight: 1.2,
    fontFamily: 'Poppins'
});

const dateValueStyle = (theme: any) => ({
    color: theme.palette.text.secondary,
    fontSize: '12px',
    display: 'block',
    fontWeight: 500,
    fontFamily: 'Poppins'
});

const timeStyle = {
    color: '#E8381E'
};

const rightSectionStyle = {
    textAlign: 'right'
};

const amountStyle = (theme: any) => ({
    fontWeight: 600,
    color: theme.palette.primary.main,
    fontSize: '20px',
    mb: 1,
    fontFamily: 'Poppins'
});

const dividerStyle = (theme: any) => ({
    borderBottom: `1px dashed ${theme.palette.divider}`,
    mx: 0,
    mb: 1
});

// Profile screen jaisa topContainerStyle function
const topContainerStyle = (mode: string) => {
    return {
        background: mode === "light" ? "linear-gradient(to right, #35558a, #3487c7)" : secondary,
        pt: '20px',
        pb: '40px'
    }
}