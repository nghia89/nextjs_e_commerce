import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });

export default function MainProductCollection() {
    return <div className="cleric-product produc-featured rows-space-65">
        <div className="container">
            <h3 className="custommenu-title-blog">
                Deal of the day
            </h3>
            <div className="tab-container">
                <div id="bestseller" className="tab-panel active">
                    <div className="cleric-product">
                        <ul className="row list-products auto-clear equal-container product-grid">
                            <li className="product-item  col-lg-3 col-md-4 col-sm-6 col-xs-6 col-ts-6 style-1">
                                <div className="product-inner equal-element">
                                    <div className="product-thumb">
                                        <div className="thumb-inner">
                                            <a href="#">
                                                <img src="assets/images/product-item-1.jpg" alt="img" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="product-info">
                                        <h5 className="product-name product_title">
                                            <a href="#">Super Tweeter</a>
                                        </h5>
                                        <div className="group-info">
                                            <div className="stars-rating">
                                                <div className="star-rating">
                                                    <span className="star-3" />
                                                </div>
                                                <div className="count-star">
                                                    (3)
                                                </div>
                                            </div>
                                            <div className="price">
                                                <del>
                                                    $65
                                                </del>
                                                <ins>
                                                    $45
                                                </ins>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="product-item product-type-variable col-lg-3 col-md-4 col-sm-6 col-xs-6 col-ts-6 style-1">
                                <div className="product-inner equal-element">
                                    <div className="product-thumb">
                                        <div className="thumb-inner">
                                            <a href="#">
                                                <img src="assets/images/product-item-2.jpg" alt="img" />
                                            </a>

                                        </div>
                                    </div>
                                    <div className="product-info">
                                        <h5 className="product-name product_title">
                                            <a href="#">Auto Accentss</a>
                                        </h5>
                                        <div className="group-info">
                                            <div className="stars-rating">
                                                <div className="star-rating">
                                                    <span className="star-3" />
                                                </div>
                                                <div className="count-star">
                                                    (3)
                                                </div>
                                            </div>
                                            <div className="price">
                                                <del>
                                                    $65
                                                </del>
                                                <ins>
                                                    $45
                                                </ins>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="product-item product-type-variable col-lg-3 col-md-4 col-sm-6 col-xs-6 col-ts-6 style-1">
                                <div className="product-inner equal-element">
                                    <div className="product-thumb">
                                        <div className="thumb-inner">
                                            <a href="#">
                                                <img src="assets/images/product-item-3.jpg" alt="img" />
                                            </a>

                                        </div>
                                    </div>
                                    <div className="product-info">
                                        <h5 className="product-name product_title">
                                            <a href="#">Nardi Bianco</a>
                                        </h5>
                                        <div className="group-info">
                                            <div className="stars-rating">
                                                <div className="star-rating">
                                                    <span className="star-3" />
                                                </div>
                                                <div className="count-star">
                                                    (3)
                                                </div>
                                            </div>
                                            <div className="price">
                                                <del>
                                                    $65
                                                </del>
                                                <ins>
                                                    $45
                                                </ins>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="product-item product-type-variable col-lg-3 col-md-4 col-sm-6 col-xs-6 col-ts-6 style-1">
                                <div className="product-inner equal-element">
                                    <div className="product-thumb">
                                        <div className="thumb-inner">
                                            <a href="#">
                                                <img src="assets/images/product-item-4.jpg" alt="img" />
                                            </a>

                                        </div>
                                    </div>
                                    <div className="product-info">
                                        <h5 className="product-name product_title">
                                            <a href="#">Chrimy Lights</a>
                                        </h5>
                                        <div className="group-info">
                                            <div className="stars-rating">
                                                <div className="star-rating">
                                                    <span className="star-3" />
                                                </div>
                                                <div className="count-star">
                                                    (3)
                                                </div>
                                            </div>
                                            <div className="price">
                                                <del>
                                                    $65
                                                </del>
                                                <ins>
                                                    $45
                                                </ins>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <ul className="row list-products auto-clear equal-container product-grid">
                            <OwlCarousel
                                className='owl-theme'
                                margin={30}
                                lazyLoad
                                items={4}
                                nav
                                loop
                                navContainerClass={'owl-nav owl-nav-product-next-prev'}
                                dots={false}
                            >

                                <li className="item product-item  col-lg-3 col-md-4 col-sm-6 col-xs-6 col-ts-6 style-1">
                                    <div className="product-inner equal-element">
                                        <div className="product-thumb">
                                            <div className="thumb-inner">
                                                <a href="#">
                                                    <img src="assets/images/product-item-1.jpg" alt="img" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="product-info">
                                            <h5 className="product-name product_title">
                                                <a href="#">Super Tweeter</a>
                                            </h5>
                                            <div className="group-info">
                                                <div className="stars-rating">
                                                    <div className="star-rating">
                                                        <span className="star-3" />
                                                    </div>
                                                    <div className="count-star">
                                                        (3)
                                                    </div>
                                                </div>
                                                <div className="price">
                                                    <del>
                                                        $65
                                                    </del>
                                                    <ins>
                                                        $45
                                                    </ins>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="item product-item  col-lg-3 col-md-4 col-sm-6 col-xs-6 col-ts-6 style-1">
                                    <div className="product-inner equal-element">
                                        <div className="product-thumb">
                                            <div className="thumb-inner">
                                                <a href="#">
                                                    <img src="assets/images/product-item-1.jpg" alt="img" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="product-info">
                                            <h5 className="product-name product_title">
                                                <a href="#">Super Tweeter</a>
                                            </h5>
                                            <div className="group-info">
                                                <div className="stars-rating">
                                                    <div className="star-rating">
                                                        <span className="star-3" />
                                                    </div>
                                                    <div className="count-star">
                                                        (3)
                                                    </div>
                                                </div>
                                                <div className="price">
                                                    <del>
                                                        $65
                                                    </del>
                                                    <ins>
                                                        $45
                                                    </ins>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="item product-item product-type-variable col-lg-3 col-md-4 col-sm-6 col-xs-6 col-ts-6 style-1">
                                    <div className="product-inner equal-element">
                                        <div className="product-thumb">
                                            <div className="thumb-inner">
                                                <a href="#">
                                                    <img src="assets/images/product-item-2.jpg" alt="img" />
                                                </a>

                                            </div>
                                        </div>
                                        <div className="product-info">
                                            <h5 className="product-name product_title">
                                                <a href="#">Auto Accentss</a>
                                            </h5>
                                            <div className="group-info">
                                                <div className="stars-rating">
                                                    <div className="star-rating">
                                                        <span className="star-3" />
                                                    </div>
                                                    <div className="count-star">
                                                        (3)
                                                    </div>
                                                </div>
                                                <div className="price">
                                                    <del>
                                                        $65
                                                    </del>
                                                    <ins>
                                                        $45
                                                    </ins>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="item product-item product-type-variable col-lg-3 col-md-4 col-sm-6 col-xs-6 col-ts-6 style-1">
                                    <div className="product-inner equal-element">
                                        <div className="product-thumb">
                                            <div className="thumb-inner">
                                                <a href="#">
                                                    <img src="assets/images/product-item-3.jpg" alt="img" />
                                                </a>

                                            </div>
                                        </div>
                                        <div className="product-info">
                                            <h5 className="product-name product_title">
                                                <a href="#">Nardi Bianco</a>
                                            </h5>
                                            <div className="group-info">
                                                <div className="stars-rating">
                                                    <div className="star-rating">
                                                        <span className="star-3" />
                                                    </div>
                                                    <div className="count-star">
                                                        (3)
                                                    </div>
                                                </div>
                                                <div className="price">
                                                    <del>
                                                        $65
                                                    </del>
                                                    <ins>
                                                        $45
                                                    </ins>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="item product-item product-type-variable col-lg-3 col-md-4 col-sm-6 col-xs-6 col-ts-6 style-1">
                                    <div className="product-inner equal-element">
                                        <div className="product-thumb">
                                            <div className="thumb-inner">
                                                <a href="#">
                                                    <img src="assets/images/product-item-4.jpg" alt="img" />
                                                </a>

                                            </div>
                                        </div>
                                        <div className="product-info">
                                            <h5 className="product-name product_title">
                                                <a href="#">Chrimy Lights</a>
                                            </h5>
                                            <div className="group-info">
                                                <div className="stars-rating">
                                                    <div className="star-rating">
                                                        <span className="star-3" />
                                                    </div>
                                                    <div className="count-star">
                                                        (3)
                                                    </div>
                                                </div>
                                                <div className="price">
                                                    <del>
                                                        $65
                                                    </del>
                                                    <ins>
                                                        $45
                                                    </ins>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                            </OwlCarousel>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
}