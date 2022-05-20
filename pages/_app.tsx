import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <title>TopApp</title>
        <meta name="description" content="Portfolio project powered by Next JS" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta property="og:url" content={process.env.NEXT_ENV_DOMAIN + router.asPath} />
        <meta property="og:locale" content="ru_RU" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
