import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearWo } from '../../Redux-State/WorkoutSlice';
import ClearIcon from '@mui/icons-material/Clear';
import PersonIcon from '@mui/icons-material/Person';
import TuneIcon from '@mui/icons-material/Tune';

const LeftIcon = () => {
  const navigate = useNavigate();
  const page = useSelector((state) => state.page);
  const dispatch = useDispatch();
  const returnLeftIcon = () => {
    switch (page.leftIcon) {
      case 'ClearIcon': {
        return (
          <ClearIcon
            fontSize='large'
            onClick={() => {
              dispatch(clearWo());
            }}
          />
        );
      }
      case 'PersonIcon': {
        return (
          <PersonIcon
            fontSize='large'
            onClick={() => {
              navigate('/sign-in');
            }}
          />
        );
      }
      case 'TuneIcon': {
        return (
          <TuneIcon
            fontSize='large'
            onClick={() => {
              navigate('/sign-in');
            }}
          />
        );
      }

      default: {
        return <PersonIcon fontSize='large' sx={{ opacity: 0 }} />;
      }
    }
  };
  return returnLeftIcon();
};

export default LeftIcon;
