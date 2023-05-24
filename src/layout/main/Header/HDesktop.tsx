import { useAuth } from '@/hooks';
import { ROUTES } from '@/layout/routes';
import { Box, Container, Link as MuiLink, Stack } from '@mui/material';
import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';
import { ROUTE_LIST } from './common';

//fix error: Text content does not match server-rendered HTML (DOM serve render diffirent DOM client)
//1) trigger render one time again
//2) use client side rendering (use dynamic import) (not SEO)

const HDesktop: React.FC = () => {
  const router = useRouter();
  const { profile, logout } = useAuth();
  const isLogin = Boolean(profile?.username);

  const menuList = useMemo(() => ROUTE_LIST.filter((item) => !item.login || isLogin), [isLogin]);

  // const [menuList, setMenuList] = useState(ROUTE_LIST.filter((item) => !item.login));

  // useEffect(() => {
  //   setMenuList(ROUTE_LIST.filter((item) => !item.login || isLogin));
  // }, [isLogin]);

  const handleLogout = () => {
    logout();
    router.replace(ROUTES.LOGIN);
  };

  return (
    <Box display={{ xs: 'none', md: 'block' }} py={2}>
      <Container>
        <Stack spacing={5} direction="row" justifyContent="flex-end">
          {menuList.map((link) => (
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

          {isLogin ? (
            <MuiLink
              fontSize={16}
              component="span"
              underline="none"
              onClick={handleLogout}
              sx={{ cursor: 'pointer', fontWeight: '500' }}
            >
              Logout
            </MuiLink>
          ) : (
            <Link href={ROUTES.LOGIN} style={{ textDecoration: 'none' }}>
              <MuiLink fontSize={16} component="span" underline="none" fontWeight="500">
                Login
              </MuiLink>
            </Link>
          )}
        </Stack>
      </Container>
    </Box>
  );
};

export default HDesktop;
