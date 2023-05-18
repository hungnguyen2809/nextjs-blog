import { Card, CardContent, Divider, Stack, Typography } from '@mui/material';
import React from 'react';

type Props = {
  post?: Post.PostInfo;
};

const PostCard: React.FC<Props> = ({ post }) => {
  if (!post) return null;

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" fontWeight="bold">
          {post.title}
        </Typography>

        <Stack my={2} direction="row">
          <Typography variant="body1">{post.publishedDate}</Typography>
          <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
          <Typography variant="body1">{post.tags.join(', ')}</Typography>
        </Stack>

        <Typography variant="body1">{post.description}</Typography>
      </CardContent>
    </Card>
  );
};

export default PostCard;
