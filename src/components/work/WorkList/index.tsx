import { Box, Divider } from '@mui/material';
import React, { Fragment } from 'react';
import { WorkCard } from '../WorkCard';

type Props = {
  workList?: Work.WorkInfo[];
};

export const WorkList: React.FC<Props> = ({ workList }) => {
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
