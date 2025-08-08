'use client'
import React, { useState } from 'react'
import { Box, Container, useTheme, IconButton, Typography, Avatar, Rating, Button } from '@mui/material'
import { lineClampStyle } from '@/themes/styles';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useRouter } from 'next/navigation';
import languageStore from '@/zustand/languageStore';
import ReviewModal from './components/ReviewModal';
import { secondary } from '@/utils/colors';

interface ContactData {
    phone: string;
    email: string;
    address: string;
}

interface ReviewData {
    rating: number;
    comment: string;
}

const Contacts = () => {
    const theme = useTheme();
    const mode = theme.palette.mode;
    const router = useRouter()
    const { getLabels } = languageStore()
    const Labels = getLabels('Menu') as any
    const MapContactLabels = getLabels('Map_Contact') as any
    const ReviewLabels = getLabels('Review') as any
    const [isReviewModalOpen, setIsReviewModalOpen] = useState<boolean>(false);

    // Contact data - बाद में API से आएगा
    const contactData: ContactData = {
        phone: "7893647851",
        email: "cps.1974+P127@gmail.com",
        address: "Sukhlia Indore Madhya Pradesh"
    };

    const handleReviewConfirm = (data: ReviewData) => {
        console.log('Review data:', data);
        setIsReviewModalOpen(false);
    };

    return (
        <>
            <Box sx={mainContainerStyle}>
                {/* Header - Same as Profile */}
                <Box sx={topContainerStyle(mode)}>
                    <Container fixed>
                        <IconButton onClick={() => router.push("/dashboard/profile")}>
                            <KeyboardArrowLeftIcon sx={backIconStyle} />
                        </IconButton>
                    </Container>
                </Box>

                {/* Profile Image Section - Same as Profile */}
                <Box sx={profileSectionStyle}>
                    <Box sx={avatarContainerStyle}>
                        <Avatar src='/assets/avatar.png' alt='user' sx={avatarStyle} />
                        <IconButton sx={editIconButtonStyle}>
                            <img src="/icons/edit-new.svg" alt="" />
                        </IconButton>
                    </Box>
                    <Typography variant="body1" sx={userNameStyle}>
                        John Doe
                    </Typography>
                    <Box sx={ratingContainerStyle}>
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
                        sx={reviewButtonStyle(mode)}
                    >
                        {ReviewLabels?.btn_insert_review || 'Insert a review (max 500 chars)'}
                    </Button>
                </Box>
                <br />

                {/* Content - Same container style as Profile */}
                <Container fixed>
                    {/* Contact Details Section */}
                    <Box sx={contactSectionStyle}>
                        <Typography variant="h6" sx={sectionTitleStyle}>
                            {MapContactLabels?.lbl_contact_detail || 'Contact Details'}
                        </Typography>

                        {/* Phone */}
                        <Box sx={contactItemStyle}>
                            <Box sx={contactIconContainerStyle}>
                                <PhoneIcon sx={contactIconStyle} />
                            </Box>
                            <Typography variant="body1" sx={contactTextStyle}>
                                {contactData.phone}
                            </Typography>
                        </Box>

                        {/* Email */}
                        <Box sx={contactItemStyle}>
                            <Box sx={contactIconContainerStyle}>
                                <EmailIcon sx={contactIconStyle} />
                            </Box>
                            <Typography variant="body1" sx={contactTextStyle}>
                                {contactData.email}
                            </Typography>
                        </Box>

                        {/* Location */}
                        <Box sx={locationItemStyle}>
                            <Box sx={contactIconContainerStyle}>
                                <LocationOnIcon sx={contactIconStyle} />
                            </Box>
                            <Typography variant="body1" sx={contactTextStyle}>
                                {contactData.address}
                            </Typography>
                        </Box>

                        {/* Dashed Line Separator */}
                        <Box sx={separatorLineStyle(mode)} />
                    </Box>

                    {/* Other Information Section */}
                    <Box>
                        <Typography variant="h6" sx={sectionTitleStyle}>
                            {MapContactLabels?.lbl_otherinfo || 'Other Information'}
                        </Typography>

                        {/* Business Card Container */}
                        <Box sx={businessCardContainerStyle}>
                            {/* Blue Header Card */}
                            <Box sx={blueHeaderCardStyle}>
                                {/* Business Card Image */}
                                <Box sx={businessCardImageContainerStyle}>
                                    <img src="/assets/businessCard.png" alt="Business Card" style={businessCardImageStyle} />
                                </Box>
                            </Box>

                            {/* White Details Card */}
                            <Box sx={detailsCardStyle(theme, mode)}>
                                {/* Details List */}
                                <Box sx={detailsListStyle}>
                                    <Box sx={detailItemStyle}>
                                        <Typography sx={detailLabelStyle}>
                                            Name:
                                        </Typography>
                                        <Typography sx={detailValueStyle}>
                                            John Doe
                                        </Typography>
                                    </Box>

                                    <Box sx={detailItemStyle}>
                                        <Typography sx={detailLabelStyle}>
                                            Specialty:
                                        </Typography>
                                        <Typography sx={detailValueStyle}>
                                            Nephrology
                                        </Typography>
                                    </Box>

                                    <Box sx={detailItemStyle}>
                                        <Typography sx={detailLabelStyle}>
                                            Language:
                                        </Typography>
                                        <Typography sx={detailValueStyle}>
                                            Portuguese
                                        </Typography>
                                    </Box>

                                    <Box sx={detailItemStyle}>
                                        <Typography sx={detailLabelStyle}>
                                            Price from:
                                        </Typography>
                                        <Typography sx={detailValueStyle}>
                                            989898.0
                                        </Typography>
                                    </Box>

                                    <Box sx={detailItemStyle}>
                                        <Typography sx={detailLabelStyle}>
                                            Price to:
                                        </Typography>
                                        <Typography sx={detailValueStyle}>
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

// CSS Object Styles
const mainContainerStyle = {
    minHeight: '100vh'
};

const backIconStyle = {
    color: "#fff"
};

const profileSectionStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    mt: '-70px',
    flexDirection: 'column'
};

const avatarContainerStyle = {
    display: 'flex',
    alignItems: 'flex-end'
};

const avatarStyle = {
    width: '130px',
    height: '130px',
    border: "2px solid #fff"
};

const editIconButtonStyle = {
    ml: '-40px',
    zIndex: '10'
};

const userNameStyle = {
    color: 'text.primary',
    fontWeight: 700,
    mt: '10px'
};

const ratingContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    marginTop: 1
};

const reviewButtonStyle = (mode: string) => ({
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

const contactSectionStyle = {
    mb: 4
};

const sectionTitleStyle = {
    marginBottom: 3,
    fontFamily: 'Poppins',
    fontWeight: 600,
    color: 'text.primary',
    fontSize: '18px',
    textAlign: 'left'
};

const contactItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: 2,
    paddingY: 1
};

const locationItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: 2,
    paddingY: 1,
    marginBottom: 3
};

const contactIconContainerStyle = {
    width: 40,
    height: 40,
    borderRadius: '50%',
    background: 'linear-gradient(122deg, #35558A 4.67%, #3498DB 85.99%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
};

const contactIconStyle = {
    color: '#fff',
    fontSize: 20
};

const contactTextStyle = {
    fontWeight: 500,
    color: 'text.primary',
    fontSize: '16px',
    fontFamily: 'Poppins'
};

const separatorLineStyle = (mode: string) => ({
    width: '100%',
    height: '1px',
    border: mode === 'light' ? '1px dashed #8F8EA4' : '1px dashed #4B5563',
    marginBottom: 3,
    opacity: 1
});

const businessCardContainerStyle = {
    width: '100%',
    maxWidth: '382px',
    position: 'relative',
    marginBottom: 3
};

const blueHeaderCardStyle = {
    width: '100%',
    height: '140px',
    background: 'linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)',
    borderRadius: '16px 16px 0 0',
    position: 'relative',
    boxShadow: '0 4px 16px rgba(74, 144, 226, 0.2)',
};

const businessCardImageContainerStyle = {
    position: 'absolute',
    top: '15px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '280px',
    height: '160px',
    zIndex: 10,
};

const businessCardImageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
    borderRadius: '12px'
};

const detailsCardStyle = (theme: any, mode: string) => ({
    backgroundColor: theme.palette.background.paper,
    borderRadius: '16px 16px 16px 16px',
    padding: '100px 24px 24px 24px',
    border: mode === 'light' ? '1px solid #C6C6CE' : '1px solid #3B3B3B',
    marginTop: '-20px',
    position: 'relative',
    zIndex: 1,
    boxShadow: '0 -2px 8px rgba(0, 0, 0, 0.1)',
});

const detailsListStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
};

const detailItemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '8px'
};

const detailLabelStyle = {
    color: 'text.secondary',
    fontWeight: 500,
    fontSize: '14px',
    fontFamily: 'Poppins'
};

const detailValueStyle = {
    color: 'text.primary',
    fontWeight: 500,
    fontSize: '15px',
    fontFamily: 'Poppins'
};

// Profile screen jaisa topContainerStyle function
const topContainerStyle = (mode: string) => {
    return {
        background: mode === "light" ? "linear-gradient(to right, #35558a, #3487c7)" : secondary,
        pt: '20px',
        pb: '40px'
    }
}