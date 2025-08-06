import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box, TextField, Checkbox, FormControlLabel, Rating, IconButton, useTheme } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { secondary } from '@/utils/colors';
import languageStore from '@/zustand/languageStore';

// Style objects following the rules
const dialogPaperStyles = (mode: string) => ({
    width: '350px',
    maxHeight: 'none',
    height: 'auto',
    borderRadius: 2,
    margin: 0,
    backgroundColor: mode === 'light' ? '#ffffff' : secondary,
});

const dialogTitleStyles = (mode: string) => ({
    textAlign: 'center',
    fontWeight: 500,
    fontSize: 18,
    paddingBottom: 2,
    paddingTop: 3,
    position: 'relative',
    color: mode === 'light' ? '#0E0D39' : '#ffffff'
});

const titleTextStyles = (mode: string) => ({
    fontSize: '20px',
    fontFamily: 'Poppins',
    fontWeight: 600,
    color: mode === 'light' ? '#0E0D39' : '#ffffff'
});

const closeButtonStyles = (mode: string) => ({
    position: 'absolute',
    right: 12,
    top: 12,
    color: mode === 'light' ? 'text.secondary' : '#cccccc'
});

const dialogContentStyles = {
    paddingTop: 0,
    paddingBottom: 0,
    paddingX: 3,
    overflow: 'visible'
};

const ratingContainerStyles = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 3
};

const ratingStyles = (mode: string) => ({
    '& .MuiRating-iconFilled': {
        color: mode === 'light' ? '#FF9500' : '#FFB74D'
    },
    '& .MuiRating-iconEmpty': {
        color: mode === 'light' ? '#E0E0E0' : '#424242'
    }
});

const dividerStyles = (mode: string) => ({
    borderBottom: mode === 'light' ? '1px dashed #8F8EA4' : '1px dashed #4B5563',
    marginBottom: 3
});

const reviewSectionStyles = {
    marginBottom: 2
};

const reviewHeaderStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 1
};

const reviewTitleStyles = (mode: string) => ({
    fontSize: '14px',
    fontFamily: 'Poppins',
    fontWeight: 600,
    color: mode === 'light' ? '#0E0D39' : '#ffffff'
});

const reviewCharLimitStyles = (mode: string) => ({
    fontSize: '13px',
    fontFamily: 'Poppins',
    fontWeight: 500,
    color: mode === 'light' ? '#494869' : '#cccccc'
});

const textFieldStyles = (mode: string) => ({
    marginBottom: 3,
    '& .MuiOutlinedInput-root': {
        fontSize: 14,
        color: mode === 'light' ? '#494869' : '#ffffff',
        fontFamily: 'Poppins',
        fontWeight: 400,
        backgroundColor: mode === 'light' ? '#ffffff' : secondary,
        '& fieldset': {
            borderColor: mode === 'light' ? '#35558A' : '#4B5563',
        },
        '&:hover fieldset': {
            borderColor: mode === 'light' ? '#3487c7' : '#6B7280',
        },
        '&.Mui-focused fieldset': {
            borderColor: mode === 'light' ? '#3487c7' : '#6B7280',
        },
    },
    '& .MuiInputBase-input': {
        color: mode === 'light' ? '#494869' : '#ffffff',
    }
});

const questionsContainerStyles = {
    marginBottom: 1
};

const checkboxStyles = (mode: string) => ({
    '& .MuiSvgIcon-root': {
        fontSize: 20,
    },
    '&.Mui-checked': {
        color: mode === 'light' ? '#35558A' : '#3498DB',
    },
    color: mode === 'light' ? '#35558A' : '#6B7280',
});

const questionLabelStyles = (mode: string) => ({
    fontSize: 14,
    color: mode === 'light' ? '#494869' : '#cccccc',
    fontWeight: 500,
    lineHeight: 1.3,
    fontFamily: 'Poppins'
});

const formControlLabelStyles = {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: 1,
    marginLeft: 0,
    '& .MuiFormControlLabel-label': {
        marginTop: 0.5
    }
};

const dialogActionsStyles = {
    justifyContent: 'center',
    paddingBottom: 3,
    paddingTop: 2,
    paddingX: 3,
    gap: 2
};

const cancelButtonStyles = (mode: string) => ({
    minWidth: 100,
    textTransform: 'none',
    borderColor: mode === 'light' ? '#35558A' : '#6B7280',
    backgroundColor: mode === 'light' ? '#3498DB17' : 'rgba(107, 114, 128, 0.1)',
    color: mode === 'light' ? '#35558A' : '#ffffff',
    fontSize: '15px',
    fontFamily: 'Poppins',
    fontWeight: 500,
    '&:hover': {
        borderColor: mode === 'light' ? '#35558A' : '#6B7280',
        backgroundColor: mode === 'light' ? '#3498DB17' : 'rgba(107, 114, 128, 0.2)',
    }
});

const confirmButtonStyles = {
    minWidth: 100,
    textTransform: 'none',
    color: '#FFFFFF',
    fontSize: '16px',
    fontWeight: 500,
    fontFamily: 'Poppins',
    background: 'linear-gradient(122deg, #35558A 4.67%, #3498DB 85.99%)',
    '&:hover': {
        background: 'linear-gradient(122deg, #2a6ba8 4.67%, #2a6ba8 85.99%)',
    }
};

interface ReviewModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: (data: any) => void;
}

const MAX_CHARS = 200;

const ReviewModal: React.FC<ReviewModalProps> = ({ open, onClose, onConfirm }) => {
  const theme = useTheme();
  const mode = theme.palette.mode;
  const [rating, setRating] = useState<number | null>(3);
  const [review, setReview] = useState('Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Lorem ipsum is a dummy or placeholder text commonly used in graphic design.');
  const [checked, setChecked] = useState([true, true, false, false]);

  // Get language labels
  const { getLabels } = languageStore();
  const Labels = getLabels('Review') as any;

  // Questions array using language labels
  const questions = [
    Labels?.lbl_first || 'Did you get physician answer to your request?',
    Labels?.lbl_second || 'Did the physician came to your house?',
    Labels?.lbl_third || 'Was the physician on time?',
    Labels?.lbl_fourth || 'Did the physician behave professionally?'
  ];

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
        sx: dialogPaperStyles(mode),
      }}
    >
      <DialogTitle sx={dialogTitleStyles(mode)}>
        <Typography sx={titleTextStyles(mode)}>
          {Labels?.lbl_review || 'Rating'}
        </Typography>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={closeButtonStyles(mode)}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={dialogContentStyles}>
        {/* Rating Stars */}
        <Box sx={ratingContainerStyles}>
          <Rating
            value={rating}
            precision={1}
            onChange={(_, v) => setRating(v)}
            size="large"
            sx={ratingStyles(mode)}
          />
        </Box>

        {/* Divider Line */}
        <Box sx={dividerStyles(mode)} />

        {/* Insert Review Section */}
        <Box sx={reviewSectionStyles}>
          <Box sx={reviewHeaderStyles}>
            <Typography sx={reviewTitleStyles(mode)}>
              {Labels?.btn_insert_review?.replace(' (max 500 chars)', '') || 'Insert a Review'}
            </Typography>
            <Typography sx={reviewCharLimitStyles(mode)}>
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
            sx={textFieldStyles(mode)}
            inputProps={{ maxLength: MAX_CHARS }}
          />
        </Box>

        {/* Questions */}
        <Box sx={questionsContainerStyles}>
          {questions.map((q, idx) => (
            <FormControlLabel
              key={q}
              control={
                <Checkbox
                  checked={checked[idx]}
                  onChange={() => handleCheck(idx)}
                  color="primary"
                  sx={checkboxStyles(mode)}
                />
              }
              label={
                <Typography sx={questionLabelStyles(mode)}>
                  {q}
                </Typography>
              }
              sx={formControlLabelStyles}
            />
          ))}
        </Box>
      </DialogContent>

      <DialogActions sx={dialogActionsStyles}>
        <Button 
          onClick={onClose} 
          variant="outlined" 
          sx={cancelButtonStyles(mode)}
        >
          {Labels?.lbl_cancel || 'Cancel'}
        </Button>
        <Button 
          onClick={handleConfirm} 
          variant="contained" 
          sx={confirmButtonStyles}
        >
          {Labels?.lbl_confirm || 'Confirm'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ReviewModal;