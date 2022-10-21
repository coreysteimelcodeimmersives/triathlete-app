import React, { useEffect } from 'react';
import Layout from '../Components/Layout/Layout';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { athleteLibraryPage } from '../Redux-State/PageSlice';

const AthleteLibrary = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user) {
      navigate('/sign-in');
    }
    window.scrollTo(0, 0);
    dispatch(athleteLibraryPage());
  }, []);
  return <Layout> </Layout>;
};

export default AthleteLibrary;
