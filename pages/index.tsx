import type { GetStaticPropsContext, NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import MainProductCollection from '../components/layouts/main/productCollection'
import MainSlideShow from '../components/layouts/main/slideShow'
import MainTopBanner from '../components/layouts/main/topBanner'
import { InferGetStaticPropsType } from 'next'
import { apiProductCategory, apiSystemConfig } from './api'
import axios from 'axios'
import { ITreeCateItem } from '@interfaces/category'
import { ISystemConfigVM } from '@interfaces/sysConfig'

interface IProps {
  sysConfig: ISystemConfigVM
}
function Home(props: IProps) {
  let { sysConfig } = props
  return (
    <>
      <Head>
        <title>{sysConfig.title}</title>
        <meta property="og:title" content={sysConfig.title} />
        <meta property="og:description" content={sysConfig.description} />
        <meta name="description" content={sysConfig.description} />
        <meta name="keywords" content={sysConfig.keywords} />
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

export async function getStaticProps() {
  const sysConfig = await apiSystemConfig.detail()

  return {
    props: {
      sysConfig: sysConfig.data
    },
    revalidate: 14400,
  }
}

export default Home


