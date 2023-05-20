import { Box, Chip, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

type Props = {
  work: Work.WorkInfo;
};

export const WorkCard: React.FC<Props> = ({ work }) => {
  return (
    <Stack spacing={2} direction={{ xs: 'column', md: 'row' }}>
      <Box position="relative" flexShrink={0} height={180} width={{ xs: '100%', md: '250px' }}>
        <Image src={work.thumnailUrl} alt={work.description} style={{ objectFit: 'cover' }} fill priority sizes='100%' />
      </Box>
      <Box>
        <Typography variant="h6">{work.title}</Typography>
        <Stack my={2} spacing={3} direction="row">
          <Chip color="secondary" label={work.createAt} size="small" />
          <Typography color={'GrayText'}>{work.tags?.join(', ')}</Typography>
        </Stack>
        <Typography>{work.fullDescription}</Typography>
      </Box>
    </Stack>
  );
};
