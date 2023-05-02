import {AppProps} from 'next/app';
import Head from 'next/head';

import GlobalStyles from 'styles/global';

export default function App({ Component, pageProps }: AppProps) {
  const appName = 'NextJS Client - Boilerplate'; // TODO - Change to your app Name 
  const appDescription = 'A simple project starter to work with TypeScript, ReactJS, NextJS and Styled Components'; // TODO - Change to your app description 

  return (
    <>
      <Head>
        <title>{appName}</title>
        <meta name="application-name" content={appName} />
        <meta name="apple-mobile-web-app-title" content={appName} />
        <meta name="description" content={appDescription} />
        <meta name="theme-color" content="#06092b" />

        <link href="/img/favicon/next-apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180"></link>
        <link href="/img/favicon/next-favicon-32x32.png" rel="icon" sizes="32x32" type="image/png"></link>
        <link href="/img/favicon/next-favicon-16x16.png" rel="icon" sizes="16x16" type="image/png"></link>
        <link href="/img/favicon/next-favicon.ico" rel="shortcut icon"></link>

        <link rel="manifest" href="/manifest.json" />

        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover'
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
