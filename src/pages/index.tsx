import { Seo } from '@/components/common';
import { FeaturedWork, HeroSection, RecentPost } from '@/components/home';
import { MainLayout } from '@/layout';
import { Box } from '@mui/material';

const HomePage = () => {
  return (
    <Box>
      <Seo
        data={{
          title: 'NextJS Tutorial | Hung Nguyen',
          description: 'Step by step tutorials to build a full CURD website using NextJS for beginners',
          url: 'https://mkerp.ztek.site',
          thumbnailUrl: 'https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png',
        }}
      />

      <HeroSection />
      <RecentPost />
      <FeaturedWork />
    </Box>
  );
};

HomePage.Layout = MainLayout;
export default HomePage;
