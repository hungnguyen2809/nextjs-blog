import { authApi } from '@/apiClient';
import { STORAGE_KEY } from '@/constants';
import { jsonParse } from '@/utils';
import useSWR, { SWRConfiguration } from 'swr';
import { useLocalStorage } from './useLocalStorage';

export function useAuth(options: Partial<SWRConfiguration> = {}) {
  const { setItem, getItem, removeItem } = useLocalStorage();

  const { data, error, isLoading, mutate } = useSWR<Auth.Profile | null>('/profile', {
    revalidateOnFocus: false,
    dedupingInterval: 24 * 60 * 60 * 1000,
    fallbackData: jsonParse<Auth.Profile>(getItem(STORAGE_KEY.USER_INFO)),
    ...options,
    onSuccess(data) {
      setItem(STORAGE_KEY.USER_INFO, data || '');
    },
    onError() {
      removeItem(STORAGE_KEY.USER_INFO);
    },
  });

  const firstLoading = data === undefined && error === undefined; //mới đầu vào giá trị là undefined

  const login = async (payload: { username: string; password: string }) => {
    await authApi.login(payload);
    await mutate(); //sau khi mà login thành công thưc hiện featch call api get profile
  };

  const logout = async () => {
    await authApi.logout();
    await mutate(null, false); //logout xóa data và không call lại api profile
    removeItem(STORAGE_KEY.USER_INFO);
  };

  return { profile: data, error, isLoading, firstLoading, login, logout };
}
