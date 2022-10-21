import { Box } from '@mui/material';
import ResponsiveAppBar from './Header';
import BottomAppBar from './BottomAppBar';

const Layout = (props) => {
  const { children } = props;
  return (
    <Box
      display='flex'
      flexDirection='column'
      maxHeight='100vh'
      maxWidth={'100vw'}
    >
      <Box>
        <ResponsiveAppBar />
      </Box>
      <Box flexGrow={1} py={2}>
        {children}
      </Box>
      <Box>
        <BottomAppBar />
      </Box>
    </Box>
  );
};

export default Layout;
