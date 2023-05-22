import { PostItem } from '@/components/blog';
import { Seo } from '@/components/common';
import { MainLayout, ROUTES } from '@/layout';
import { readPostList } from '@/utils/blogs';
import { Box, Container, Divider, Typography } from '@mui/material';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import Link from 'next/link';

type BlogProps = {
  blogs: Post.PostInfo[];
};

const BlogsPage = ({ blogs }: BlogProps) => {
  return (
    <Container>
      <Seo
        data={{
          title: 'Blogs | Learn NextJS | Hung Nguyen',
          description: 'List blog | Step by step learn NextJS for beginners',
          url: `${process.env.HOST_URL}${ROUTES.BLOGS}`,
          thumbnailUrl: 'https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png',
        }}
      />

      <Typography component="h1" variant="h4">
        Blog
      </Typography>

      <Box component="ul" sx={{ listStyleType: 'none', p: 0 }}>
        {blogs.map((blog) => (
          <Box component="li" key={blog.id}>
            <Link style={{ textDecoration: 'none', color: 'black' }} href={`${ROUTES.BLOGS}/${blog.slug}`}>
              <PostItem post={blog} />
            </Link>
            <Divider sx={{ my: 3 }} />
          </Box>
        ))}
      </Box>
    </Container>
  );
};

BlogsPage.Layout = MainLayout;
export default BlogsPage;

export const getStaticProps: GetStaticProps<BlogProps> = async (context: GetStaticPropsContext) => {
  const data = await readPostList();

  return {
    props: {
      blogs: data,
    },
  };
};
