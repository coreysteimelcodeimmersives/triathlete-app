import React, { useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { updateDuration } from '../../Redux-State/WorkoutSlice';
import { doUpdate } from '../../Redux-State/UpdateSlice';

const EditDuration = ({
  label,
  keyVar,
  oppVar,
  error,
  workoutBuilderForm,
  setWorkoutBuilderForm,
}) => {
  const dispatch = useDispatch();
  const update = useSelector((state) => state.update.general);
  const [durValue, setDurValue] = useState(Number(workoutBuilderForm[keyVar]));

  const handleChange = (e) => {
    // setDurValue(Number(e.target.value));
    setWorkoutBuilderForm({
      ...workoutBuilderForm,
      [keyVar]: Number(e.target.value),
      [oppVar]: Number(workoutBuilderForm[oppVar]),
    });
    dispatch(doUpdate());
  };

  useEffect(() => {
    if (Number(workoutBuilderForm[keyVar]) === 0) {
      setDurValue('0');
      return;
    }

    setDurValue(Number(workoutBuilderForm[keyVar]));
  }, [workoutBuilderForm.totalDuration, update]);

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
      // value={workoutBuilderForm[keyVar]}
      onChange={handleChange}
      required
    />
  );
};

export default EditDuration;
