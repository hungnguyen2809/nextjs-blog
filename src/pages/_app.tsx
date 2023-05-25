import { axiosClient } from '@/apiClient';
import { EmptyLayout } from '@/layout';
import { AppPropsWithLayout } from '@/models';
import '@/styles/globals.css';
import { createEmotionCache, theme } from '@/utils';
import { CacheProvider, EmotionCache } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { SWRConfig } from 'swr';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const options = {
  shouldRetryOnError: false,
  fetcher: (url: string) => axiosClient.get(url).then((res) => res.data),
};

export interface MyAppProps extends AppPropsWithLayout {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const Layout = Component.Layout ?? EmptyLayout;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SWRConfig value={options}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <ToastContainer autoClose={3000} />
        </SWRConfig>
      </ThemeProvider>
    </CacheProvider>
  );
}
