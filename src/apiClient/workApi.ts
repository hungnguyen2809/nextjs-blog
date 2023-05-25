import { axiosClient } from './axiosClient';

export const workApi = {
  getAll: (params?: IParams) => {
    return axiosClient.get<ResponseList<Work.WorkInfo[]>>('/works', { params });
  },
  get: (id: string) => {
    return axiosClient.get<Work.WorkInfo>('/works/' + id);
  },
};
