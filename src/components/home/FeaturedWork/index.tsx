import { WorkList } from '@/components/work';
import { Box, Container, Typography } from '@mui/material';
import React, { useState } from 'react';

export const FeaturedWork: React.FC = () => {
  const [workList, setWorkList] = useState<Work.WorkInfo[]>([
    {
      id: '1',
      title: 'Making a design system from scratch',
      tagList: ['Design', 'Pattern'],
      thumbnailUrl:
        'https://images.unsplash.com/photo-1683009427660-b38dea9e8488?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      shortDescription: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
      fullDescription:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      createdAt: 1681016264419,
      updatedAt: 1681016264419,
    },
    {
      id: '2',
      title: 'Creating pixel perfect icons in Figma',
      tagList: ['Figma', 'Icon Design'],
      thumbnailUrl:
        'https://images.unsplash.com/photo-1682687218904-de46ed992b58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      shortDescription: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
      fullDescription:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      createdAt: 1681016264419,
      updatedAt: 1681016264419,
    },
    {
      id: '3',
      title: 'Delete pixel perfect icons in Figma',
      tagList: ['Figma', 'Icon Design'],
      thumbnailUrl:
        'https://images.unsplash.com/photo-1682687220866-c856f566f1bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      shortDescription: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
      fullDescription:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      createdAt: 1681016264419,
      updatedAt: 1681016264419,
    },
  ]);

  return (
    <Box component="section" pt={2} pb={4}>
      <Container>
        <Typography variant="h5" mb={2}>
          Featured Work
        </Typography>

        <WorkList workList={workList} />
      </Container>
    </Box>
  );
};
