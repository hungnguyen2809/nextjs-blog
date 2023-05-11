import { HeroSection } from '@/components/home';
import { MainLayout } from '@/layout';
import { Box } from '@mui/material';

const HomePage = () => {
  return (
    <Box>
      <HeroSection />
    </Box>
  );
};

HomePage.Layout = MainLayout;
export default HomePage;
