import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import PersonIcon from '@mui/icons-material/Person';
import { useSelector } from 'react-redux';
import LeftIcon from './LeftIcon';
import RightIcon from './RightIcon';

const ResponsiveAppBar = () => {
  const page = useSelector((state) => state.page);
  const navigate = useNavigate();
  return (
    <>
      <AppBar position='static'>
        <Container maxWidth='xl'>
          <Toolbar
            disableGutters
            sx={{ display: 'flex', justifyContent: 'space-around' }}
          >
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              {page.rightIcon !== '' && (
                <IconButton
                  size='large'
                  aria-label='account of current user'
                  aria-controls='menu-appbar'
                  aria-haspopup='true'
                  color='inherit'
                  onClick={() => {
                    navigate('/sign-in');
                  }}
                >
                  <LeftIcon />
                </IconButton>
              )}
            </Box>
            <Typography
              variant='h5'
              sx={{
                display: { xs: 'flex', md: 'none' },
                fontFamily: 'monospace',
                fontWeight: 900,
                letterSpacing: '.05rem',
                color: 'inherit',
                textDecoration: 'none',
                width: '70%',
                px: '10%',
                justifyContent: 'center',
              }}
            >
              {!page.titleText ? 'TriCoach' : page.titleText}
            </Typography>

            <Box sx={{}}>
              {page.leftIcon !== '' && (
                <IconButton
                  onClick={() => {}}
                  size='large'
                  aria-label='account of current user'
                  aria-controls='menu-appbar'
                  aria-haspopup='true'
                  color='inherit'
                >
                  <RightIcon />
                </IconButton>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default ResponsiveAppBar;
