'use client'
import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Typography,
    Box,
    useTheme
} from '@mui/material';
import { useRouter } from 'next/navigation';
import { secondary } from '@/utils/colors';
import languageStore from '@/zustand/languageStore';

interface LogoutPopupProps {
    open: boolean;
    onClose: () => void;
}

const LogoutPopup: React.FC<LogoutPopupProps> = ({ open, onClose }) => {
    const router = useRouter();
    const theme = useTheme();
    const mode = theme.palette.mode;

    // Get language labels
    const { getLabels } = languageStore();
    const Labels = getLabels('Menu') as any;
    const CommonLabels = getLabels('Common') as any;

    const handleLogout = () => {
        // Close the popup
        onClose();
        // Navigate to home page
        router.push('/');
    };

    // Style objects for better organization
    const dialogPaperStyles = {
        borderRadius: '12px',
        minWidth: '300px',
        maxWidth: '400px',
        backgroundColor: mode === 'light' ? '#FFFFFF' : secondary
    };

    const titleStyles = {
        color: mode === 'light' ? '#0E0D39' : '#ffffff',
        fontSize: '20px',
        fontFamily: 'Poppins',
        fontWeight: 600,
        textAlign: 'center'
    };

    const contentTextStyles = {
        color: mode === 'light' ? '#494869' : '#cccccc',
        fontSize: '16px',
        fontFamily: 'Poppins',
        fontWeight: 400,
        textAlign: 'center'
    };

    const cancelButtonStyles = {
        borderColor: mode === 'light' ? '#35558A' : '#6B7280',
        color: mode === 'light' ? '#35558A' : '#ffffff',
        width: '100px',
        height: '40px',
        fontSize: '15px',
        fontWeight: 500,
        fontFamily: 'Poppins',
        backgroundColor: mode === 'light' ? '#3498DB17' : 'rgba(107, 114, 128, 0.1)',
        textTransform: 'none',
        '&:hover': {
            borderColor: mode === 'light' ? '#35558A' : '#6B7280',
            backgroundColor: mode === 'light' ? '#3498DB17' : 'rgba(107, 114, 128, 0.2)'
        }
    };

    const confirmButtonStyles = {
        background: 'linear-gradient(122deg, #35558A 4.67%, #3498DB 85.99%)',
        width: '100px',
        height: '40px',
        fontSize: '15px',
        fontWeight: 500,
        fontFamily: 'Poppins',
        textTransform: 'none',
        color: '#FFFFFF',
        '&:hover': {
            background: 'linear-gradient(122deg, #2a6ba8 4.67%, #2a6ba8 85.99%)',
        }
    };

    return (
        <Dialog
            open={open}
            onClose={onClose}
            PaperProps={{
                sx: dialogPaperStyles
            }}
        >
            <DialogTitle sx={{ pb: 1 }}>
                <Typography variant="h6" sx={titleStyles}>
                    {Labels?.lbl_logout || 'Log Out'}
                </Typography>
            </DialogTitle>
            <DialogContent sx={{ pb: 2, px: 3 }}>
                <Typography variant="body1" sx={contentTextStyles}>
                    Are you sure you want to logout?
                </Typography>
            </DialogContent>
            <DialogActions sx={{ 
                px: 3, 
                pb: 3, 
                gap: 1, 
                display: 'flex', 
                justifyContent: 'center',
                alignItems: 'center' 
            }}>
                <Button
                    onClick={onClose}
                    variant="outlined"
                    sx={cancelButtonStyles}
                >
                    {CommonLabels?.lbl_cancel || 'Cancel'}
                </Button>
                <Button
                    onClick={handleLogout}
                    variant="contained"
                    sx={confirmButtonStyles}
                >
                    {CommonLabels?.lbl_ok || 'Ok'}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default LogoutPopup;