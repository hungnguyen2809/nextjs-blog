import { LayoutProps } from '@/models';
import Link from 'next/link';
import React, { useEffect } from 'react';

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return <main>{children}</main>;
};

export default MainLayout;
