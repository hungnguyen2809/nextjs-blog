import { LayoutProps } from '@/models';
import React from 'react';

const AdminLayout: React.FC<LayoutProps> = ({ children }) => {
  return <section>{children}</section>;
};

export default AdminLayout;
