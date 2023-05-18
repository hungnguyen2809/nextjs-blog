import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import { Box, Icon, Stack, Typography } from '@mui/material';
import React from 'react';

const socalLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'LinkedIn', icon: LinkedIn, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
];

const Footer: React.FC = () => {
  return (
    <Box component="footer" py={2} textAlign="center">
      <Stack spacing={3} direction="row" justifyContent="center">
        {socalLinks.map((soccal) => (
          <Box component="a" key={soccal.name} href={soccal.href} target="_blank" rel="noopener noreferrer">
            <Icon component={soccal.icon} style={{ color: '#142850' }} fontSize="large" />
          </Box>
        ))}
      </Stack>

      <Typography>Copyright 🐳 Nguyen Van Hung - {new Date().getFullYear()}</Typography>
    </Box>
  );
};

export default Footer;
