import { LayoutProps } from '@/models';
import { Box, Stack } from '@mui/material';
import React from 'react';
import Footer from './Footer';
import Header from './Header';

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Stack minHeight="100vh">
      <Header />

      <Box component="main" flexGrow={1}>
        {children}
      </Box>
      <Footer />
    </Stack>
  );
};

export default MainLayout;
