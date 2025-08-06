'use client'
import React from 'react';
import {
    Box,
    Container,
    Typography,
    Avatar,
    IconButton,
    Button,
    Rating,
    useTheme,
    Divider
} from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useRouter } from 'next/navigation';

const ReviewsPage = () => {
    const theme = useTheme();
    const router = useRouter();

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
            rating: 4.0,
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
        <Box sx={{ minHeight: '100vh', backgroundColor: '#FFFFFF' }}>
            {/* Header */}
            <Box sx={{
                background: 'linear-gradient(180deg, #3498DB 0%, #35558A 100%)',
                padding: '12px 16px',
                color: '#fff',
                position: 'relative'
            }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <IconButton 
                        onClick={handleBack} 
                        sx={{
                            color: '#fff',
                            padding: '8px',
                            '&:hover': {
                                backgroundColor: 'rgba(255, 255, 255, 0.1)'
                            }
                        }}
                    >
                        <KeyboardArrowLeftIcon sx={{ fontSize: '24px' }} />
                    </IconButton>
                    <Typography variant="h6" sx={{ fontWeight: 500, fontSize: '20px',color:'#FFFFFF',fontFamily:'Poppins' }}>
                        Reviews
                    </Typography>
                </Box>
                {/* Status bar simulation */}
                <Box sx={{
                    position: 'absolute',
                    top: '8px',
                    right: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '14px',
                    fontWeight: 500,
                    color:'#FFFFFF',
                    fontFamily:'Poppins'
                }}>
                    8:34
                </Box>
            </Box>

            {/* Content - White Background Container */}
            <Box sx={{ 
                margin: '16px',
                marginBottom: '0px',
                padding: '20px',
            }}>
                {/* Doctor Profile Section */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                    <Box sx={{ position: 'relative' }}>
                        <Avatar 
                            src={doctorData.avatar} 
                            alt={doctorData.name}
                            sx={{
                                width: '70px',
                                height: '70px',
                                borderRadius: '8px',
                                border: '1px solid #3498DB'
                            }}
                        />
                    </Box>
                    
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="h6" sx={{ 
                            fontWeight: 600, 
                            color: '#0E0D39',
                            fontSize: '18px',
                            marginBottom: '4px',
                            fontFamily:'Poppins'
                        }}>
                            {doctorData.name}
                        </Typography>
                        <Typography variant="body2" sx={{ 
                            color: '#494869',
                            fontSize: '14px',
                            marginBottom: '8px',
                            fontFamily:'Poppins',
                            fontWeight:500
                        }}>
                            {doctorData.specialty}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Rating 
                                value={doctorData.rating} 
                                precision={0.1} 
                                readOnly 
                                size="small"
                                sx={{
                                    '& .MuiRating-iconFilled': {
                                        color: 'linear-gradient(122deg, #E8D41E 4.67%, #FF7A66 85.99%)',
                                    }
                                }}
                            />
                            <Typography variant="body2" sx={{ 
                                color: '#0E0D39',
                                fontWeight: 600,
                                fontSize: '18px',
                                fontFamily:'Poppins'
                            }}>
                                4
                            </Typography>
                            <Typography variant="body2" sx={{ 
                                color: '#494869',
                                fontSize: '14px',
                                fontFamily:'Poppins',
                                fontWeight:400
                            }}>
                                {doctorData.totalReviews} reviews
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                {/* Dashed divider after doctor profile */}
                <Box sx={{ 
                    height: '1px', 
                    backgroundImage: 'repeating-linear-gradient(to right, #8F8EA4 0px, #8F8EA4 5px, transparent 5px, transparent 10px)',
                    margin: '0 -20px 24px -20px' 
                }} />

                {/* Reviews Section Header */}
                <Typography variant="h6" sx={{ 
                    fontWeight: 600, 
                    color: '#0E0D39',
                    fontSize: '18px',
                    marginBottom: '20px',
                    fontFamily:'Poppins'
                }}>
                    {doctorData.totalReviews} reviews
                </Typography>

                {/* Reviews List */}
                {reviews.map((review, index) => (
                    <Box key={review.id}>
                        {/* Review Item */}
                        <Box sx={{ paddingY: '16px' }}>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                justifyContent: 'space-between',
                                marginBottom: '12px'
                            }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <Avatar 
                                        src={review.avatar} 
                                        alt={review.name}
                                        sx={{
                                            width: '40px',
                                            height: '40px'
                                        }}
                                    />
                                    <Box>
                                        <Typography variant="body1" sx={{ 
                                            fontWeight: 600,
                                            fontFamily:'Poppins', 
                                            color: '#0E0D39',
                                            fontSize: '14px',
                                            marginBottom: '4px'
                                        }}>
                                            {review.name}
                                        </Typography>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '35px' }}>
                                            <Rating 
                                                value={review.rating} 
                                                precision={0.1} 
                                                readOnly 
                                                size="small"
                                                sx={{
                                                    '& .MuiRating-iconFilled': {
                                                        color: 'linear-gradient(122deg, #E8D41E 4.67%, #FF7A66 85.99%)',
                                                    },
                                                    '& .MuiRating-icon': {
                                                        fontSize: '16px'
                                                    }
                                                }}
                                            />
                                            <Typography variant="body2" sx={{ 
                                                color: '#0E0D39',
                                                fontWeight: 400,
                                                fontSize: '14px',
                                                fontFamily:'Poppins'
                                            }}>
                                                4
                                            </Typography>
                                            <Typography variant="body2" sx={{
                                                color: '#0E0D39',
                                                fontSize: '12px',
                                                fontWeight:400,
                                                fontFamily:'Poppins'
                                            }}>
                                                {review.date}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                            
                            <Typography variant="body2" sx={{
                                color: '#494869',
                                fontSize: '14px',
                                fontFamily:'Poppins',
                                fontWeight:400,
                                lineHeight: 1.5
                            }}>
                                {review.text}
                                <Box 
                                    component="span"
                                    onClick={() => handleReadMore(review.id)}
                                    sx={{
                                        color: '#3498DB',
                                        fontSize:'15px',
                                        fontWeight:500,
                                        fontFamily:'Poppins',
                                        cursor: 'pointer',
                                        '&:hover': {
                                            textDecoration: 'underline'
                                        }
                                    }}
                                >
                                    read more
                                </Box>
                            </Typography>
                        </Box>
                    </Box>
                ))}

                {/* Single solid border after all reviews */}
                <Box sx={{ 
                    height: '1px', 
                    backgroundColor: '#D8DADE',
                    margin: '0 -20px'
                }} />
            </Box>

            {/* Write Review Button */}
            <Box sx={{ padding: '16px', paddingTop: '20px' }}>
                <Button 
                    fullWidth 
                    onClick={handleWriteReview}
                    sx={{
                        background: 'linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)',
                        color: '#fff',
                        padding: '14px 24px',
                        borderRadius: '12px',
                        textTransform: 'none',
                        fontSize: '16px',
                        fontWeight: 600,
                        boxShadow: '0 4px 12px rgba(74, 144, 226, 0.3)',
                        '&:hover': {
                            background: 'linear-gradient(135deg, #357ABD 0%, #2a6ba8 100%)',
                            boxShadow: '0 6px 16px rgba(74, 144, 226, 0.4)'
                        }
                    }}
                >
                    Write a Review
                </Button>
            </Box>
        </Box>
    );
};

export default ReviewsPage;