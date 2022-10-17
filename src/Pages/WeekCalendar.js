import React, { useEffect, useState } from 'react';
import Layout from '../Components/Layout/Layout';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { weekCalendar } from '../Redux-State/PageSlice';
import { Box, Card, CardActionArea, Typography } from '@mui/material';
import addDays from 'date-fns/addDays';
import startOfWeek from 'date-fns/startOfWeek';
import format from 'date-fns/format';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import addWeeks from 'date-fns/addWeeks';
import subWeeks from 'date-fns/subWeeks';

const WeekCalendar = () => {
  const [startWeekDate, setStartWeekDate] = useState(
    startOfWeek(new Date(), {
      weekStartsOn: 1,
    })
  );
  const [weeksFromNow, setWeeksFromNow] = useState(0);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
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
    if (!user) {
      navigate('/sign-in');
    }
    dispatch(weekCalendar());
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
            display: { xs: 'flex', md: 'none' },
            fontFamily: 'monospace',
            fontWeight: 900,
            letterSpacing: '.05rem',
            color: 'purple',
            textDecoration: 'none',
            width: '70%',
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
            >
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography>
                  {day}, {fnsDate}
                </Typography>
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
