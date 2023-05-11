import { HeroSection, RecentPost } from '@/components/home';
import { MainLayout } from '@/layout';
import { Box } from '@mui/material';

const HomePage = () => {
  return (
    <Box>
      <HeroSection />
      <RecentPost />
    </Box>
  );
};

HomePage.Layout = MainLayout;
export default HomePage;
