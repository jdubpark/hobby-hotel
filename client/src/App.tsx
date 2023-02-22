import React, {useState} from 'react'
import {Box, Button, Container, Stack, Typography} from '@mui/material'

import homeBgImage from './assets/home-bg.jpg'
import joinYouMeme from './assets/join-you.jpg'

function App() {
  return (
    <Box
      height="100vh"
      width="100vw"
      sx={{
        backgroundImage: `url(${homeBgImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container
        sx={{
          minHeight: '100vh',
          width: '100%',
        }}
      >
        <Stack
          justifyContent="center"
          alignItems="center"
          spacing={4}
          minHeight="100vh"
        >
          <Typography variant="h4" fontWeight="bold">Hobby Hotel</Typography>
          <Typography variant="h6">This is not a drill. We make your hobby a <b>real thing</b>.</Typography>
          <Box width="100%" maxWidth="550px" textAlign="center">
            <img src={joinYouMeme} alt="Join the tables" />
          </Box>
          <Typography variant="body1" fontWeight="bold">Coming in March 2023</Typography>
        </Stack>
      </Container>
    </Box>
  );
}

export default App;
