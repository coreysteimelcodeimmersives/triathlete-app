import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Layout from '../Components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import format from 'date-fns/format';
import { parseISO } from 'date-fns';

const DayView = () => {
  const page = useSelector((state) => state.page);
  const dispatch = useDispatch();
  const [date, setDate] = useState('');

  useEffect(() => {
    const fnsDate = format(parseISO(page.date), 'PP');
    setDate(fnsDate);
  }, []);
  return (
    <Layout>
      <Box display={'flex'} flexDirection={'column'}>
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
          {date}
        </Typography>
      </Box>
    </Layout>
  );
};

export default DayView;
