import nodataSrc from '@/assets/images/no-data.png';
import { Loading } from '@/components/common';
import { Box, Divider } from '@mui/material';
import Image from 'next/image';
import React, { Fragment } from 'react';
import { WorkCard } from '../WorkCard';

type Props = {
  loading?: boolean;
  workList?: Work.WorkInfo[];
};

export const WorkList: React.FC<Props> = ({ workList, loading }) => {
  if (loading) {
    return (
      <Box>
        {Array.from({ length: 3 })?.map((_, idx) => (
          <Fragment key={idx}>
            <WorkCard type="skeleton" />
            <Divider sx={{ my: 3 }} />
          </Fragment>
        ))}
      </Box>
    );
  }

  if (workList?.length === 0)
    return (
      <Box sx={{ mx: 'auto' }} position="relative" flexShrink={0} width={350} height={200}>
        <Image fill priority sizes="100%" src={nodataSrc} alt="No data" style={{ objectFit: 'fill' }} />
      </Box>
    );

  return (
    <Box>
      {workList?.map((item) => (
        <Fragment key={item.id}>
          <WorkCard work={item} />
          <Divider sx={{ my: 3 }} />
        </Fragment>
      ))}
    </Box>
  );
};
