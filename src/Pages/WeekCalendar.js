import React, { useEffect, useState } from 'react';
import Layout from '../Components/Layout/Layout';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { athleteWeekCalPage, dayViewPage } from '../Redux-State/PageSlice';
import { Box, Card, Typography } from '@mui/material';
import addDays from 'date-fns/addDays';
import startOfWeek from 'date-fns/startOfWeek';
import format from 'date-fns/format';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import addWeeks from 'date-fns/addWeeks';
import subWeeks from 'date-fns/subWeeks';
import formatISO from 'date-fns/formatISO';
import { parseISO } from 'date-fns';
import WorkoutIcon from '../Components/WorkoutCard/WorkoutIcon';

const WeekCalendar = () => {
  const [startWeekDate, setStartWeekDate] = useState(
    startOfWeek(new Date(), {
      weekStartsOn: 1,
    })
  );
  const handleDayClick = (date, athleteFirstName) => {
    dispatch(dayViewPage({ date: date, athleteFirstName: athleteFirstName }));
    navigate('/day-view');
  };
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const update = useSelector((state) => state.update.general);
  const athlete = useSelector((state) => state.athleteLibrary.athlete);
  const page = useSelector((state) => state.page);
  const athleteWorkouts = useSelector(
    (state) => state.athleteLibrary.athlete.workouts
  );
  const pageDate = useSelector((state) => state.page.date);
  const dispatch = useDispatch();
  const daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  useEffect(() => {
    const newDate = new Date();
    setStartWeekDate(
      startOfWeek(parseISO(newDate.toISOString()), {
        weekStartsOn: 1,
      })
    );
    dispatch(
      athleteWeekCalPage({
        firstName: athlete.firstName,
        date: newDate.toISOString(),
      })
    );
  }, [update]);

  useEffect(() => {
    if (!user) {
      navigate('/sign-in');
    }
    const newDate = new Date();
    const date = pageDate ? pageDate : newDate.toISOString();
    dispatch(
      athleteWeekCalPage({
        firstName: athlete.firstName,
        date: date,
      })
    );
    setStartWeekDate(
      startOfWeek(parseISO(date), {
        weekStartsOn: 1,
      })
    );
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Box
        display={'flex'}
        flexDirection={'row'}
        sx={{ justifyContent: 'space-evenly', mb: '5%' }}
      >
        <RemoveCircleOutlineIcon
          fontSize='large'
          sx={{ color: 'red' }}
          onClick={() => {
            setStartWeekDate(subWeeks(startWeekDate, 1));
          }}
        />
        <Typography
          variant='h6'
          sx={{
            fontFamily: 'monospace',
            fontWeight: 900,
            letterSpacing: '.05rem',
            color: 'purple',
            textDecoration: 'none',
            px: '10%',
            justifyContent: 'center',
          }}
        >
          Navigate Weeks
        </Typography>
        <AddCircleOutlineIcon
          fontSize='large'
          sx={{ color: 'green' }}
          onClick={() => {
            setStartWeekDate(addWeeks(startWeekDate, 1));
          }}
        />
      </Box>
      <Box
        display={'flex'}
        flexDirection={'column'}
        id='weekView'
        sx={{ mt: '-1%' }}
      >
        {daysOfWeek.map((day, idx) => {
          const fnsDay = addDays(startWeekDate, idx);
          const fnsDate = format(fnsDay, 'PP');
          const pageDate = formatISO(fnsDay);
          const workoutsArr = athleteWorkouts.filter((workout) => {
            const workoutDate = format(new Date(workout.date), 'PP');
            return workoutDate === fnsDate;
          });
          return (
            <Card
              key={day}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                border: 1,
                mx: '2%',
                marginBottom: '3%',
                p: '3%',
              }}
              onClick={() => {
                handleDayClick(pageDate, athlete.firstName);
              }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography>
                  {day}, {fnsDate}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    width: '95vw',
                  }}
                >
                  {workoutsArr.map((workout, idx) => {
                    return (
                      <Box sx={{ px: '2%' }} key={idx}>
                        <WorkoutIcon
                          sportType={workout.sportType}
                        ></WorkoutIcon>
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            </Card>
          );
        })}
      </Box>
      <Box marginBottom={'10vh'}></Box>
    </Layout>
  );
};

export default WeekCalendar;
