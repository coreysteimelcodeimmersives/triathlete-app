import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import SaveIcon from '@mui/icons-material/Save';
import { clearWo } from '../../Redux-State/WorkoutSlice';
import SettingsIcon from '@mui/icons-material/Settings';
import EditIcon from '@mui/icons-material/Edit';
import { addToWoLib } from '../../Redux-State/WorkoutLibrarySlice';

const RightIcon = () => {
  const page = useSelector((state) => state.page);
  const workout = useSelector((state) => state.workout);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const returnRightIcon = () => {
    switch (page.rightIcon) {
      case 'SaveIcon': {
        return (
          <SaveIcon
            fontSize='large'
            onClick={() => {
              dispatch(addToWoLib({ workout }));
              dispatch(clearWo());
              navigate('/workout-library');
            }}
          />
        );
      }
      case 'EditIcon': {
        return <EditIcon fontSize='large' />;
      }
      case 'SettingsIcon': {
        return (
          <SettingsIcon
            fontSize='large'
            onClick={() => {
              navigate('/sign-in');
            }}
          />
        );
      }
      default: {
        return <SaveIcon fontSize='large' sx={{ opacity: 0 }} />;
      }
    }
  };
  return returnRightIcon();
};

export default RightIcon;
