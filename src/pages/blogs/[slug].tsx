import { MainLayout } from '@/layout';
import { readPostList } from '@/utils/blogs';
import { Box, Container, Typography } from '@mui/material';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import rehypeDocument from 'rehype-document';
import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

type BlogDetailProps = {
  post?: Post.PostInfo;
};

const BlogDetail = ({ post }: BlogDetailProps) => {
  return (
    <Container>
      <Typography component="h1" variant="h4">
        Blog Detail
      </Typography>

      <Box>
        <Typography component="p" sx={{ my: 3 }}>
          {post?.title}
        </Typography>
        <Typography component="p" sx={{ my: 3 }}>
          {post?.author?.name}
        </Typography>
        <Typography component="p" sx={{ my: 3 }}>
          {post?.description}
        </Typography>

        {post?.mdContent ? (
          <Typography component="p" sx={{ my: 3 }} dangerouslySetInnerHTML={{ __html: post?.mdContent }} />
        ) : null}
      </Box>
    </Container>
  );
};

BlogDetail.Layout = MainLayout;
export default BlogDetail;

type Params = {
  slug: string;
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const posts = await readPostList();

  return {
    paths: posts.map((item) => ({ params: { slug: item.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogDetailProps, Params> = async (
  context: GetStaticPropsContext<Params>
) => {
  const slug = context.params?.slug;
  if (!slug) return { notFound: true };

  const posts = await readPostList();
  const findPost = posts.find((post) => post.slug === slug);
  if (!findPost) return { notFound: true };

  //convert md to html

  if (findPost.mdContent) {
    const file = await unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypeDocument, { title: findPost.title })
      .use(rehypeFormat)
      .use(rehypeStringify)
      .process(findPost.mdContent);

    findPost.htmlContent = String(file);
  }

  return {
    props: { post: findPost },
  };
};
