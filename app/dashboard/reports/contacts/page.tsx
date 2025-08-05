'use client'
import React, { useState } from 'react'
import { Box, Container, useTheme, IconButton, Typography, Card, CardContent, Avatar, Rating, Button } from '@mui/material'
import { lineClampStyle, whiteIconButtonStyle } from '@/themes/styles';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useRouter } from 'next/navigation';
import languageStore from '@/zustand/languageStore';
import ReviewModal from './components/ReviewModal';
import { secondary } from '@/utils/colors';

const Contacts = () => {
    const theme = useTheme();
    const mode = theme.palette.mode;
    const router = useRouter()
    const { getLabels } = languageStore()
    const Labels = getLabels('Menu') as any
    const MapContactLabels = getLabels('Map_Contact') as any
    const ReviewLabels = getLabels('Review') as any
    const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

    // Contact data - बाद में API से आएगा
    const contactData = {
        phone: "7893647851",
        email: "cps.1974+P127@gmail.com",
        address: "Sukhlia Indore Madhya Pradesh"
    };

    const handleReviewConfirm = (data: any) => {
        console.log('Review data:', data);
        setIsReviewModalOpen(false);
    };

    return (
        <>
            <Box sx={{ minHeight: '100vh' }}>
                {/* Header */}
                <Box sx={topContainerStyle(mode)}>
                    <Container fixed>
                        <IconButton onClick={() => router.push("/dashboard/profile")} >
                            <KeyboardArrowLeftIcon sx={{ color: "#fff" }} />
                        </IconButton>
                    </Container>
                </Box>

                {/* Profile Image Section */}
                <Box display="flex" justifyContent="center" alignItems="center" mt='-70px' flexDirection="column">
                    <Box display="flex" alignItems="flex-end">
                        <Avatar src='/assets/avatar.png' alt='user' style={{ width: '130px', height: '130px', border: "2px solid #fff" }} />
                        <IconButton sx={{ ml: '-40px', zIndex: '10' }}>
                            <img src="/icons/edit-new.svg" alt="" />
                        </IconButton>
                    </Box>
                    <Typography variant="body1" color="primary" fontWeight={700} mt='10px' >
                        John Doe
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                        <Rating value={3.5} precision={0.5} readOnly size="small" />
                        <Typography variant="body2" color="text.secondary">
                            3.5
                        </Typography>
                    </Box>

                    {/* Review Button */}
                    <Button
                        variant="contained"
                        fullWidth
                        onClick={() => setIsReviewModalOpen(true)}
                        sx={{
                            mt: 2,
                            mb: 3,
                            background: 'linear-gradient(180deg, #3498DB 0%, #35558A 100%)',
                            color: '#FFFFFF',
                            fontFamily: 'Poppins',
                            py: 1.5,
                            borderRadius: 3,
                            fontWeight: 500,
                            fontSize: '14px',
                            textTransform: 'none',
                            maxWidth: '300px',
                            '&:hover': {
                                background: 'linear-gradient(180deg, #3498DB 0%, #35558A 100%)',
                            },
                        }}
                    >
                        {ReviewLabels?.btn_insert_review || 'Insert a review (max 500 chars)'}
                    </Button>

                </Box>

                {/* Content */}
                <Container fixed>
                    {/* Contact Details Section */}
                    <Box sx={{ mb: 4 }}>
                        <Typography variant="h6" sx={{
                            mb: 3,
                            fontFamily: 'Poppins',
                            fontWeight: 600,
                            color: 'text.primary',
                            fontSize: '18px',
                            textAlign: 'left'
                        }}>
                            {MapContactLabels?.lbl_contact_detail || 'Contact Details'}
                        </Typography>

                        {/* Phone */}
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                         
                            py: 1
                        }}>
                            <Box sx={{
                                width: 40,
                                height: 40,
                                borderRadius: '50%',
                                background: 'linear-gradient(122deg, #35558A 4.67%, #3498DB 85.99%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0
                            }}>
                                <PhoneIcon sx={{ color: '#fff', fontSize: 20 }} />
                            </Box>
                            <Typography variant="body1" sx={{
                                fontWeight: 500,
                                color: 'text.primary',
                                fontSize: '16px',
                                fontFamily: 'Poppins'
                            }}>
                                {contactData.phone}
                            </Typography>
                        </Box>

                        {/* Email */}
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                          
                            py: 1
                        }}>
                            <Box sx={{
                                width: 40,
                                height: 40,
                                borderRadius: '50%',
                                background: 'linear-gradient(122deg, #35558A 4.67%, #3498DB 85.99%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0
                            }}>
                                <EmailIcon sx={{ color: '#fff', fontSize: 20 }} />
                            </Box>
                            <Typography variant="body1" sx={{
                                fontWeight: 500,
                                color: 'text.primary',
                                fontSize: '16px',
                                fontFamily: 'Poppins'
                            }}>
                                {contactData.email}
                            </Typography>
                        </Box>

                        {/* Location */}
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            mb: 3,
                            py: 1
                        }}>
                            <Box sx={{
                                width: 40,
                                height: 40,
                                borderRadius: '50%',
                                background: 'linear-gradient(122deg, #35558A 4.67%, #3498DB 85.99%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0
                            }}>
                                <LocationOnIcon sx={{ color: '#fff', fontSize: 20 }} />
                            </Box>
                            <Typography variant="body1" sx={{
                                fontWeight: 500,
                                color: 'text.primary',
                                fontSize: '16px',
                                fontFamily: 'Poppins'
                            }}>
                                {contactData.address}
                            </Typography>
                        </Box>

                        {/* Dashed Line Separator */}
                        <Box sx={{
                            width: '100%',
                            height: '1px',
                            border: mode === 'light' ? '1px dashed #8F8EA4' : '1px dashed #4B5563',
                            mb: 3,
                            opacity: 1
                        }} />
                    </Box>

                    {/* Other Information Section */}
                    <Box>
                        <Typography variant="h6" sx={{
                            mb: 3,
                            fontFamily: 'Poppins',
                            fontWeight: 600,
                            color: 'text.primary',
                            fontSize: '18px',
                            textAlign: 'left'
                        }}>
                            {MapContactLabels?.lbl_otherinfo || 'Other Information'}
                        </Typography>

                        {/* Business Card Container - Updated Layout */}
                        <Box sx={{
                            width: '100%',
                            maxWidth: '382px',
                            position: 'relative',
                            mb: 3
                        }}>
                            {/* Blue Header Card - Only top portion */}
                            <Box sx={{
                                width: '100%',
                                height: '120px',
                                background: 'linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)',
                                borderRadius: '16px 16px 0 0',
                                position: 'relative',
                                boxShadow: '0 4px 16px rgba(74, 144, 226, 0.2)',
                            }}>
                                {/* Business Card Image - Positioned in blue section */}
                                <Box sx={{
                                    position: 'absolute',
                                    top: '20px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: '200px',
                                    height: '120px',
                                    zIndex: 10,
                                    '& img': {
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        borderRadius: '8px'
                                    }
                                }}>
                                    <img src="/assets/businessCard.png" alt="Business Card" />
                                </Box>
                            </Box>

                            {/* White Details Card - Bottom portion */}
                            <Box sx={{
                                backgroundColor: mode === 'light' ? '#FFFFFF' : 'background.paper',
                                borderRadius: '16px 16px 16px 16px',
                                padding: '80px 24px 24px 24px', // Extra top padding for card overlap
                                border: mode === 'light' ? '1px solid #C6C6CE' : '1px solid #3B3B3B',
                                marginTop: '-40px', // Overlap to show rounded corners on top
                            }}>
                                {/* Details List */}
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '16px'
                                }}>
                                    <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        paddingBottom: '8px'
                                    }}>
                                        <Typography sx={{
                                            color: 'text.secondary',
                                            fontWeight: 500,
                                            fontSize: '14px',
                                            fontFamily: 'Poppins'
                                        }}>
                                            Name:
                                        </Typography>
                                        <Typography sx={{
                                            color: 'text.primary',
                                            fontWeight: 500,
                                            fontSize: '15px',
                                            fontFamily: 'Poppins'
                                        }}>
                                            John Doe
                                        </Typography>
                                    </Box>

                                    <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        paddingBottom: '8px'
                                    }}>
                                        <Typography sx={{
                                            color: 'text.secondary',
                                            fontWeight: 500,
                                            fontSize: '14px',
                                            fontFamily: 'Poppins'
                                        }}>
                                            Specialty:
                                        </Typography>
                                        <Typography sx={{
                                            color: 'text.primary',
                                            fontWeight: 500,
                                            fontSize: '15px',
                                            fontFamily: 'Poppins'
                                        }}>
                                            Nephrology
                                        </Typography>
                                    </Box>

                                    <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        paddingBottom: '8px'
                                    }}>
                                        <Typography sx={{
                                            color: 'text.secondary',
                                            fontWeight: 500,
                                            fontSize: '14px',
                                            fontFamily: 'Poppins'
                                        }}>
                                            Language:
                                        </Typography>
                                        <Typography sx={{
                                            color: 'text.primary',
                                            fontWeight: 500,
                                            fontSize: '15px',
                                            fontFamily: 'Poppins'
                                        }}>
                                            Portuguese
                                        </Typography>
                                    </Box>

                                    <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        paddingBottom: '8px'
                                    }}>
                                        <Typography sx={{
                                            color: 'text.secondary',
                                            fontWeight: 500,
                                            fontSize: '14px',
                                            fontFamily: 'Poppins'
                                        }}>
                                            Price from:
                                        </Typography>
                                        <Typography sx={{
                                            color: 'text.primary',
                                            fontWeight: 500,
                                            fontSize: '15px',
                                            fontFamily: 'Poppins'
                                        }}>
                                            989898.0
                                        </Typography>
                                    </Box>

                                    <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}>
                                        <Typography sx={{
                                            color: 'text.secondary',
                                            fontWeight: 500,
                                            fontSize: '14px',
                                            fontFamily: 'Poppins'
                                        }}>
                                            Price to:
                                        </Typography>
                                        <Typography sx={{
                                            color: 'text.primary',
                                            fontWeight: 500,
                                            fontSize: '15px',
                                            fontFamily: 'Poppins'
                                        }}>
                                            Null
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* Review Modal */}
            <ReviewModal
                open={isReviewModalOpen}
                onClose={() => setIsReviewModalOpen(false)}
                onConfirm={handleReviewConfirm}
            />
        </>
    )
}

export default Contacts

const topContainerStyle = (mode: string) => {
    return {
        background: mode === "light" ? "linear-gradient(to right, #35558a, #3487c7)" : secondary,
        pt: '20px',
        pb: '40px'
    }
}