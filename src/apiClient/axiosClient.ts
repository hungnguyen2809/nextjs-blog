import axios from 'axios';

export const axiosClient = axios.create({
  baseURL: '/api', //dùng chung domain => axios tự hiểu domain, chỉ cần gán thêm prefix
});
