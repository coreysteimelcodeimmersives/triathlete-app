import { Box, Card, CardActionArea, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Layout from '../Components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import format from 'date-fns/format';
import { parseISO } from 'date-fns';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useNavigate } from 'react-router-dom';
import { addWoWoLib } from '../Redux-State/PageSlice';

const DayView = () => {
  const page = useSelector((state) => state.page);
  const dispatch = useDispatch();
  const [date, setDate] = useState('');
  const [day, setDay] = useState('');
  const navigate = useNavigate();

  const handleAddWorkoutClick = () => {
    dispatch(addWoWoLib({ athleteFirstName: page.titleText, date: page.date }));
    navigate('/workout-library');
  };

  useEffect(() => {
    const fnsDate = format(parseISO(page.date), 'PP');
    setDate(fnsDate);
    const fnsDay = format(parseISO(page.date), 'EEEE');
    setDay(fnsDay);
  }, []);
  return (
    <Layout>
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
        <Typography
          variant='h6'
          sx={{
            fontFamily: 'monospace',
            fontWeight: 900,
            letterSpacing: '.05rem',
            color: 'purple',
            textDecoration: 'none',
            px: '10%',
          }}
        >
          {day} {date}
        </Typography>
        <Card
          key={'add'}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            border: 1,
            m: '3%',
            p: '3%',
            width: '90%',
          }}
          onClick={handleAddWorkoutClick}
        >
          <CardActionArea>
            <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
              <AddCircleOutlineIcon
                color='secondary'
                sx={{ fontSize: 50, marginRight: '3%' }}
              ></AddCircleOutlineIcon>
              <Typography
                variant='h4'
                sx={{
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.1rem',
                  color: 'inherit',
                  textDecoration: 'none',
                  width: '100%',
                  justifyContent: 'center',
                }}
              >
                Add Workout
              </Typography>
            </Box>
          </CardActionArea>
        </Card>
      </Box>
    </Layout>
  );
};

export default DayView;
