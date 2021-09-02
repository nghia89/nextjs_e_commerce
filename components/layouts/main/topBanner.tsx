import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });

export default function MainTopBanner() {
    return <div className="banner-wrapp rows-space-35">
        <div className="text-center">
            {/* <Image src="https://cdn.cellphones.com.vn/media/wysiwyg/f31200-75-max.png" /> */}
            <img src="https://cdn.cellphones.com.vn/media/wysiwyg/f31200-75-max.png" />
        </div>
        <div className="container">

            <div className="home_banner_primary_container">
                <OwlCarousel
                    className='owl-theme'
                    margin={15}
                    lazyLoad
                    items={4}
                    dots={false}
                >
                    <div className="item-banner home-banner-primary-item">

                    </div>
                    <div className="item-banner home-banner-primary-item">

                    </div>
                    <div className="item-banner home-banner-primary-item">

                    </div>
                    <div className="item-banner home-banner-primary-item">

                    </div>
                </OwlCarousel>
            </div>
        </div>
    </div>
}