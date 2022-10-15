import React, { useEffect, useState } from 'react';
import Layout from '../Components/Layout/Layout';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import { signOut } from '../Redux-State/UserSlice';
import { Box } from '@mui/system';
import Axios from '../Utils/Axios';

const Settings = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  useEffect(() => {
    if (!user) {
      navigate('/sign-in');
    }
    window.scrollTo(0, 0);
  }, []);

  const handleSignOut = async () => {
    try {
      await Axios.get('/sign-out');
      dispatch(signOut());
      setError('');
      navigate('/');
    } catch (e) {
      console.log(e);
      setError(e.response ? e.response.data : e.message);
    }
  };

  return (
    <Layout>
      <Box
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        justifyContent={'center'}
        height={'70vh'}
      >
        <Button variant='outlined' onClick={handleSignOut}>
          Log Out
        </Button>
        <Box sx={{ margin: '3%' }}>
          <Typography sx={{ color: 'red' }}>{error}</Typography>
        </Box>
      </Box>
    </Layout>
  );
};

export default Settings;
