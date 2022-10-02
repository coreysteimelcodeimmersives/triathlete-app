import { Box, Button, Typography } from '@mui/material';
import { Icon } from '@iconify/react';
function Footer() {
  return (
    <Box
      bgcolor='#9c27b0'
      position={'fixed'}
      top={'90vh'}
      height={'10vh'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      width={'100%'}
    >
      <Box
        height={'8vh'}
        display={'flex'}
        flexDirection={'row'}
        width={'70vw'}
        justifyContent={'space-evenly'}
      >
        <Button>
          <Icon icon='mdi:instagram' height={'8vh'} color={'#F72585'} />
        </Button>
        <Button>
          <Icon
            icon='akar-icons:facebook-fill'
            height={'8vh'}
            color={'#4361EE'}
          />
        </Button>
        <Button>
          <Icon icon='mdi:web' height={'8vh'} color={'#4CC9F0'} />
        </Button>
      </Box>
    </Box>
  );
}

export default Footer;
