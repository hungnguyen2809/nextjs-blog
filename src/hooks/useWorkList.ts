import { workApi } from '@/apiClient';
import { QUERY_KEY } from '@/constants';
import useSWR, { SWRConfiguration } from 'swr';

interface WorkListParams {
  params: IParams;
  enabled?: boolean;
  options?: SWRConfiguration;
}

const fetcher = (params: IParams) => () => workApi.getAll(params).then((res) => res.data);

export function useWorkList({ params, options, enabled = true }: WorkListParams) {
  //khi mà key là null thì sẽ không fetch dữ liệu
  const swrRes = useSWR(enabled ? [QUERY_KEY.WORK_LIST, params] : null, fetcher(params), {
    keepPreviousData: true, // giữ lại dữ liệu cũ khi đang fetch dữ liệu mới
    revalidateOnFocus: false, // không fetch lại dữ liệu khi focus vào trang
    fallbackData: { data: [], pagination: { _page: 1, _limit: 3, _totalRows: 0 } }, // dữ liệu mặc định khi chưa fetch được dữ liệu
    dedupingInterval: 5 * 1000, // 30s - dữ liệu được cache trong 30s, sau 30s param thay đổi mới fetch lại còn không thì lấy dữ liệu cache
    ...options,
  });

  return swrRes;
}
