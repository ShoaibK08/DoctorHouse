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
import { profileTopContainerStyle, whiteIconButtonStyle } from '@/themes/styles';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import QrCodeIcon from '@mui/icons-material/QrCode';
import { useRouter } from 'next/navigation';
import languageStore from '@/zustand/languageStore';
import { secondary } from '@/utils/colors';

// CSS objects for styling
const rootStyles = (theme: any, mode: string) => ({
    minHeight: '100vh',
    backgroundColor: mode === 'dark' ? secondary : theme.palette.background.default,
    position: 'relative',
    zIndex: 1,
    width: '100%',
    maxWidth: '100%'
});

const contentContainerStyles = (theme: any, mode: string) => ({
    pt: 3,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    zIndex: 2,
    pb: 4,
    px: 2,
    borderRadius: 3,
    boxShadow: mode === 'dark' ? '0 2px 8px #181A20' : '0 2px 8px #e3e3e3',
});

const voucherInputBoxStyles = {
    mb: 5
};

const voucherLabelStyles = (theme: any) => ({
    fontWeight: 600,
    fontSize: '14px',
    color: theme.palette.text.primary,
    mb: 2,
    fontFamily: 'Poppins'
});

const voucherInputStyles = (theme: any) => ({
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
        color: theme.palette.mode === 'dark' ? '#a0aec0' : '#8F8EA4',
        opacity: 1
    }
});

const separatorRowStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    my: '25px',
    mb: 8
};

const separatorLineStyles = (theme: any) => ({
    flex: 1,
    height: '0px',
    borderTop: `1px dashed ${theme.palette.divider}`,
    background: 'transparent',
});

const separatorTextStyles = (theme: any) => ({
    color: theme.palette.text.primary,
    fontWeight: 500,
    fontFamily: 'Poppins',
    fontSize: '15px',
    whiteSpace: 'nowrap'
});

const qrSectionStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mb: 8,
    position: 'relative'
};

const qrBoxStyles = (theme: any, mode: string) => ({
    width: 150,
    height: 150,
    borderRadius: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    background: mode === 'dark' ? '#23242a' : '#f5f7fa',
    border: `1.5px solid ${theme.palette.divider}`
});

const qrCornerStyles = (theme: any, pos: 'tl'|'tr'|'bl'|'br') => {
    const base = {
        position: 'absolute' as const,
        width: 20,
        height: 20,
    };
    const border = `3px solid ${theme.palette.primary.main}`;
    switch (pos) {
        case 'tl': return { ...base, top: -2, left: -2, borderTop: border, borderLeft: border };
        case 'tr': return { ...base, top: -2, right: -2, borderTop: border, borderRight: border };
        case 'bl': return { ...base, bottom: -2, left: -2, borderBottom: border, borderLeft: border };
        case 'br': return { ...base, bottom: -2, right: -2, borderBottom: border, borderRight: border };
    }
};

const cardStyles = (theme: any) => ({
    mb: 3,
    borderRadius: 3,
    border: `1px solid ${theme.palette.primary.main}`,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.palette.mode === 'dark' ? '0 2px 8px #181A20' : '0 2px 8px #e3e3e3',
});

const paymentOptionLabelStyles = (theme: any) => ({
    fontWeight: 600,
    fontSize: '16px',
    color: theme.palette.text.primary,
    fontFamily: 'Poppins',
});

const radioStyles = (theme: any) => ({
    color: theme.palette.primary.main,
    '&.Mui-checked': { color: theme.palette.primary.main }
});

const submitButtonStyles = (theme: any) => ({
    background: 'linear-gradient(122deg, #35558A 4.67%, #3498DB 85.99%)',
    color: '#FFFFFF',
    fontFamily: 'Poppins',
    py: 1.8,
    borderRadius: 3,
    fontWeight: 500,
    fontSize: '16px',
    textTransform: 'none',
    boxShadow: 'none',
    '&:hover': {
        background: 'linear-gradient(122deg, #35558A 4.67%, #3498DB 85.99%)',
        boxShadow: 'none'
    }
});

const Voucher: React.FC = () => {
    const theme = useTheme();
    const mode = theme.palette.mode;
    const router = useRouter();
    const { getLabels } = languageStore();
    const Labels = getLabels('Menu') as any;
    const PaymentsLabels = getLabels('Payments') as any;
    const CommonLabels = getLabels('Common') as any;

    const [voucherCode, setVoucherCode] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('daily');
    const [showPaymentOptions, setShowPaymentOptions] = useState(false);

    const handleVoucherSubmit = () => {
        setShowPaymentOptions(true);
    };

    const handlePaymentMethodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPaymentMethod(event.target.value);
    };

    const handleSubmit = () => {
        if (paymentMethod === 'daily') {
            router.push('/dashboard/payment');
        } else {
            // Handle voucher payment
        }
    };

    return (
        <Box sx={rootStyles(theme, mode)}>
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
            <Container fixed sx={contentContainerStyles(theme, mode)}>
                {!showPaymentOptions ? (
                    // Voucher Input and QR Scanner Screen
                    <>
                        {/* Voucher Input */}
                        <Box sx={voucherInputBoxStyles}>
                            <Typography variant="h6" sx={voucherLabelStyles(theme)}>
                                Voucher
                            </Typography>
                            <TextField
                                fullWidth
                                placeholder="Enter"
                                value={voucherCode}
                                onChange={(e) => setVoucherCode(e.target.value)}
                                sx={voucherInputStyles(theme)}
                            />
                        </Box>

                        {/* Separator */}
                        <Box sx={separatorRowStyles}>
                            <Box sx={separatorLineStyles(theme)} />
                            <Typography variant="body2" sx={separatorTextStyles(theme)}>Or</Typography>
                            <Box sx={separatorLineStyles(theme)} />
                        </Box>

                        {/* QR Code Scanner */}
                        <Box sx={qrSectionStyles}>
                            <Box sx={qrBoxStyles(theme, mode)}>
                                <Box sx={qrCornerStyles(theme, 'tl')} />
                                <Box sx={qrCornerStyles(theme, 'tr')} />
                                <Box sx={qrCornerStyles(theme, 'bl')} />
                                <Box sx={qrCornerStyles(theme, 'br')} />
                                <img src="/assets/QR.png"/>
                            </Box>
                        </Box>

                        {/* Pay by Voucher Button */}
                        <Button
                            variant="contained"
                            fullWidth
                            onClick={handleVoucherSubmit}
                            sx={submitButtonStyles(theme)}
                        >
                            Pay by voucher
                        </Button>
                    </>
                ) : (
                    // Payment Options Screen
                    <>
                        <Card sx={cardStyles(theme)}>
                            <CardContent sx={{ p: 3 }}>
                                <FormControl component="fieldset" sx={{ width: '100%' }}>
                                    <RadioGroup
                                        value={paymentMethod}
                                        onChange={handlePaymentMethodChange}
                                    >
                                        <FormControlLabel
                                            value="daily"
                                            control={<Radio sx={radioStyles(theme)} />}
                                            label={
                                                <Typography sx={paymentOptionLabelStyles(theme)}>
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
                                            background: theme.palette.divider, 
                                            borderStyle: 'dotted',
                                            my: 1
                                        }} />
                                        <FormControlLabel
                                            value="voucher"
                                            control={<Radio sx={radioStyles(theme)} />}
                                            label={
                                                <Typography sx={paymentOptionLabelStyles(theme)}>
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
                            sx={submitButtonStyles(theme)}
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