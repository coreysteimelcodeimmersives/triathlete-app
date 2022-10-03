import * as React from 'react';
import { InputLabel } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectAutoWidth = ({ setMinWidth, label, valueVar, setterFunc, map }) => {
  const handleChange = (event) => {
    setterFunc(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: setMinWidth }}>
        <InputLabel
          id='demo-simple-select-autowidth-label'
          sx={{ color: 'purple' }}
        >
          {label}
        </InputLabel>
        <Select
          labelId='demo-simple-select-autowidth-label'
          id='demo-simple-select-autowidth'
          value={valueVar}
          onChange={handleChange}
          autoWidth
          label={label}
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
