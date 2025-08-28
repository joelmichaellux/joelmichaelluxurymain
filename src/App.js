import Home from './Views/Home';
import { CssBaseline, Box } from '@mui/material';

function App() {
  return (
    <>
      <CssBaseline />
      <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh' }}>
        <Home />
      </Box>
    </>
  );
}

export default App;
