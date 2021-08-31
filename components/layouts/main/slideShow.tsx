import React from "react";
import Image from 'next/image'
import Slideshow from "../../componentCommon/slideshow";
import { ISlideShow } from "../../../interfaces/common";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });

export default function MainSlideShow() {

    return <div className="mt-4 container">
        <OwlCarousel
            className='owl-theme'
            margin={2} lazyLoad autoWidth
            items={1}
            nav
            loop
            autoplay
            autoplayTimeout={5000}
            autoplayHoverPause
            dotsClass={"owl-dots slick-dots "}
        >
            <div className="item item-slide" >
                <img src='https://salt.tikicdn.com/cache/w1080/ts/banner/b9/69/1d/d7427a2c3a0ac25378be3ec9ff405d78.png.webp' />
            </div>
            <div className="item item-slide" >
                <img src='https://salt.tikicdn.com/cache/w1080/ts/banner/7e/6e/db/8c6404bafeeacaea9adef14c4330a9a2.png.webp' />
            </div>
        </OwlCarousel>
        {/* <Slideshow
            data={
                [
                    { link: '/', title: '', path: 'https://salt.tikicdn.com/cache/w1080/ts/banner/b9/69/1d/d7427a2c3a0ac25378be3ec9ff405d78.png.webp', },
                    { link: '/', title: '', path: 'https://salt.tikicdn.com/cache/w1080/ts/banner/7e/6e/db/8c6404bafeeacaea9adef14c4330a9a2.png.webp', }
                ] as ISlideShow[]

            }
        /> */}
    </div>
}