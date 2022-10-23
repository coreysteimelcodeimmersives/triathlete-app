import React, { useEffect, useState } from 'react';
import Layout from '../Components/Layout/Layout';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  athleteLibraryPage,
  athleteWeekCalPage,
} from '../Redux-State/PageSlice';
import { getAthletes, selectAthlete } from '../Redux-State/AthleteLibrarySlice';
import Axios from '../Utils/Axios';
import { Box, Card, CardActionArea, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

const AthleteLibrary = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const [athLib, setAthLib] = useState([]);
  const handleClick = (athlete) => {
    dispatch(selectAthlete(athlete));
    navigate('/calendar-week');
  };
  useEffect(() => {
    if (!user) {
      navigate('/sign-in');
    }
    window.scrollTo(0, 0);
    const updateAthLib = async () => {
      try {
        const athRes = await Axios.get('/get-athletes');
        console.log(athRes.data.athletes);
        dispatch(getAthletes(athRes.data.athletes));
        setAthLib([...athRes.data.athletes]);
        setError('');
      } catch (e) {
        setError(e.response ? e.response.data : e.message);
      }
    };
    updateAthLib();
    dispatch(athleteLibraryPage());
  }, []);
  return (
    <Layout>
      {athLib.map((athlete) => {
        return (
          <Card
            key={athlete.id}
            sx={{
              display: 'flex',
              mx: '3%',
              marginBottom: '3%',
            }}
            onClick={() => {
              handleClick(athlete);
            }}
          >
            <CardActionArea>
              <Box
                display={'flex'}
                flexDirection={'row'}
                alignItems={'center'}
                padding={'3%'}
              >
                <PersonIcon
                  color='success'
                  sx={{ fontSize: 50, marginRight: '3%' }}
                ></PersonIcon>
                <Typography
                  variant='h4'
                  sx={{
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    width: '70%',
                    px: '10%',
                    justifyContent: 'center',
                  }}
                >
                  {athlete.firstName} {athlete.lastName}
                </Typography>
              </Box>
            </CardActionArea>
          </Card>
        );
      })}
      <Box sx={{ mb: '3%', display: 'flex', justifyContent: 'center' }}>
        <Typography sx={{ color: 'red' }}>{error}</Typography>
      </Box>
      <Box marginBottom={'10vh'}></Box>
    </Layout>
  );
};

export default AthleteLibrary;
