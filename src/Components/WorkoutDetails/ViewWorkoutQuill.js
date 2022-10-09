import React from 'react';
import QuillReader from '../Quill/QuillReader';
import { Box } from '@mui/material';

const ViewWorkoutQuill = ({ label, richText }) => {
  return (
    <Box
      id='outlined-read-only-input'
      sx={{
        marginLeft: '5%',
        width: '90%',
        marginBottom: '5%',
        color: 'purple',
      }}
    >
      {label}
      <QuillReader richText={richText}></QuillReader>
    </Box>
  );
};

export default ViewWorkoutQuill;
