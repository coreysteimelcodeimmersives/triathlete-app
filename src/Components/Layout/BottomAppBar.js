import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import GroupsIcon from '@mui/icons-material/Groups';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  workoutBuilderPage,
  workoutLibraryPage,
  athleteLibraryPage,
  weekCalendar,
} from '../../Redux-State/PageSlice';
import { clearWorkout } from '../../Redux-State/WorkoutSlice';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import { clearWorkoutLibFilter } from '../../Redux-State/WorkoutLibFilterSlice';
import { doUpdate } from '../../Redux-State/UpdateSlice';

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -10,
  left: 0,
  right: 0,
  margin: '0 auto',
});

const BottomAppBar = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const page = useSelector((state) => state.page);
  const dispatch = useDispatch();
  return (
    <>
      {user && (
        <AppBar
          position='fixed'
          color='primary'
          sx={{ top: 'auto', bottom: 0 }}
        >
          <Toolbar>
            {user.isAdmin && (
              <IconButton
                color='inherit'
                label='Athlete Library'
                onClick={() => {
                  dispatch(athleteLibraryPage());
                  navigate('/athlete-library');
                }}
              >
                <GroupsIcon fontSize='large' />
              </IconButton>
            )}
            {!user.isAdmin && (
              <IconButton
                color='inherit'
                label='Training Calendar'
                onClick={() => {
                  navigate('/calendar');
                }}
              >
                <PendingActionsIcon fontSize='large' />
              </IconButton>
            )}
            <StyledFab
              color='secondary'
              aria-label='add'
              onClick={() => {
                if (page.titleText === 'Wo Builder') {
                  return;
                } else {
                  dispatch(clearWorkout());
                  dispatch(workoutBuilderPage());
                  navigate('/workout-builder');
                }
              }}
            >
              <AddIcon fontSize='large' />
            </StyledFab>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton
              color='inherit'
              onClick={() => {
                dispatch(doUpdate());
                dispatch(clearWorkoutLibFilter());
                navigate('/workout-library');
              }}
            >
              <LibraryBooksIcon fontSize='large' />
            </IconButton>
          </Toolbar>
        </AppBar>
      )}
    </>
  );
};

export default BottomAppBar;
