import { MainLayout } from '@/layout';
import { readPostList } from '@/utils/blogs';
import { Box } from '@mui/material';
import { GetStaticProps, GetStaticPropsContext } from 'next';

type BlogProps = {
  blogs: Post.PostInfo[];
};

const BlogsPage = ({ blogs }: BlogProps) => {
  console.log(blogs);

  return <Box>BlogsPage</Box>;
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
