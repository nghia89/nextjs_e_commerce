import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import Head from 'next/head'
import Layout from '../components/layouts'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <meta charSet="UTF-8" />
      <meta http-equiv="X-UA-compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* <link rel="shortcut icon" type="image/x-icon" href='//assets/images/favicon.png' /> */}
      <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
        rel="stylesheet" />

      <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
      <link rel="stylesheet" href="/assets/css/font-awesome.min.css" />
      <link rel="stylesheet" href="/assets/css/owl.carousel.min.css" />
      {/* <link rel="stylesheet" href="/assets/css/animate.min.css" /> */}
      {/* <link rel="stylesheet" href="/assets/css/jquery-ui.css" />
      <link rel="stylesheet" href="/assets/css/slick.css" />
      <link rel="stylesheet" href="/assets/css/chosen.min.css" />
      <link rel="stylesheet" href="/assets/css/pe-icon-7-stroke.css" /> */}
      {/* <link rel="stylesheet" href="/assets/css/magnific-popup.min.css" /> */}
      {/* <link rel="stylesheet" href="/assets/css/lightbox.min.css" /> */}
      {/* <link rel="stylesheet" href="/assets/js/fancybox/source/jquery.fancybox.css" /> */}
      {/* <link rel="stylesheet" href="/assets/css/jquery.scrollbar.min.css" /> */}
      <link rel="stylesheet" href="/assets/css/mobile-menu.css" />
      <link rel="stylesheet" href="/assets/fonts/flaticon/flaticon.css" />
      <link rel="stylesheet" href="/assets/css/style.css" />
      {/* 
      <script src="/assets/js/bootstrap.min.js"></script>
      <script src="/assets/js/owl.carousel.min.js"></script>
      <script src="/assets/js/magnific-popup.min.js"></script>
      <script src="/assets/js/isotope.min.js"></script>
      <script src="/assets/js/mobile-menu.js"></script>
      <script src="/assets/js/chosen.min.js"></script>
      <script src="/assets/js/slick.js"></script>
      <script src="/assets/js/lightbox.min.js"></script>
      <script src="/assets/js/owl.thumbs.min.js"></script>
      <script src="/assets/js/frontend-plugin.js"></script> */}

    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
}
export default MyApp
