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
import { all } from 'axios';

// Style objects following the rules
const headerStyles = (mode: string) => ({
    background: mode === "light" ? "linear-gradient(to right, #35558a, #3487c7)" : secondary,
    paddingTop: '20px',
    paddingBottom: '40px'
});

const backButtonStyles = {
    color: '#fff',
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)'
    }
};

const profileSectionStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '-70px',
    flexDirection: 'column'
};

const avatarContainerStyles = {
    display: 'flex',
    alignItems: 'flex-end'
};

const avatarStyles = {
    width: '130px',
    height: '130px',
    border: '2px solid #fff'
};

const editButtonStyles = {
    marginLeft: '-40px',
    zIndex: '10'
};

const nameStyles = {
    marginTop: '10px',
    fontWeight: 700
};

const ratingContainerStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    marginTop: 1
};

const reviewButtonStyles = (mode: string) => ({
    marginTop: 2,
    marginBottom: 3,
    background: mode === 'light' ? '#E7EAEE' : '#2a2a2a',
    color: mode === 'light' ? '#494869' : '#ffffff',
    fontFamily: 'Poppins',
    padding: '12px 16px',
    borderRadius: 1,
    fontWeight: 500,
    fontSize: '14px',
    textTransform: 'none',
    maxWidth: '300px',
    transition: 'background 0.3s ease, color 0.3s ease',
    '&:hover': {
        background: 'linear-gradient(180deg, #3498DB 0%, #35558A 100%)',
        color: '#FFFFFF',
    },
});

const sectionTitleStyles = (mode: string) => ({
    marginBottom: 3,
    fontFamily: 'Poppins',
    fontWeight: 600,
    color: mode === 'light' ? '#0E0D39' : '#ffffff',
    fontSize: '18px',
    textAlign: 'left'
});

const contactItemStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: 2,
    paddingY: 1
};

const iconContainerStyles = {
    width: 40,
    height: 40,
    borderRadius: '50%',
    background: 'linear-gradient(122deg, #35558A 4.67%, #3498DB 85.99%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
};

const iconStyles = {
    color: '#fff',
    fontSize: 20
};

const contactTextStyles = (mode: string) => ({
    fontWeight: 500,
    color: mode === 'light' ? '#0E0D39' : '#ffffff',
    fontSize: '16px',
    fontFamily: 'Poppins'
});

const separatorStyles = (mode: string) => ({
    width: '100%',
    height: '1px',
    border: mode === 'light' ? '1px dashed #8F8EA4' : '1px dashed #4B5563',
    marginBottom: 3,
    opacity: 1
});

const businessCardContainerStyles = {
    width: '100%',
    maxWidth: '382px',
    position: 'relative',
    marginBottom: 3
};

const blueHeaderCardStyles = {
    width: '100%',
    height: '140px',
    background: 'linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)',
    borderRadius: '16px 16px 0 0',
    position: 'relative',
    boxShadow: '0 4px 16px rgba(74, 144, 226, 0.2)',
};

const businessCardImageStyles = {
    position: 'absolute',
    top: '15px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '280px',
    height: '160px',
    zIndex: 10,
    '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '12px'
    }
};

const detailsCardStyles = (mode: string) => ({
    backgroundColor: mode === 'light' ? '#FFFFFF' : secondary,
    borderRadius: '16px 16px 16px 16px',
    padding: '100px 24px 24px 24px',
    border: mode === 'light' ? '1px solid #C6C6CE' : '1px solid #3B3B3B',
    marginTop: '-20px',
    position: 'relative',
    zIndex: 1,
    boxShadow: '0 -2px 8px rgba(0, 0, 0, 0.1)',
});

const detailsListStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
};

const detailItemStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '8px'
};

const detailLabelStyles = (mode: string) => ({
    color: mode === 'light' ? '#494869' : '#cccccc',
    fontWeight: 500,
    fontSize: '14px',
    fontFamily: 'Poppins'
});

const detailValueStyles = (mode: string) => ({
    color: mode === 'light' ? '#0E0D39' : '#ffffff',
    fontWeight: 500,
    fontSize: '15px',
    fontFamily: 'Poppins'
});

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
            <Box sx={{
                minHeight: '100vh',
                backgroundColor: mode === 'light' ? 'background.default' : secondary
            }}>
                {/* Header */}
                <Box sx={headerStyles(mode)}>
                    <Container fixed>
                        <IconButton onClick={() => router.push("/dashboard/profile")} sx={backButtonStyles}>
                            <KeyboardArrowLeftIcon />
                        </IconButton>
                    </Container>
                </Box>

                {/* Profile Image Section */}
                <Box sx={profileSectionStyles}>
                    <Box sx={avatarContainerStyles}>
                        <Avatar src='/assets/avatar.png' alt='user' sx={avatarStyles} />
                        <IconButton sx={editButtonStyles}>
                            <img src="/icons/edit-new.svg" alt="" />
                        </IconButton>
                    </Box>
                    <Typography variant="body1"  color="text.primary" fontWeight={700} sx={nameStyles}>
                        John Doe
                    </Typography>
                    <Box sx={ratingContainerStyles}>
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
                        sx={reviewButtonStyles(mode)}
                    >
                        {ReviewLabels?.btn_insert_review || 'Insert a review (max 500 chars)'}
                    </Button>
                </Box>

                {/* Content */}
                <Container fixed>
                    {/* Contact Details Section */}
                    <Box sx={{ mb: 4 }}>
                        <Typography variant="h6" sx={sectionTitleStyles(mode)}>
                            {MapContactLabels?.lbl_contact_detail || 'Contact Details'}
                        </Typography>

                        {/* Phone */}
                        <Box sx={contactItemStyles}>
                            <Box sx={iconContainerStyles}>
                                <PhoneIcon sx={iconStyles} />
                            </Box>
                            <Typography variant="body1" sx={contactTextStyles(mode)}>
                                {contactData.phone}
                            </Typography>
                        </Box>

                        {/* Email */}
                        <Box sx={contactItemStyles}>
                            <Box sx={iconContainerStyles}>
                                <EmailIcon sx={iconStyles} />
                            </Box>
                            <Typography variant="body1" sx={contactTextStyles(mode)}>
                                {contactData.email}
                            </Typography>
                        </Box>

                        {/* Location */}
                        <Box sx={{ ...contactItemStyles, marginBottom: 3 }}>
                            <Box sx={iconContainerStyles}>
                                <LocationOnIcon sx={iconStyles} />
                            </Box>
                            <Typography variant="body1" sx={contactTextStyles(mode)}>
                                {contactData.address}
                            </Typography>
                        </Box>

                        {/* Dashed Line Separator */}
                        <Box sx={separatorStyles(mode)} />
                    </Box>

                    {/* Other Information Section */}
                    <Box>
                        <Typography variant="h6" sx={sectionTitleStyles(mode)}>
                            {MapContactLabels?.lbl_otherinfo || 'Other Information'}
                        </Typography>

                        {/* Business Card Container - Updated Layout */}
                        <Box sx={businessCardContainerStyles}>
                            {/* Blue Header Card - Only top portion */}
                            <Box sx={blueHeaderCardStyles}>
                                {/* Business Card Image - Positioned in blue section with increased size */}
                                <Box sx={businessCardImageStyles}>
                                    <img src="/assets/businessCard.png" alt="Business Card" />
                                </Box>
                            </Box>

                            {/* White Details Card - Bottom portion with rounded top corners */}
                            <Box sx={detailsCardStyles(mode)}>
                                {/* Details List */}
                                <Box sx={detailsListStyles}>
                                    <Box sx={detailItemStyles}>
                                        <Typography sx={detailLabelStyles(mode)}>
                                            Name:
                                        </Typography>
                                        <Typography sx={detailValueStyles(mode)}>
                                            John Doe
                                        </Typography>
                                    </Box>

                                    <Box sx={detailItemStyles}>
                                        <Typography sx={detailLabelStyles(mode)}>
                                            Specialty:
                                        </Typography>
                                        <Typography sx={detailValueStyles(mode)}>
                                            Nephrology
                                        </Typography>
                                    </Box>

                                    <Box sx={detailItemStyles}>
                                        <Typography sx={detailLabelStyles(mode)}>
                                            Language:
                                        </Typography>
                                        <Typography sx={detailValueStyles(mode)}>
                                            Portuguese
                                        </Typography>
                                    </Box>

                                    <Box sx={detailItemStyles}>
                                        <Typography sx={detailLabelStyles(mode)}>
                                            Price from:
                                        </Typography>
                                        <Typography sx={detailValueStyles(mode)}>
                                            989898.0
                                        </Typography>
                                    </Box>

                                    <Box sx={detailItemStyles}>
                                        <Typography sx={detailLabelStyles(mode)}>
                                            Price to:
                                        </Typography>
                                        <Typography sx={detailValueStyles(mode)}>
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