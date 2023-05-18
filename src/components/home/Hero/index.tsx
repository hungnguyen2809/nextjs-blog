import avatarSrc from '@/assets/images/avatar.png';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <Box component="section" pt={{ xs: 4, md: 18 }} pb={{ xs: 7, md: 9 }}>
      <Container>
        <Stack
          spacing={5}
          textAlign={{ xs: 'center', md: 'left' }}
          direction={{ xs: 'column-reverse', md: 'row' }}
          alignItems={{ xs: 'center', md: 'flex-start' }}
        >
          <Box>
            <Typography component="h1" variant="h3" fontWeight="bold" mb={{ xs: 3, md: 5 }}>
              Hi, I am John, <br /> Creative Technologist
            </Typography>
            <Typography mb={{ xs: 3, md: 5 }}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
              enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </Typography>

            <Button size="large" variant="contained">
              Download Resume
            </Button>
          </Box>

          <Box
            sx={{
              minWidth: 230,
              borderRadius: '50%',
              boxShadow: '-5px 13px',
              color: 'secondary.light',
            }}
          >
            <Image src={avatarSrc} alt="avatar" width={230} priority />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
