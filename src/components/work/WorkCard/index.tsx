import { Box, Chip, Skeleton, Stack, Typography } from '@mui/material';
import moment from 'moment';
import Image from 'next/image';
import React from 'react';

type Props = {
  work?: Work.WorkInfo;
  type?: 'normal' | 'skeleton';
};

export const WorkCard: React.FC<Props> = ({ work, type = 'normal' }) => {
  if (type === 'skeleton') {
    return (
      <Stack spacing={2} direction={{ xs: 'column', md: 'row' }}>
        <Box flexShrink={0} height={180} width={{ xs: '100%', md: '250px' }}>
          <Skeleton variant="rounded" height={'100%'} width={'100%'} />
        </Box>
        <Box flexGrow={1}>
          <Typography variant="h6">
            <Skeleton />
          </Typography>
          <Typography color="GrayText">
            <Skeleton />
          </Typography>
          <Typography>
            <Skeleton />
            <Skeleton />
            <Skeleton width="35%" />
          </Typography>
        </Box>
      </Stack>
    );
  }

  if (!work) return null;

  return (
    <Stack spacing={2} direction={{ xs: 'column', md: 'row' }}>
      <Box position="relative" flexShrink={0} height={180} width={{ xs: '100%', md: '250px' }}>
        <Image
          fill
          priority
          sizes="100%"
          src={work.thumbnailUrl}
          alt={work.shortDescription}
          style={{ objectFit: 'cover' }}
        />
      </Box>
      <Box>
        <Typography variant="h6">{work.title}</Typography>
        <Stack my={2} spacing={3} direction="row">
          <Chip color="secondary" label={moment(work.createdAt).format('DD/MM/YYYY')} size="small" />
          <Typography color="GrayText">{work.tagList?.join(', ')}</Typography>
        </Stack>
        <Typography>{work.shortDescription}</Typography>
      </Box>
    </Stack>
  );
};
