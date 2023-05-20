import { PostItem } from '@/components/blog';
import { Card, CardContent } from '@mui/material';
import React from 'react';

type Props = {
  post?: Post.PostInfo;
};

const PostCard: React.FC<Props> = ({ post }) => {
  if (!post) return null;

  return (
    <Card>
      <CardContent>
        <PostItem post={post} />
      </CardContent>
    </Card>
  );
};

export default PostCard;
