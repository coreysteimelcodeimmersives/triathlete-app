import React from 'react';
import QuillEditor from '../Quill/QuillEditor';
import { Box } from '@mui/system';

const EditWorkoutQuill = ({
  label,
  keyVar,
  workoutBuilderForm,
  setWorkoutBuilderForm,
}) => {
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
      <QuillEditor
        keyVar={keyVar}
        workoutBuilderForm={workoutBuilderForm}
        setWorkoutBuilderForm={setWorkoutBuilderForm}
      ></QuillEditor>
    </Box>
  );
};

export default EditWorkoutQuill;
