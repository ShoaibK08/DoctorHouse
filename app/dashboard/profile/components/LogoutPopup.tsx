'use client'
import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Typography,
    Box
} from '@mui/material';
import { useRouter } from 'next/navigation';

interface LogoutPopupProps {
    open: boolean;
    onClose: () => void;
}

const LogoutPopup: React.FC<LogoutPopupProps> = ({ open, onClose }) => {
    const router = useRouter();

    const handleLogout = () => {
        // Close the popup
        onClose();
        // Navigate to home page
        router.push('/');
    };

    return (
        <Dialog
            open={open}
            onClose={onClose}
            PaperProps={{
                sx: {
                    borderRadius: '12px',
                    minWidth: '300px',
                    maxWidth: '400px'
                }
            }}
        >
            <DialogTitle sx={{ pb: 1 }}>
                <Typography variant="h6" fontWeight="bold">
                    Log Out
                </Typography>
            </DialogTitle>
            <DialogContent sx={{ pb: 2 }}>
                <Typography variant="body1" color="text.secondary">
                    Are you sure you want to logout?
                </Typography>
            </DialogContent>
            <DialogActions sx={{ px: 3, pb: 3, gap: 1 }}>
                <Button
                    onClick={onClose}
                    variant="outlined"
                    sx={{
                        borderColor: '#3487c7',
                        color: '#3487c7',
                        '&:hover': {
                            borderColor: '#3487c7',
                            backgroundColor: 'rgba(52, 135, 199, 0.04)'
                        }
                    }}
                >
                    Cancel
                </Button>
                <Button
                    onClick={handleLogout}
                    variant="contained"
                    sx={{
                        backgroundColor: '#3487c7',
                        '&:hover': {
                            backgroundColor: '#2a6ba8'
                        }
                    }}
                >
                    Ok
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default LogoutPopup; 