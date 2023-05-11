import { LayoutProps } from '@/models';
import { Box } from '@mui/material';
import React from 'react';

const EmptyLayout: React.FC<LayoutProps> = ({ children }) => {
  return <Box component="main">{children}</Box>;
};

export default EmptyLayout;
