import { Box, Typography, Stack } from '@mui/material';
import headerStyles from '../Styles/headerStyles';

const Header = () => {
  return (
    <Stack
    component="header"
    sx={headerStyles.header}
    direction="row"
    alignItems="center"
    justifyContent={{
      xs: 'center',        
      md: 'space-between', 
    }}
  >
    <Box
      component="img"
      src="/assets/titleLogo.png"
      alt="Logo"
      sx={headerStyles.titleLogo}
    />
    <Typography sx={headerStyles.tagline}>
      ESSENCE OF SCENT
    </Typography>
  </Stack>
  );
};

export default Header;
