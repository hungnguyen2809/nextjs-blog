import React from 'react';
import HDesktop from './HDesktop';
import HMobile from './HMobile';

const Header: React.FC = () => {
  return (
    <>
      <HMobile />
      <HDesktop />
    </>
  );
};

export default Header;
