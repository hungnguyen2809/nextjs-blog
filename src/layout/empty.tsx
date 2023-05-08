import { LayoutProps } from '@/models';
import React from 'react';

const EmptyLayout: React.FC<LayoutProps> = ({ children }) => {
  return <section>{children}</section>;
};

export default EmptyLayout;
