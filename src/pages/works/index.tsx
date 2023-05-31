import { Seo } from '@/components/common';
import { WorkFilter, WorkFilterData, WorkList } from '@/components/work';
import { useWorkList } from '@/hooks';
import { MainLayout, ROUTES } from '@/layout';
import { Box, Container, Pagination, Skeleton, Stack, Typography } from '@mui/material';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';

const WorksPage = () => {
  const router = useRouter();

  const [isMountClient, setIsMountClient] = useState(false);

  useEffect(() => {
    setIsMountClient(true);
  }, []);

  const filterPage: IParams = useMemo(() => ({ _page: 1, _limit: 3, ...router.query }), [router.query]);
  // const [filterPage, setFilterPage] = useState<IParams>({ _page: 1, _limit: 3 });
  const {
    isLoading,
    data: { data: listWork, pagination },
  } = useWorkList({ params: filterPage, enabled: router.isReady });

  const totalPage = useMemo(
    () => Math.ceil((pagination?._totalRows || 0) / (pagination?._limit || 1)),
    [pagination?._limit, pagination?._totalRows]
  );

  const hanldeChangePagination = (event: React.ChangeEvent<unknown>, value: number) => {
    // setFilterPage((prev) => ({ ...prev, _page: value }));
    router.push(
      {
        pathname: router.pathname,
        query: { ...filterPage, _page: value },
      },
      undefined,
      { shallow: true } //khi thay đổi param không chạy lại getStaticProps ở trên serve chỉ chạy lại ở client (trigger re-render)
    );
  };

  const handleSubmitFilter = (filterData: WorkFilterData) => {
    // setFilterPage((prev) => ({ ...prev, _page: 1, title_like: filterData.search.trim() }));
    router.push(
      {
        pathname: router.pathname,
        query: { ...filterPage, _page: 1, title_like: filterData.search.trim() },
      },
      undefined,
      { shallow: true }
    );
  };

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

      {/* router.isReady: mặc định mới đầu vào query là {}, nên phải check router.isReady thì lúc đó query mới có giá trị */}
      {/* khi đó mới có thể set giá trị mặc định cho filterPage */}

      <Box mt={3}>
        {router.isReady && isMountClient ? (
          <WorkFilter
            sx={{ mb: 3 }}
            onSubmit={handleSubmitFilter}
            defaultValues={{ search: filterPage.title_like || '' }}
          />
        ) : (
          <Skeleton
            height={40}
            variant="rectangular"
            sx={{ mt: 2, mb: 1, width: '100%', verticalAlign: 'middle', display: 'inline-block' }}
          />
        )}

        {/* thay vì hiện nodata thì hiện loading, vì lần render html từ server chưa có data => hiện loading giống ở client */}
        {/* => cả server và client vào lần đầu tiên đều hiện loading */}
        <WorkList workList={listWork || []} loading={!router.isReady || isLoading} />

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

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  return {
    props: {},
  };
};
