import React from 'react';
import TextField from '@mui/material/TextField';
import QuillEditor from '../Quill/QuillEditor';
import { Box, padding } from '@mui/system';
import { useWorkoutContext } from '../../Context/WorkoutContext';

const EditWorkoutQuill = ({ label, keyVar }) => {
  const { workout, handleUpdateWo } = useWorkoutContext();
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
      <QuillEditor keyVar={keyVar}></QuillEditor>
    </Box>
  );
};

export default EditWorkoutQuill;
