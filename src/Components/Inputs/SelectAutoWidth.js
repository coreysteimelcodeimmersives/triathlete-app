import React, { useEffect, useState } from 'react';
import { InputLabel } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector } from 'react-redux';

const SelectAutoWidth = ({
  setMinWidth,
  label,
  keyVar,
  map,
  required,
  error,
  workoutBuilderForm,
  setWorkoutBuilderForm,
}) => {
  const woUpdate = useSelector((state) => state.update.woBuilder);
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
    setWorkoutBuilderForm({
      ...workoutBuilderForm,
      [keyVar]: event.target.value,
    });
  };

  useEffect(() => {
    setValue('');
  }, [woUpdate]);
  return (
    <div>
      <FormControl
        error={error}
        required={required}
        sx={{ m: 0.5, minWidth: setMinWidth }}
      >
        <InputLabel
          id='demo-simple-select-autowidth-label'
          sx={{ color: 'purple' }}
        >
          {label}
        </InputLabel>
        <Select
          labelId='demo-simple-select-autowidth-label'
          id='demo-simple-select-autowidth'
          value={
            workoutBuilderForm[keyVar] ? workoutBuilderForm[keyVar] : value
          }
          onChange={handleChange}
          autoWidth
          label={`${label}*`}
        >
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          {Object.keys(map).map((key) => {
            return (
              <MenuItem key={key} value={key} sx={{ color: 'black' }}>
                {map[key]}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectAutoWidth;
