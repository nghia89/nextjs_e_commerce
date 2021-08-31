import React, { useEffect, useState } from "react";
import Image from 'next/image'
import Link from 'next/link'
import { ISlideShow } from "../../interfaces/common";
import { IconChevronLeft, IconChevronRight } from "../../utils/svg";

const delay = 10000;

interface IProps {
    data: Array<ISlideShow>
}

export default function Slideshow(props: IProps) {

    const [data, setData] = useState(props.data)
    const [lengthIndex, setLengthIndex] = useState(props.data ? props.data?.length : 0)
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef<any>(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef?.current);
        }
    }


    useEffect(() => {
        resetTimeout();
        if (timeoutRef)
            timeoutRef.current = setTimeout(
                () =>
                    setIndex((prevIndex) =>
                        prevIndex === data.length - 1 ? 0 : prevIndex + 1
                    ),
                delay
            );

        return () => {
            resetTimeout();
        };
    }, [index]);

    function handleNext() {
        let newIndex = index + 1
        if (newIndex == lengthIndex)
            setIndex(0)
        else
            setIndex(newIndex)
    }
    function handlePrev() {
        let newIndex = (index - 1)
        if (newIndex < 0) setIndex(lengthIndex - 1)
        else
            setIndex(newIndex)
    }
    const myLoader = ({ src, width }: any) => {
        return `${src}?w=${width}`
    }

    return (
        <div className="slideshow">
            <span
                onClick={() => handlePrev()}
                className="btn-slick-arrow btn-slick-arrow-left">
                {IconChevronLeft()}
            </span>
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {data.map((item, index) => (
                    <Link key={`slide${index}`} href={item.link ? item.link : ""}>
                        <a>
                            <Image
                                loader={myLoader}
                                src={item.path}
                                alt={item.title}
                                width={1170}
                                height={500}

                            />
                        </a>

                    </Link>
                ))}
            </div>
            <span
                onClick={() => handleNext()}
                className="btn-slick-arrow btn-slick-arrow-right">
                {IconChevronRight()}
            </span>

            <div className="slideshowDots">
                {data.map((_, idx) => (
                    <div
                        key={`dot${idx}`}
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );

}