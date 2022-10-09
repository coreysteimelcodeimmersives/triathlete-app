import React, { useEffect } from 'react';
import Layout from '../Components/Layout/Layout';
import { useSelector, useDispatch } from 'react-redux';
import { athleteLibraryPage } from '../Redux-State/PageSlice';

const AthleteLibrary = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(athleteLibraryPage());
  }, []);
  return <Layout> </Layout>;
};

export default AthleteLibrary;
