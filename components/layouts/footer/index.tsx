import React from "react";
import { IconFacebook, IconYoutube } from "../../../utils/svg";

export default function Footer() {

    return <>
        <footer className="footer style7">
            <div className="container">
                <div className="container-wapper">
                    <div className="row">
                        <div className="box-footer col-xs-12 col-sm-4 col-md-4 col-lg-4">
                            <div className="cleric-custommenu default">
                                <h2 className="widgettitle">HỖ TRỢ KHÁCH HÀNG</h2>
                                <ul className="menu">
                                    <li className="menu-item">
                                        <a href="#">Hướng dẫn chọn cỡ giày</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="#">Chính sách đổi trả</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="#">Thanh toán giao nhận</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="box-footer col-xs-12 col-sm-4 col-md-4 col-lg-4">
                            <div className="cleric-custommenu default">
                                <h2 className="widgettitle">Thông tin</h2>
                                <ul className="menu">
                                    <li className="menu-item">
                                        <a href="#">Giới thiệu</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="#">Liên hệ</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="box-footer col-xs-12 col-sm-4 col-md-4 col-lg-4 hidden-xs">
                            <div className="cleric-socials">
                                <h2 className="widgettitle">Kết nối với chúng tôi</h2>
                                <ul className="socials">
                                    <li>
                                        <a href="#" className="social-item" target="_blank">
                                            {IconFacebook()}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="social-item" target="_blank">
                                            {IconYoutube()}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-end">
                        <div className="row">
                            <div className="col-sm-12 col-xs-12">

                                <div className="coppyright">
                                    Copyright © 2021
                                    <a href="#">Cleric</a>
                                    . All rights reserved
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

        <div className="footer-device-mobile">
            <div className="wapper">
                <div className="footer-device-mobile-item device-home">
                    <a href="index.html">
                        <span className="icon">
                            <i className="fa fa-home" aria-hidden="true" />
                        </span>
                        Home
                    </a>
                </div>
                <div className="footer-device-mobile-item device-home device-wishlist">
                    <a href="#">
                        <span className="icon">
                            <i className="fa fa-heart" aria-hidden="true" />
                        </span>
                        Wishlist
                    </a>
                </div>
                <div className="footer-device-mobile-item device-home device-cart">
                    <a href="#">
                        <span className="icon">
                            <i className="fa fa-shopping-basket" aria-hidden="true" />
                            <span className="count-icon">
                                0
                            </span>
                        </span>
                        <span className="text">Cart</span>
                    </a>
                </div>
                <div className="footer-device-mobile-item device-home device-user">
                    <a href="login.html">
                        <span className="icon">
                            <i className="fa fa-user" aria-hidden="true" />
                        </span>
                        Account
                    </a>
                </div>
            </div>
        </div>
    </>
}