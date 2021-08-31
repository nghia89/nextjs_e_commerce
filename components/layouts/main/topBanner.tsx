import Image from "next/image"
export default function MainTopBanner() {
    return <div className="banner-wrapp rows-space-35">
        <div className="text-center">
            {/* <Image src="https://cdn.cellphones.com.vn/media/wysiwyg/f31200-75-max.png" /> */}
            <img src="https://cdn.cellphones.com.vn/media/wysiwyg/f31200-75-max.png" />
        </div>
        <div className="container">
            <div className="home_banner_primary_container">
                <div className="item-banner home-banner-primary-item">

                </div>
                <div className="item-banner home-banner-primary-item">

                </div>
                <div className="item-banner home-banner-primary-item">

                </div>
                <div className="item-banner home-banner-primary-item">

                </div>
            </div>
        </div>
    </div>
}