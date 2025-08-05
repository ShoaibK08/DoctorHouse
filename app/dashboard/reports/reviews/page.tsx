'use client'
import React from 'react';
import {
    Box,
    Container,
    Typography,
    Avatar,
    IconButton,
    Button,
    Card,
    CardContent,
    Rating,
    Divider,
    useTheme
} from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useRouter } from 'next/navigation';

// Style objects following the rules
const headerStyles = {
    background: 'linear-gradient(to right, #35558a, #3487c7)',
    padding: '16px 0',
    color: '#fff'
};

const backButtonStyles = {
    color: '#fff',
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)'
    }
};

const doctorCardStyles = {
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '16px',
    margin: '16px 0',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
};

const doctorInfoStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
};

const doctorAvatarStyles = {
    width: '60px',
    height: '60px',
    border: '2px solid #3487c7'
};

const doctorDetailsStyles = {
    flex: 1
};

const reviewsSectionStyles = {
    marginTop: '24px'
};

const reviewCardStyles = {
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '16px',
    marginBottom: '12px',
    boxShadow: '0 1px 4px rgba(0, 0, 0, 0.1)'
};

const reviewHeaderStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '8px'
};

const reviewerInfoStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
};

const reviewerAvatarStyles = {
    width: '40px',
    height: '40px'
};

const reviewDateStyles = {
    color: 'text.secondary',
    fontSize: '0.875rem'
};

const reviewTextStyles = {
    color: 'text.secondary',
    fontSize: '0.875rem',
    lineHeight: 1.5,
    marginTop: '8px'
};

const readMoreStyles = {
    color: '#3487c7',
    textDecoration: 'none',
    cursor: 'pointer',
    '&:hover': {
        textDecoration: 'underline'
    }
};

const writeReviewButtonStyles = {
    background: 'linear-gradient(to right, #35558a, #3487c7)',
    color: '#fff',
    padding: '12px 24px',
    borderRadius: '8px',
    textTransform: 'none',
    fontSize: '1rem',
    fontWeight: 600,
    '&:hover': {
        background: 'linear-gradient(to right, #2a6ba8, #2a6ba8)'
    }
};

const ReviewsPage = () => {
    const theme = useTheme();
    const router = useRouter();

    // Mock data
    const doctorData = {
        name: 'Dr. John Doe',
        specialty: 'Cardiologist',
        rating: 4.0,
        totalReviews: 12,
        avatar: '/assets/avatar.png'
    };

    const reviews = [
        {
            id: 1,
            name: 'Kelsey Gould',
            avatar: '/assets/avatar.png',
            rating: 4.0,
            date: '20 March, 2025',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitelit. Ut enim ad minim veniam...',
            fullText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            id: 2,
            name: 'George Bailey',
            avatar: '/assets/avatar.png',
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
        // Navigate to write review page or open modal
        console.log('Write review clicked');
    };

    const handleReadMore = (reviewId: number) => {
        // Handle read more functionality
        console.log('Read more clicked for review:', reviewId);
    };

    return (
        <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
            {/* Header */}
            <Box sx={headerStyles}>
                <Container fixed>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <IconButton onClick={handleBack} sx={backButtonStyles}>
                            <KeyboardArrowLeftIcon />
                        </IconButton>
                        <Typography variant="h6" fontWeight={600}>
                            Reviews
                        </Typography>
                    </Box>
                </Container>
            </Box>

            <Container fixed>
                {/* Doctor Profile Card */}
                <Card sx={doctorCardStyles}>
                    <CardContent sx={{ padding: '0 !important' }}>
                        <Box sx={doctorInfoStyles}>
                            <Avatar 
                                src={doctorData.avatar} 
                                alt={doctorData.name}
                                sx={doctorAvatarStyles}
                            />
                            <Box sx={doctorDetailsStyles}>
                                <Typography variant="h6" fontWeight={600} color="text.primary">
                                    {doctorData.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                    {doctorData.specialty}
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <Rating value={doctorData.rating} precision={0.5} readOnly size="small" />
                                    <Typography variant="body2" color="text.primary" fontWeight={500}>
                                        {doctorData.rating}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {doctorData.totalReviews} reviews
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>

                {/* Reviews Section */}
                <Box sx={reviewsSectionStyles}>
                    <Typography variant="h6" fontWeight={600} color="text.primary" sx={{ mb: 2 }}>
                        {doctorData.totalReviews} reviews
                    </Typography>

                    {reviews.map((review) => (
                        <Card key={review.id} sx={reviewCardStyles}>
                            <CardContent sx={{ padding: '0 !important' }}>
                                <Box sx={reviewHeaderStyles}>
                                    <Box sx={reviewerInfoStyles}>
                                        <Avatar 
                                            src={review.avatar} 
                                            alt={review.name}
                                            sx={reviewerAvatarStyles}
                                        />
                                        <Box>
                                            <Typography variant="body1" fontWeight={500} color="text.primary">
                                                {review.name}
                                            </Typography>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <Rating value={review.rating} precision={0.5} readOnly size="small" />
                                                <Typography variant="body2" color="text.primary" fontWeight={500}>
                                                    {review.rating}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Typography variant="body2" sx={reviewDateStyles}>
                                        {review.date}
                                    </Typography>
                                </Box>
                                
                                <Typography variant="body2" sx={reviewTextStyles}>
                                    {review.text}
                                    <span 
                                        onClick={() => handleReadMore(review.id)}
                                        style={readMoreStyles}
                                    >
                                        read more
                                    </span>
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Box>

                {/* Write Review Button */}
                <Box sx={{ 
                    position: 'fixed', 
                    bottom: '20px', 
                    left: '50%', 
                    transform: 'translateX(-50%)',
                    width: 'calc(100% - 32px)',
                    maxWidth: '400px'
                }}>
                    <Button 
                        fullWidth 
                        onClick={handleWriteReview}
                        sx={writeReviewButtonStyles}
                    >
                        Write a Review
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default ReviewsPage; 