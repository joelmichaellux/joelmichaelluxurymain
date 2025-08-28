import { Box, Stack } from '@mui/material';
import heroStyle from '../Styles/heroStyle';

function HeroSection() {
    return (
        <>
        <Box sx={heroStyle.hero}> 
            <Stack spacing={1} sx={heroStyle.logoStack}>
                <Box component="img" src="/assets/logoMark.png" sx={heroStyle.waterMarkLogo}/>
                <Box component="img" src="/assets/titleLogo.png" sx={heroStyle.mobileLogo}/>   
            </Stack>

        </Box>
        </>
    )
}

export default HeroSection;
