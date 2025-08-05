import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box, TextField, Checkbox, FormControlLabel, Rating, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface ReviewModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: (data: any) => void;
}

const questions = [
  'Did you get professional answer to your request?',
  'Did the professional came to your house?',
  'Was the professional on time?',
  'Did the professional behave professionally?'
];

const MAX_CHARS = 200;

const ReviewModal: React.FC<ReviewModalProps> = ({ open, onClose, onConfirm }) => {
  const [rating, setRating] = useState<number | null>(3);
  const [review, setReview] = useState('Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Lorem ipsum is a dummy or placeholder text commonly used in graphic design.');
  const [checked, setChecked] = useState([true, true, false, false]);

  const handleCheck = (idx: number) => {
    setChecked(prev => prev.map((v, i) => (i === idx ? !v : v)));
  };

  const handleConfirm = () => {
    onConfirm({ rating, review, checked });
    setReview('');
    setChecked([true, true, false, false]);
    setRating(3);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={false}
      fullWidth={false}
      PaperProps={{
        sx: {
          width: '350px',
          maxHeight: 'none',
          height: 'auto',
          borderRadius: 2,
          margin: 0,
        },
      }}
    >
      <DialogTitle sx={{ 
        textAlign: 'center', 
        fontWeight: 500, 
        fontSize: 18, 
        pb: 2,
        pt: 3,
        position: 'relative'
      }}>
        <Typography sx={{fontSize:'20px', fontFamily:'Poppins', fontWeight:600, color:'#0E0D39'}}>
        Rating
        </Typography>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ 
            position: 'absolute', 
            right: 12, 
            top: 12,
            color: 'text.secondary'
          }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ 
        pt: 0, 
        pb: 0,
        px: 3,
        overflow: 'visible'
      }}>
        {/* Rating Stars */}
        <Box display="flex" justifyContent="center" mb={3}>
          <Rating
            value={rating}
            precision={1}
            onChange={(_, v) => setRating(v)}
            size="large"
            sx={{
              '& .MuiRating-iconFilled': {
                // color: '#FF9500',
                color: 'linear-gradient(122deg, #E8D41E 4.67%, #FF7A66 85.99%)'
              },
              '& .MuiRating-iconEmpty': {
                color: '#E0E0E0',
              }
            }}
          />
        </Box>

        {/* Divider Line */}
        <Box sx={{ 
          borderBottom: '1px dashed #8F8EA4', 
          mb: 3 
        }} />

        {/* Insert Review Section */}
        <Box mb={2}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
            <Typography sx={{fontSize:'14px',fontFamily:'Poppins', fontWeight:600, color:'#0E0D39'}}>
              Insert a Review
            </Typography>
            <Typography sx={{fontSize:'13px',fontFamily:'Poppins',fontWeight:500,color:'#494869'}}>
              max {MAX_CHARS} chars
            </Typography>
          </Box>
          
          <TextField
            multiline
            rows={3}
            fullWidth
            value={review}
            onChange={e => {
              if (e.target.value.length <= MAX_CHARS) setReview(e.target.value);
            }}
            variant="outlined"
            sx={{ 
              mb: 3,
              '& .MuiOutlinedInput-root': {
                fontSize: 14,
                color:'#494869',
                fontFamily:'Poppins',
                fontWeight:400,
                '& fieldset': {
                  borderColor: '#35558A',
                },
              }
            }}
            inputProps={{ maxLength: MAX_CHARS }}
          />
        </Box>

        {/* Questions */}
        <Box mb={1}>
          {questions.map((q, idx) => (
            <FormControlLabel
              key={q}
              control={
                <Checkbox
                  checked={checked[idx]}
                  onChange={() => handleCheck(idx)}
                  color="primary"
                  sx={{
                    '& .MuiSvgIcon-root': {
                      fontSize: 20,
                    }
                  }}
                />
              }
              label={
                <Typography fontSize={14} color="#494869" fontWeight={500} sx={{ lineHeight: 1.3, fontFamily:'Poppins' }}>
                  {q}
                </Typography>
              }
              sx={{ 
                display: 'flex',
                alignItems: 'flex-start',
                mb: 1,
                ml: 0,
                '& .MuiFormControlLabel-label': {
                  mt: 0.5
                }
              }}
            />
          ))}
        </Box>
      </DialogContent>

      <DialogActions sx={{ 
        justifyContent: 'center', 
        pb: 3,
        pt: 2,
        px: 3,
        gap: 2
      }}>
        <Button 
          onClick={onClose} 
          variant="outlined" 
          sx={{ 
            minWidth: 100,
            textTransform: 'none',
            borderColor: '#35558A',
            backgroundColor:'#3498DB17',
            color: '#35558A',
            fontSize:'15px',
            fontFamily:'Poppins',
            fontWeight:500,
            '&:hover': {
              borderColor: '#35558A',
              backgroundColor:'#3498DB17',
            }
          }}
        >
          Cancel
        </Button>
        <Button 
          onClick={handleConfirm} 
          variant="contained" 
          sx={{ 
            minWidth: 100,
            textTransform: 'none',
            color:'#FFFFFF',
            fontSize:'16px',
            fontWeight:500,
            fontFamily:'Poppins',
            backgroundColor:'linear-gradient(122deg, #35558A 4.67%, #3498DB 85.99%)',
            '&:hover': {
              backgroundColor:'linear-gradient(122deg, #35558A 4.67%, #3498DB 85.99%)',
            }
          }}
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ReviewModal;