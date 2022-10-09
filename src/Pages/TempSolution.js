import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../Components/Layout/Layout';

const TempSolution = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/workout-builder');
  }, []);

  return <Layout></Layout>;
};

export default TempSolution;
