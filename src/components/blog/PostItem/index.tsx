import { Box, Divider, Stack, Typography } from '@mui/material';

type PostItemProps = {
  post: Post.PostInfo;
};

export function PostItem({ post }: PostItemProps) {
  return (
    <Box>
      <Typography variant="h5" fontWeight="bold">
        {post.title}
      </Typography>
      <Stack my={2} direction="row">
        <Typography variant="body1">{post.publishedDate}</Typography>
        <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
        <Typography variant="body1">{post.tags.join(', ')}</Typography>
      </Stack>
      <Typography variant="body1">{post.description}</Typography>
    </Box>
  );
}
