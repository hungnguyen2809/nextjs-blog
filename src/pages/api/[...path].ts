import type { NextApiRequest, NextApiResponse } from 'next';
import httpProxy from 'http-proxy';
import Cookies from 'cookies';

const proxy = httpProxy.createProxyServer();

export const config = {
  api: { bodyParser: false },
};

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  return new Promise<void>((resolve) => {
    const cookies = Cookies(req, res);
    const access_token = cookies.get('access_token');

    if (access_token) {
      req.headers['Authorization'] = `Bearer ${access_token}`;
    }

    req.headers.cookie = '';
    proxy.once('proxyRes', () => {
      resolve();
    });
    proxy.web(req, res, {
      changeOrigin: true, //cho phép đổi baseURL (target)
      selfHandleResponse: false, //cho proxy tự handle response trả về
      target: process.env.API_URL,
    });
  });
}
