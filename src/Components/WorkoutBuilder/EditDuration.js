import React, { useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { updateDuration } from '../../Redux-State/WorkoutSlice';
import { doUpdate } from '../../Redux-State/UpdateSlice';

const EditDuration = ({ label, keyVar, oppVar, error }) => {
  const workout = useSelector((state) => state.workout);
  const update = useSelector((state) => state.update);
  const dispatch = useDispatch();

  const [durValue, setDurValue] = useState(Number(workout[keyVar]));

  useEffect(() => {
    if (Number(workout[keyVar]) === 0) {
      setDurValue('0');
      return;
    }
    setDurValue(Number(workout[keyVar]));
  }, [workout.totalDuration, update]);

  return (
    <TextField
      error={error}
      id='outlined-number'
      label={label}
      type='number'
      InputLabelProps={{
        shrink: true,
        style: { color: 'purple' },
        padding: '5%',
      }}
      sx={{ margin: '2%' }}
      value={durValue}
      onChange={(e) => {
        dispatch(
          updateDuration({
            [keyVar]: Number(e.target.value),
            [oppVar]: Number(workout[oppVar]),
          })
        );
        dispatch(doUpdate());
      }}
      required
    />
  );
};

export default EditDuration;
