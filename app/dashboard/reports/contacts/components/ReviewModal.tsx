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

const MAX_CHARS = 500;

const ReviewModal: React.FC<ReviewModalProps> = ({ open, onClose, onConfirm }) => {
  const [rating, setRating] = useState<number | null>(3);
  const [review, setReview] = useState('');
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
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle sx={{ textAlign: 'center', fontWeight: 600, fontSize: 20, pb: 1 }}>
        Rating
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: 'absolute', right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ pt: 0 }}>
        <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
          <Rating
            value={rating}
            precision={1}
            onChange={(_, v) => setRating(v)}
            size="large"
          />
        </Box>
        <Typography fontWeight={500} mb={1}>
          Insert a Review
          <Typography component="span" color="text.secondary" fontSize={12} ml={1}>
            max {MAX_CHARS} chars
          </Typography>
        </Typography>
        <TextField
          multiline
          minRows={3}
          maxRows={5}
          fullWidth
          value={review}
          onChange={e => {
            if (e.target.value.length <= MAX_CHARS) setReview(e.target.value);
          }}
          placeholder="Insert your review here..."
          variant="outlined"
          sx={{ mb: 2 }}
          inputProps={{ maxLength: MAX_CHARS }}
        />
        <Box display="flex" justifyContent="flex-end" mb={2}>
          <Typography variant="caption" color="text.secondary">
            {review.length} / {MAX_CHARS}
          </Typography>
        </Box>
        <Box>
          {questions.map((q, idx) => (
            <FormControlLabel
              key={q}
              control={
                <Checkbox
                  checked={checked[idx]}
                  onChange={() => handleCheck(idx)}
                  color="primary"
                />
              }
              label={<Typography fontSize={14}>{q}</Typography>}
              sx={{ display: 'block', mb: 0.5 }}
            />
          ))}
        </Box>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'center', pb: 2 }}>
        <Button onClick={onClose} variant="outlined" sx={{ minWidth: 100 }}>
          Cancel
        </Button>
        <Button onClick={handleConfirm} variant="contained" sx={{ minWidth: 100 }}>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ReviewModal;