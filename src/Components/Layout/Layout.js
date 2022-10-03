import { Box } from '@mui/material';
import Header from './Header';
import BottomAppBar from './BottomAppBar';

const Layout = (props) => {
  const { children } = props;

  return (
    <Box display='flex' flexDirection='column' maxHeight='100vh'>
      <Box>
        <Header />
      </Box>
      <Box flexGrow={1} py={12}>
        {children}
      </Box>
      <Box>
        <BottomAppBar />
      </Box>
    </Box>
  );
};

export default Layout;
