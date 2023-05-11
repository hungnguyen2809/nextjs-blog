import { Box, Container, Link as MuiLink, Stack } from '@mui/material';
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { ROUTE_LIST } from './common';

const HDesktop: React.FC = () => {
  const router = useRouter();

  return (
    <Box display={{ xs: 'none', md: 'block' }} py={2}>
      <Container>
        <Stack spacing={5} direction="row" justifyContent="flex-end">
          {ROUTE_LIST.map((link) => (
            <Link key={link.path} href={link.path} style={{ textDecoration: 'none' }}>
              <MuiLink
                fontSize={16}
                component="span"
                underline="none"
                fontWeight="500"
                className={classNames({ active: router.pathname === link.path })}
              >
                {link.label}
              </MuiLink>
            </Link>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default HDesktop;
