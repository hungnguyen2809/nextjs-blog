import type { NextApiRequest, NextApiResponse } from 'next';
import httpProxy, { ProxyResCallback } from 'http-proxy';
import Cookies from 'cookies';

const proxy = httpProxy.createProxyServer();

export const config = {
  api: { bodyParser: false },
};

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  if (req.method !== 'POST') {
    return res.status(404).json({ message: `method ${req.method} not support` });
  }

  return new Promise<void>((resolve) => {
    const handleProxyRes: ProxyResCallback = (proxyRes, req, res) => {
      let body = '';
      proxyRes.on('data', function (chunk) {
        body += chunk;
      });
      proxyRes.on('end', function () {
        try {
          const objData = JSON.parse(body);

          if (!proxyRes.statusCode || proxyRes.statusCode >= 400 || proxyRes.statusCode < 200) {
            (res as NextApiResponse).status(proxyRes.statusCode || 500).json(objData);
            return resolve();
          }

          //convert token to cookies
          const cookies = new Cookies(req, res, {
            secure: process.env.NODE_ENV === 'production', //chỉ bảo vệ khi ở môi trường production
          });
          cookies.set('access_token', objData.accessToken, {
            httpOnly: true,
            sameSite: 'lax',
            expires: new Date(objData.expiredAt),
          });

          (res as NextApiResponse).status(200).json({ message: 'login success' });
        } catch (error: any) {
          (res as NextApiResponse).status(500).json({ message: error?.message || 'Internal Server Error' });
        }

        resolve();
      });
    };

    req.headers.cookie = '';
    proxy.once('proxyRes', handleProxyRes);
    proxy.web(req, res, {
      changeOrigin: true, //cho phép đổi baseURL (target)
      selfHandleResponse: true, // tự handle response trả về
      target: process.env.API_URL,
    });
  });
}
