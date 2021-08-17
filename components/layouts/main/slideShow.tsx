import React from "react";
import Image from 'next/image'
import Slideshow from "../../componentCommon/slideshow";
import { ISlideShow } from "../../../interfaces/common";

export function MainSlideShow() {

    return <Slideshow
        data={
            [
                { link: '/', title: '', path: 'https://salt.tikicdn.com/cache/w1080/ts/banner/b9/69/1d/d7427a2c3a0ac25378be3ec9ff405d78.png.webp', },
                { link: '/', title: '', path: 'https://salt.tikicdn.com/cache/w1080/ts/banner/7e/6e/db/8c6404bafeeacaea9adef14c4330a9a2.png.webp', }
            ] as ISlideShow[]

        }
    />
}