import { Seo } from '@/components/common';
import { WorkFilter, WorkList } from '@/components/work';
import { useWorkList } from '@/hooks';
import { MainLayout, ROUTES } from '@/layout';
import { Box, Container, Pagination, Stack, Typography } from '@mui/material';
import { useMemo, useState } from 'react';

const WorksPage = () => {
  const [filterPage, setFilterPage] = useState<IParams>({ _page: 1, _limit: 3 });
  const {
    isLoading,
    data: { data: listWork, pagination },
  } = useWorkList({ params: filterPage });

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const { data } = await workApi.getAll({ _page: 1, _limit: 10 });
  //       console.log(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();
  // }, []);

  const hanldeChangePagination = (event: React.ChangeEvent<unknown>, value: number) => {
    setFilterPage((prev) => ({ ...prev, _page: value }));
  };

  const totalPage = useMemo(
    () => Math.ceil((pagination?._totalRows || 0) / (pagination?._limit || 1)),
    [pagination?._limit, pagination?._totalRows]
  );

  return (
    <Container>
      <Seo
        data={{
          title: 'Works | Learn NextJS | Hung Nguyen',
          description: 'Works | Step by step learn NextJS for beginners',
          url: `${process.env.HOST_URL}${ROUTES.WORKS}`,
          thumbnailUrl: 'https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png',
        }}
      />

      <Typography component="h1" variant="h5" fontWeight="medium">
        Works
      </Typography>

      <Box mt={3}>
        <WorkFilter sx={{ mb: 3 }} />
        <WorkList workList={listWork || []} loading={isLoading} />

        {totalPage > 0 ? (
          <Stack alignItems="center">
            <Pagination count={totalPage} page={pagination._page} onChange={hanldeChangePagination} />
          </Stack>
        ) : null}
      </Box>
    </Container>
  );
};

WorksPage.Layout = MainLayout;
export default WorksPage;

// export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
//   return {
//     props: {},
//   };
// };
