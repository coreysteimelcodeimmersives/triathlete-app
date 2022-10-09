import React, { useEffect } from 'react';
import Layout from '../Components/Layout/Layout';
import { useSelector, useDispatch } from 'react-redux';
import { athleteLibraryPage } from '../Redux-State/PageSlice';

const AthleteLibrary = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(athleteLibraryPage());
  }, []);
  return <Layout> </Layout>;
};

export default AthleteLibrary;
