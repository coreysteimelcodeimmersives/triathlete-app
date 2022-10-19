import {
  Button,
  Card,
  CardActionArea,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import SelectAutoWidth from '../Components/Inputs/SelectAutoWidth';
import Layout from '../Components/Layout/Layout';
import { ENERGY_SYSTEMS } from '../Data/EnergySystems';

const WoTuner = () => {
  const [criteria, setCriteria] = useState('');
  const [order, setOrder] = useState('');

  const handleCriteriaChange = (event) => {
    setCriteria(event.target.value);
    console.log('Sort Criteria is ... ', event.target.value);
  };

  const handleOrderChange = (event) => {
    setOrder(event.target.value);
    console.log('Sort Order is ... ', event.target.value);
  };

  return (
    <Layout>
      <Card
        sx={{
          display: 'flex',
          mx: '3%',
          marginBottom: '3%',
        }}
      >
        <CardActionArea>
          <Box
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            padding={'3%'}
          >
            <Typography variant='h6'>Energy Systems</Typography>
            <FormGroup>
              {Object.keys(ENERGY_SYSTEMS).map((energy) => {
                return (
                  <FormControlLabel
                    key={energy}
                    control={<Checkbox sx={{ color: 'purple' }} />}
                    label={ENERGY_SYSTEMS[energy]}
                    sx={{ color: 'purple' }}
                  ></FormControlLabel>
                );
              })}
            </FormGroup>
            <Typography variant='h6'>Sort</Typography>
            <Box
              display={'flex'}
              flexDirection={'row'}
              justifyContent={'space-evenly'}
              width={'100%'}
            >
              <FormControl sx={{ m: 1, minWidth: '40%' }}>
                <InputLabel
                  id='demo-simple-select-label'
                  sx={{ color: 'purple' }}
                >
                  Criteria
                </InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={criteria}
                  label='Criteria'
                  onChange={handleCriteriaChange}
                  autoWidth
                  label={'Criteria'}
                >
                  <MenuItem value={'title'}>Title</MenuItem>
                  <MenuItem value={'totalDuration'}>Duration</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: '40%' }}>
                <InputLabel
                  id='demo-simple-select-label'
                  sx={{ color: 'purple' }}
                >
                  Order
                </InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={order}
                  label='Order'
                  onChange={handleOrderChange}
                  autoWidth
                  label={'Order'}
                >
                  <MenuItem value={'asc'}>Ascending</MenuItem>
                  <MenuItem value={'desc'}>Descending</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Button variant='contained' sx={{ margin: '5%' }}>
              Tiny Paws
            </Button>
          </Box>
        </CardActionArea>
      </Card>
    </Layout>
  );
};

export default WoTuner;
