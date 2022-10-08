import React from 'react';
import { TextField } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';

const EditDuration = ({ label, keyVar, dispatchFunc }) => {
  const workout = useSelector((state) => state.workout);
  const dispatch = useDispatch();
  return (
    <TextField
      id='outlined-number'
      label={label}
      type='number'
      defaultValue={workout[keyVar] ? workout[keyVar] : ''}
      InputLabelProps={{
        shrink: true,
        style: { color: 'purple' },
        padding: '5%',
      }}
      sx={{ margin: '2%' }}
      onChange={(e) => {
        dispatch(dispatchFunc({ [keyVar]: e.target.value }));
      }}
    />
  );
};

export default EditDuration;
