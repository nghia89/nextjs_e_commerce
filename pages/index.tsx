import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import MainProductCollection from '../components/layouts/main/productCollection'
import MainSlideShow from '../components/layouts/main/slideShow'
import MainTopBanner from '../components/layouts/main/topBanner'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <title>Create Next App</title>
      </Head>
      <div className="main-content">
        <div className="fullwidth-template">
          <MainSlideShow />
          <MainTopBanner />
          <MainProductCollection />
        </div>
      </div>
    </>
  )
}

export default Home
