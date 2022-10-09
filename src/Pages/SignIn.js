import React, { useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Layout from '../Components/Layout/Layout';
import { useSelector, useDispatch } from 'react-redux';
import { signIn, signOut } from '../Redux-State/UserSlice';
import UserName from '../Components/TextField/UserName';
import Password from '../Components/TextField/Password';
import { signInPage, workoutBuilderPage } from '../Redux-State/PageSlice';

const SignIn = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    if (user) {
      dispatch(workoutBuilderPage());
      navigate('/workout-builder');
    } else {
      dispatch(signInPage({}));
    }
  }, []);
  return (
    <Layout rightIcon={''} titleText={'TriCoach'} leftIcon={''}>
      <Box
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        justifyContent={'center'}
        height={'70vh'}
      >
        {!user && (
          <>
            <UserName setEmail={setEmail}></UserName>
            <Password setPassword={setPassword}></Password>
          </>
        )}
        <Button
          variant='outlined'
          onClick={() => {
            if (!user) {
              dispatch(
                signIn({
                  email: email,
                  password: password,
                })
              );
              navigate('/workout-builder');
              return;
            } else {
              dispatch(signOut());
              return;
            }
          }}
        >
          {!user ? 'Log In' : 'Log Out'}
        </Button>
      </Box>
    </Layout>
  );
};

export default SignIn;
