import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Layout from '../Components/Layout/Layout';
import { ENERGY_SYSTEMS } from '../Data/EnergySystems';
import { tuneFilterWoLibPage } from '../Redux-State/PageSlice';
import {
  updateFilterEnergySystem,
  updateFilterCriteria,
  updateFilterOrder,
  selectAllEnergySystems,
  clearAllEnergySystems,
} from '../Redux-State/WorkoutLibFilterSlice';
import {
  filterAndSortWoLib,
  filterWoLibBySportType,
  resetWoLibWithCopy,
} from '../Redux-State/WorkoutLibrarySlice';

const WoTuner = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const workoutLibrary = useSelector((state) => state.workoutLibrary);
  const workoutLibFilter = useSelector((state) => state.workoutLibFilter);

  const handleFilterAndSort = () => {
    dispatch(
      filterAndSortWoLib({
        woLib: workoutLibrary.woLib,
        copyWoLib: workoutLibrary.copyWoLib,
        engSysFilter: workoutLibFilter.energySystem,
        criteria: workoutLibFilter.criteria,
        order: workoutLibFilter.order,
      })
    );
    navigate('/workout-library-filter');
  };

  const handleCheckClick = (event) => {
    dispatch(
      updateFilterEnergySystem({
        key: ENERGY_SYSTEMS[event.target.id],
        value: event.target.checked,
      })
    );
  };

  const handleCriteriaChange = (event) => {
    dispatch(updateFilterCriteria({ criteria: event.target.value }));
  };

  const handleOrderChange = (event) => {
    dispatch(updateFilterOrder({ order: event.target.value }));
  };

  useEffect(() => {
    if (!user) {
      navigate('/sign-in');
      window.scrollTo(0, 0);
    }
    window.scrollTo(0, 0);
    dispatch(tuneFilterWoLibPage());
    dispatch(resetWoLibWithCopy(workoutLibrary.copyWoLib));
  }, []);

  return (
    <Layout>
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
        <Paper
          elevation={3}
          sx={{
            width: '95%',
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'true',
            marginBottom: '10vh',
          }}
        >
          <Box
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            padding={'1%'}
          >
            <Typography variant='h6'>Energy Systems</Typography>
            <FormGroup>
              {Object.keys(ENERGY_SYSTEMS).map((energy) => {
                return (
                  <FormControlLabel
                    key={energy}
                    control={
                      <Checkbox
                        id={energy}
                        sx={{ color: 'purple' }}
                        checked={
                          workoutLibFilter.energySystem[ENERGY_SYSTEMS[energy]]
                        }
                        onClick={handleCheckClick}
                      />
                    }
                    label={ENERGY_SYSTEMS[energy]}
                    sx={{ color: 'purple' }}
                  ></FormControlLabel>
                );
              })}
            </FormGroup>
            <Box
              display={'flex'}
              flexDirection={'row'}
              width={'100%'}
              justifyContent={'space-around'}
            >
              <Button
                variant='contained'
                sx={{ m: '2%' }}
                onClick={() => {
                  dispatch(clearAllEnergySystems());
                }}
              >
                Clear All
              </Button>
              <Button
                variant='contained'
                sx={{ m: '2%' }}
                onClick={() => {
                  dispatch(selectAllEnergySystems());
                }}
              >
                Select All
              </Button>
            </Box>
            <Box
              display={'flex'}
              flexDirection={'row'}
              justifyContent={'center'}
              width={'100%'}
            >
              <Typography variant='h6'>Sort</Typography>
            </Box>
            <Box
              display={'flex'}
              flexDirection={'row'}
              justifyContent={'space-around'}
              width={'100%'}
            >
              <FormControl>
                <FormLabel
                  id='demo-radio-buttons-group-label'
                  sx={{ color: 'purple' }}
                >
                  Criteria
                </FormLabel>
                <RadioGroup
                  aria-labelledby='demo-radio-buttons-group-label'
                  value={workoutLibFilter.criteria}
                  name='radio-buttons-group'
                  onChange={handleCriteriaChange}
                >
                  <FormControlLabel
                    value='title'
                    control={
                      <Radio
                        sx={{
                          color: 'purple',
                          '&.Mui-checked': {
                            color: 'purple',
                          },
                        }}
                      />
                    }
                    label='Title'
                  />
                  <FormControlLabel
                    value='totalDuration'
                    control={
                      <Radio
                        sx={{
                          color: 'purple',
                          '&.Mui-checked': {
                            color: 'purple',
                          },
                        }}
                      />
                    }
                    label='Duration'
                  />
                </RadioGroup>
              </FormControl>
              <FormControl>
                <FormLabel
                  id='demo-radio-buttons-group-label'
                  sx={{ color: 'purple' }}
                >
                  Order
                </FormLabel>
                <RadioGroup
                  aria-labelledby='demo-radio-buttons-group-label'
                  value={workoutLibFilter.order}
                  name='radio-buttons-group'
                  onChange={handleOrderChange}
                >
                  <FormControlLabel
                    value='asc'
                    control={
                      <Radio
                        sx={{
                          color: 'purple',
                          '&.Mui-checked': {
                            color: 'purple',
                          },
                        }}
                      />
                    }
                    label='Ascend'
                  />
                  <FormControlLabel
                    value='desc'
                    control={
                      <Radio
                        sx={{
                          color: 'purple',
                          '&.Mui-checked': {
                            color: 'purple',
                          },
                        }}
                      />
                    }
                    label='Descend'
                  />
                </RadioGroup>
              </FormControl>
            </Box>
            <Button
              variant='contained'
              sx={{ m: '2%' }}
              onClick={handleFilterAndSort}
            >
              Filter & Sort
            </Button>
          </Box>
        </Paper>
      </Box>
    </Layout>
  );
};

export default WoTuner;
