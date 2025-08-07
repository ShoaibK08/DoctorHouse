'use client'
import React from 'react';
import {
    Box,
    Typography,
    Avatar,
    IconButton,
    Button,
    Rating,
    useTheme,
} from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useRouter } from 'next/navigation';
import languageStore from '@/zustand/languageStore';

// Reusable style objects following COMPONENT_RULES.md
const containerStyles = (mode: string) => ({
    minHeight: '100vh',
    backgroundColor: mode === 'dark' ? '#121212' : '#FFFFFF',
});

const headerStyles = (mode: string) => ({
    background: mode === 'dark' 
        ? 'linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)'
        : 'linear-gradient(180deg, #3498DB 0%, #35558A 100%)',
    padding: '12px 16px',
    color: '#fff',
    position: 'relative' as const,
});

const backButtonStyles = {
    color: '#fff',
    padding: '8px',
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)'
    }
};

const headerTitleStyles = {
    fontWeight: 500, 
    fontSize: '20px',
    color: '#FFFFFF',
    fontFamily: 'Poppins'
};

const statusBarStyles = {
    position: 'absolute' as const,
    top: '8px',
    right: '16px',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    fontSize: '14px',
    fontWeight: 500,
    color: '#FFFFFF',
    fontFamily: 'Poppins'
};

const contentContainerStyles = (mode: string) => ({
    margin: '16px',
    marginBottom: '0px',
    padding: '20px',
    backgroundColor: mode === 'dark' ? '#1e1e1e' : '#FFFFFF',
    borderRadius: '12px',
    marginTop: '8px',
});

const doctorProfileStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '24px'
};

const doctorAvatarStyles = (mode: string) => ({
    width: '70px',
    height: '70px',
    borderRadius: '8px',
    border: mode === 'dark' ? '2px solid #3498DB' : '1px solid #3498DB',
    backgroundColor: mode === 'dark' ? '#2d3748' : '#f8f9fa'
});

const doctorNameStyles = (mode: string) => ({
    fontWeight: 600,
    color: mode === 'dark' ? '#ffffff' : '#0E0D39',
    fontSize: '18px',
    marginBottom: '4px',
    fontFamily: 'Poppins'
});

const doctorSpecialtyStyles = (mode: string) => ({
    color: mode === 'dark' ? '#a0aec0' : '#494869',
    fontSize: '14px',
    marginBottom: '8px',
    fontFamily: 'Poppins',
    fontWeight: 500
});

const ratingContainerStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
};

const ratingStyles = {
    '& .MuiRating-iconFilled': {
        color: '#FFD700',
    },
    '& .MuiRating-iconEmpty': {
        color: '#4a5568',
    }
};

const ratingTextStyles = (mode: string) => ({
    color: mode === 'dark' ? '#ffffff' : '#0E0D39',
    fontWeight: 600,
    fontSize: '18px',
    fontFamily: 'Poppins'
});

const reviewsCountStyles = (mode: string) => ({
    color: mode === 'dark' ? '#a0aec0' : '#494869',
    fontSize: '14px',
    fontFamily: 'Poppins',
    fontWeight: 400
});

const dashedDividerStyles = (mode: string) => ({
    height: '1px',
    backgroundImage: mode === 'dark' 
        ? 'repeating-linear-gradient(to right, #4a5568 0px, #4a5568 5px, transparent 5px, transparent 10px)'
        : 'repeating-linear-gradient(to right, #8F8EA4 0px, #8F8EA4 5px, transparent 5px, transparent 10px)',
    margin: '0 -20px 24px -20px'
});

const reviewsHeaderStyles = (mode: string) => ({
    fontWeight: 600,
    color: mode === 'dark' ? '#ffffff' : '#0E0D39',
    fontSize: '18px',
    marginBottom: '20px',
    fontFamily: 'Poppins'
});

const reviewItemStyles = {
    paddingY: '16px'
};

const reviewHeaderStyles = {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: '12px'
};

const reviewUserStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
};

const userAvatarStyles = (mode: string) => ({
    width: '40px',
    height: '40px',
    backgroundColor: mode === 'dark' ? '#2d3748' : '#f8f9fa'
});

const userNameStyles = (mode: string) => ({
    fontWeight: 600,
    fontFamily: 'Poppins',
    color: mode === 'dark' ? '#ffffff' : '#0E0D39',
    fontSize: '14px',
    marginBottom: '4px'
});

const reviewMetaStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '35px'
};

const reviewRatingStyles = {
    '& .MuiRating-iconFilled': {
        color: '#FFD700',
    },
    '& .MuiRating-iconEmpty': {
        color: '#4a5568',
    },
    '& .MuiRating-icon': {
        fontSize: '16px'
    }
};

const reviewRatingTextStyles = (mode: string) => ({
    color: mode === 'dark' ? '#ffffff' : '#0E0D39',
    fontWeight: 400,
    fontSize: '14px',
    fontFamily: 'Poppins'
});

const reviewDateStyles = (mode: string) => ({
    color: mode === 'dark' ? '#a0aec0' : '#0E0D39',
    fontSize: '12px',
    fontWeight: 400,
    fontFamily: 'Poppins'
});

const reviewTextStyles = (mode: string) => ({
    color: mode === 'dark' ? '#cbd5e0' : '#494869',
    fontSize: '14px',
    fontFamily: 'Poppins',
    fontWeight: 400,
    lineHeight: 1.5
});

const readMoreStyles = (mode: string) => ({
    color: mode === 'dark' ? '#63b3ed' : '#3498DB',
    fontSize: '15px',
    fontWeight: 500,
    fontFamily: 'Poppins',
    cursor: 'pointer',
    '&:hover': {
        textDecoration: 'underline'
    }
});

const solidDividerStyles = (mode: string) => ({
    height: '1px',
    backgroundColor: mode === 'dark' ? '#2d3748' : '#D8DADE',
    margin: '0 -20px'
});

const buttonContainerStyles = {
    padding: '16px',
    paddingTop: '20px'
};

const writeReviewButtonStyles = (mode: string) => ({
    background: mode === 'dark'
        ? 'linear-gradient(135deg, #3498DB 0%, #2980b9 100%)'
        : 'linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)',
    color: '#fff',
    padding: '14px 24px',
    borderRadius: '12px',
    textTransform: 'none' as const,
    fontSize: '16px',
    fontWeight: 600,
    boxShadow: mode === 'dark' 
        ? '0 4px 12px rgba(52, 152, 219, 0.3)'
        : '0 4px 12px rgba(74, 144, 226, 0.3)',
    '&:hover': {
        background: mode === 'dark'
            ? 'linear-gradient(135deg, #2980b9 0%, #1f5f8b 100%)'
            : 'linear-gradient(135deg, #357ABD 0%, #2a6ba8 100%)',
        boxShadow: mode === 'dark'
            ? '0 6px 16px rgba(52, 152, 219, 0.4)'
            : '0 6px 16px rgba(74, 144, 226, 0.4)'
    }
});

const ReviewsPage = () => {
    const theme = useTheme();
    const router = useRouter();
    const mode = theme.palette.mode;

    // Language labels - following ProfilePage pattern
    const { getLabels } = languageStore()
    const ReviewLabels = getLabels('Review') as any  // FormID 150
    const CommonLabels = getLabels('Common') as any  // FormID 9

    // Mock data
    const doctorData = {
        name: 'Dr. John Doe',
        specialty: 'Cardiologist',
        rating: 4.0,
        totalReviews: 12,
        avatar: '/assets/review1.png'
    };

    const reviews = [
        {
            id: 1,
            name: 'Kelsey Gould',
            avatar: '/assets/review2.png',
            rating: 5.0,
            date: '20 March, 2025',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitelit. Ut enim ad minim veniam...',
            fullText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            id: 2,
            name: 'George Bailey',
            avatar: '/assets/review3.png',
            rating: 4.0,
            date: '20 March, 2025',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitelit. Ut enim ad minim veniam...',
            fullText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
    ];

    const handleBack = () => {
        router.back();
    };

    const handleWriteReview = () => {
        console.log('Write review clicked');
    };

    const handleReadMore = (reviewId: number) => {
        console.log('Read more clicked for review:', reviewId);
    };

    return (
        <Box sx={containerStyles(mode)}>
            {/* Header */}
            <Box sx={headerStyles(mode)}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <IconButton 
                        onClick={handleBack} 
                        sx={backButtonStyles}
                    >
                        <KeyboardArrowLeftIcon sx={{ fontSize: '24px' }} />
                    </IconButton>
                    <Typography variant="h6" sx={headerTitleStyles}>
                        {ReviewLabels?.lbl_review || 'Reviews'}
                    </Typography>
                </Box>
                {/* Status bar simulation */}
                <Box sx={statusBarStyles}>
                    8:34
                </Box>
            </Box>

            {/* Content Container */}
            <Box sx={contentContainerStyles(mode)}>
                {/* Doctor Profile Section */}
                <Box sx={doctorProfileStyles}>
                    <Box sx={{ position: 'relative' }}>
                        <Avatar 
                            src={doctorData.avatar} 
                            alt={doctorData.name}
                            sx={doctorAvatarStyles(mode)}
                        />
                    </Box>
                    
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="h6" sx={doctorNameStyles(mode)}>
                            {doctorData.name}
                        </Typography>
                        <Typography variant="body2" sx={doctorSpecialtyStyles(mode)}>
                            {doctorData.specialty}
                        </Typography>
                        <Box sx={ratingContainerStyles}>
                            <Rating 
                                value={doctorData.rating} 
                                precision={0.1} 
                                readOnly 
                                size="small"
                                sx={ratingStyles}
                            />
                            <Typography variant="body2" sx={ratingTextStyles(mode)}>
                                4
                            </Typography>
                            <Typography variant="body2" sx={reviewsCountStyles(mode)}>
                                {doctorData.totalReviews} {ReviewLabels?.lbl_review?.toLowerCase() || 'reviews'}
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                {/* Dashed divider after doctor profile */}
                <Box sx={dashedDividerStyles(mode)} />

                {/* Reviews Section Header */}
                <Typography variant="h6" sx={reviewsHeaderStyles(mode)}>
                    {doctorData.totalReviews} {ReviewLabels?.lbl_review?.toLowerCase() || 'reviews'}
                </Typography>

                {/* Reviews List */}
                {reviews.map((review, index) => (
                    <Box key={review.id}>
                        {/* Review Item */}
                        <Box sx={reviewItemStyles}>
                            <Box sx={reviewHeaderStyles}>
                                <Box sx={reviewUserStyles}>
                                    <Avatar 
                                        src={review.avatar} 
                                        alt={review.name}
                                        sx={userAvatarStyles(mode)}
                                    />
                                    <Box>
                                        <Typography variant="body1" sx={userNameStyles(mode)}>
                                            {review.name}
                                        </Typography>
                                        <Box sx={reviewMetaStyles}>
                                            <Rating 
                                                value={review.rating} 
                                                precision={0.1} 
                                                readOnly 
                                                size="small"
                                                sx={reviewRatingStyles}
                                            />
                                            <Typography variant="body2" sx={reviewRatingTextStyles(mode)}>
                                                {review.rating}
                                            </Typography>
                                            <Typography variant="body2" sx={reviewDateStyles(mode)}>
                                                {review.date}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                            
                            <Typography variant="body2" sx={reviewTextStyles(mode)}>
                                {review.text}
                                <Box 
                                    component="span"
                                    onClick={() => handleReadMore(review.id)}
                                    sx={readMoreStyles(mode)}
                                >
                                    read more
                                </Box>
                            </Typography>
                        </Box>
                    </Box>
                ))}

                {/* Single solid border after all reviews */}
                <Box sx={solidDividerStyles(mode)} />
            </Box>

            {/* Write Review Button */}
            <Box sx={buttonContainerStyles}>
                <Button 
                    fullWidth 
                    onClick={handleWriteReview}
                    sx={writeReviewButtonStyles(mode)}
                >
                    {ReviewLabels?.btn_insert_review?.split('(')[0]?.trim() || 'Write a Review'}
                </Button>
            </Box>
        </Box>
    );
};

export default ReviewsPage;