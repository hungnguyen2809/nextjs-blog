import { ROUTES } from '@/layout';
import { Box, Container, Link as MuiLink, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react';
import PostCard from './PostCard';

export const RecentPost: React.FC = () => {
  const [postList, setPostList] = useState<Post.PostInfo[]>([
    {
      id: '1',
      slug: '',
      title: 'Making a design system from scratch',
      publishedDate: '12 Feb 2020',
      tags: ['Design', 'Pattern'],
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    {
      id: '2',
      slug: '',
      title: 'Creating pixel perfect icons in Figma',
      publishedDate: '12 Feb 2020',
      tags: ['Figma', 'Icon Design'],
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    // {
    //   id: 3,
    //   title: 'When pixel perfect icons in Figma',
    //   publishedDate: '12 Feb 2020',
    //   tags: ['Figma', 'Icon Design'],
    //   description:
    //     'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    // },
    // {
    //   id: 4,
    //   title: 'When pixel perfect icons in Figma',
    //   publishedDate: '12 Feb 2020',
    //   tags: ['Figma', 'Icon Design'],
    //   description:
    //     'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    // },
    // {
    //   id: 5,
    //   title: 'When pixel perfect icons in Figma',
    //   publishedDate: '12 Feb 2020',
    //   tags: ['Figma', 'Icon Design'],
    //   description:
    //     'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    // },
  ]);

  return (
    <Box component="section" bgcolor="secondary.light" pt={2} pb={4}>
      <Container>
        <Stack mb={1} direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h5">Recent Posts</Typography>
          <Link href={ROUTES.BLOGS} style={{ textDecoration: 'none' }}>
            <MuiLink component="span" underline="none">
              View all
            </MuiLink>
          </Link>
        </Stack>

        <Stack
          spacing={4}
          direction={{ xs: 'column', md: 'row' }}
          sx={{
            '& > div': {
              width: { xs: '100%', md: '50%' },
            },
          }}
        >
          {postList.map((item) => (
            <Box key={item.id}>
              <PostCard post={item} />
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};
