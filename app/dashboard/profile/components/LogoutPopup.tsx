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
                    maxWidth: '400px',
                    backgroundColor:'#FFFFFF'
                }
            }}
        >
            <DialogTitle sx={{ pb: 1 }}>
                <Typography variant="h6" sx={{color:'#0E0D39',fontSize:'20px',fontFamily:'Poppins',fontWeight:600,textAlign:'center'}}>
                    Log Out
                </Typography>
            </DialogTitle>
            <DialogContent sx={{ pb: 2 }}>
                <Typography variant="body1" sx={{color:'#494869',fontSize:'16px',fontFamily:'Poppins',fontWeight:400}}>
                    Are you sure you want to logout?
                </Typography>
            </DialogContent>
            <DialogActions sx={{ 
                px: 3, 
                pb: 3, 
                gap: 1, 
                display:'flex', 
                justifyContent:'center',
                alignItems:'center' 
            }}>
                <Button
                    onClick={onClose}
                    variant="outlined"
                    sx={{
                        borderColor: '#35558A',
                        color: '#35558A',
                        width: '100px',
                        height: '40px',
                        fontSize:'15px',
                        fontWeight:500,
                        fontFamily:'Poppins',
                        backgroundColor:'#3498DB17',
                        '&:hover': {
                            borderColor: '#35558A',
                            backgroundColor: '#3498DB17'
                        }
                    }}
                >
                    Cancel
                </Button>
                <Button
                    onClick={handleLogout}
                    variant="contained"
                    sx={{
                        background:'linear-gradient(122deg, #35558A 4.67%, #3498DB 85.99%)',
                        width: '100px',
                        height: '40px',
                        '&:hover': {
                            background:'linear-gradient(122deg, #35558A 4.67%, #3498DB 85.99%)',
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