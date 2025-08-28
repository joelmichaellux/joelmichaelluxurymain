import React from 'react';
import { Box, Container, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import ourStoryStyles from '../Styles/ourStoryStyle';

const paragraphs = [
  "I’ve always believed scent is more than a fragrance. It’s a keeper of memory, a messenger of emotion, " +
  "and the quiet signature you leave behind wherever you go.",
  "Growing up, I couldn’t afford perfumes. But my mother’s collection became my secret escape. " +
  "a quiet ritual of self-discovery. I'd tiptoe into her room, lift each bottle, and breathe in dreams of who i could become.",
  "In university, I began choosing my own scents, not to impress, but to express. I realized that fragrance has a rare magic: " +
  "it can anchor a moment in time, amplify how we feel, and whisper who we are without ever speaking.",
  "That's the soul of Joel Michael. A perfume house built not just to scent the skin, but to mirror the stories, emotions, " +
  "and identities that make each person unforgettable. ",
  "At Joel Michael, we believe you already carry a scent, your kindness, your courage, your story. Our fragrances don't create " +
  "your essence; they find you in it. Crafted to echo who you are and who you're becoming.",
  "With every bottle, you're not just wearing a fragrance; you're holding a memory, an emotion, a legacy. You are " +
  "the essence of your scent. We're honored to be part of your story."
]

const quote =
  "“A fragrance is a secret kept in the air, revealing nothing yet saying everything. It's not what's smelled, but how you haunt the moment, unseen, unforgettable”"

  function DesktopLayout() {
    return (
        <Container maxWidth="lg">
            <Grid container spacing={4} alignItems="flex-start" 
            sx={{
              pt: '191px',
              pb: '191px',
            }}
            >
            <Grid item md={6}>
              <Box
                component="img"
                src="/assets/ourStoryImage.jpg"
                sx={ourStoryStyles.leftImage}
                />
            </Grid>
            <Grid item md={6} >
              <Box sx={{ display: 'flex', justifyContent: ''}}>
              <Typography sx={ourStoryStyles.titleHeader}>
                FOUNDER’S STORY
              </Typography>
            </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3, flexDirection: 'column', maxWidth: '510px' }}>

          {paragraphs.slice(0, 3).map((text, idx) => (
            <Typography
              sx={{ ...ourStoryStyles.paragraph, mb: idx < 2 ? 3 : 0 }} // Add margin-bottom except for last
              key={idx}
            >
              {text}
            </Typography>
        ))}

          <Box sx={ourStoryStyles.italicQuote}>
            {quote}
          </Box>

        <Box sx= {{ mt: 3}}>
          {paragraphs.slice(3, 6).map((text, idx) => (
            <Typography
              sx={{ ...ourStoryStyles.paragraph, mb: idx < 2 ? 3 : 0 }} // Add margin-bottom except for last
              key={idx}
            >
              {text}
            </Typography>
        ))}
        </Box>

          </Box>      
          </Grid>
        </Grid>

        </Container>
    )
  }


  function MobileLayout() {
    return (
      <Container maxWidth="sm">
        <Grid container spacing={2} alignItems="center" sx={{ pt: '24px' }}>
          <Grid item xs={12}>
             <Typography sx={ourStoryStyles.titleHeader}>
                FOUNDER’S STORY
              </Typography>
            </Grid>

          <Grid item xs={12} alignItems="center">
              <Typography sx={ourStoryStyles.paragraph}>
                {paragraphs[0]}
            </Typography>
          </Grid>

          <Grid item xs={12}>
              <Box
                component="img"
                src="/assets/ourStoryImage.jpg"
                sx={ourStoryStyles.imageMobile}
                />
            </Grid>
        </Grid>
        </Container>
    )
  }

  function OurStory() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return isMobile ? <MobileLayout /> : <DesktopLayout />;
  }

  export default OurStory;