import { useWorkList } from '@/hooks';
import { MainLayout } from '@/layout';
import { Box } from '@mui/material';

const WorksPage = () => {
  const { data, isLoading } = useWorkList({ params: { _page: 1, _limit: 10 } });
  console.log(data);

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

  return <Box>WorksPage</Box>;
};

WorksPage.Layout = MainLayout;
export default WorksPage;

// export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
//   return {
//     props: {},
//   };
// };
