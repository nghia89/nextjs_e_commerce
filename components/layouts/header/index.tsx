import React from "react";

export default function Header() {

    return <header className="header style7">
        <div className="top-bar">
            <div className="container">
                <div className="top-bar-left">
                    <div className="header-message">
                        Welcome to our online store!
                    </div>
                </div>
                <div className="top-bar-right">
                    <ul className="header-user-links">
                        <li>
                            <a href="login.html">Login</a>/
                            <a href="login.html">Register</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="main-header">
                <div className="row">
                    <div className="col-lg-3 col-sm-4 col-md-3 col-xs-7 col-ts-12 header-element">
                        <div className="logo">
                            <a href="index.html">
                                <img src="assets/images/logo.png" alt="img" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-7 col-sm-8 col-md-6 col-xs-5 col-ts-12">
                        <div className="block-search-block">
                            <form className="form-search form-search-width-category">
                                <div className="form-content">
                                    <div className="inner">
                                        <input type="text" className="input" name="s" defaultValue="" placeholder="Search here" />
                                    </div>
                                    <button className="btn-search" type="submit">
                                        <span className="icon-search"></span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-2 col-sm-12 col-md-3 col-xs-12 col-ts-12">
                        <div className="header-control">
                            <div className="block-minicart cleric-mini-cart block-header cleric-dropdown">
                                <a className="shopcart-icon" data-cleric="cleric-dropdown">
                                    Cart
                                    <span className="count">
                                        0
                                    </span>
                                </a>
                                <div className="no-product cleric-submenu">
                                    <p className="text">
                                        You have
                                        <span>
                                            0 item(s)
                                        </span>
                                        in your bag
                                    </p>
                                </div>
                            </div>
                            <div className="block-account block-header cleric-dropdown">
                                <a data-cleric="cleric-dropdown">
                                    <span className="flaticon-user"></span>
                                </a>
                                <div className="header-account cleric-submenu">
                                    <div className="header-user-form-tabs">
                                        <ul className="tab-link">
                                            <li className="active">
                                                <a data-toggle="tab" aria-expanded="true" >Login</a>
                                            </li>
                                            <li>
                                                <a data-toggle="tab" aria-expanded="true" >Register</a>
                                            </li>
                                        </ul>
                                        <div className="tab-container">
                                            <div id="header-tab-login" className="tab-panel active">
                                                <form method="post" className="login form-login">
                                                    <p className="form-row form-row-wide">
                                                        <input type="email" placeholder="Email" className="input-text" />
                                                    </p>
                                                    <p className="form-row form-row-wide">
                                                        <input type="password" className="input-text" placeholder="Password" />
                                                    </p>
                                                    <p className="form-row">
                                                        <label className="form-checkbox">
                                                            <input type="checkbox" className="input-checkbox" />
                                                            <span>
                                                                Remember me
                                                            </span>
                                                        </label>
                                                        <input type="submit" className="button" value="Login" />
                                                    </p>
                                                    <p className="lost_password">
                                                        <a href="">Lost your password?</a>
                                                    </p>
                                                </form>
                                            </div>
                                            <div id="header-tab-rigister" className="tab-panel">
                                                <form method="post" className="register form-register">
                                                    <p className="form-row form-row-wide">
                                                        <input type="email" placeholder="Email" className="input-text" />
                                                    </p>
                                                    <p className="form-row form-row-wide">
                                                        <input type="password" className="input-text" placeholder="Password" />
                                                    </p>
                                                    <p className="form-row">
                                                        <input type="submit" className="button" value="Register" />
                                                    </p>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a className="menu-bar mobile-navigation menu-toggle" href="#">
                                <span></span>
                                <span></span>
                                <span></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="header-nav-container">
            <div className="container">
                <div className="header-nav-wapper main-menu-wapper">

                    <div className="header-nav">
                        <div className="container-wapper">
                            <ul className="cleric-clone-mobile-menu cleric-nav main-menu " id="menu-main-menu">
                                <li className="menu-item  menu-item-has-children">
                                    <a href="index.html" className="cleric-menu-item-title" title="Home">Home</a>
                                    <span className="toggle-submenu"></span>
                                    <ul className="submenu">
                                        <li className="menu-item">
                                            <a href="index.html">Home 01</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="home2.html">Home 02</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="home3.html">Home 03</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item menu-item-has-children">
                                    <a href="gridproducts.html" className="cleric-menu-item-title" title="Shop">Shop</a>
                                    <span className="toggle-submenu"></span>
                                    <ul className="submenu">
                                        <li className="menu-item">
                                            <a href="gridproducts.html">Grid Fullwidth</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="gridproducts_leftsidebar.html">Grid Left sidebar</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="gridproducts_bannerslider.html">Grid Bannerslider</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="listproducts.html">List</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item  menu-item-has-children item-megamenu">
                                    <a href="#" className="cleric-menu-item-title" title="Pages">Pages</a>
                                    <span className="toggle-submenu"></span>
                                    <div className="submenu mega-menu menu-page">
                                        <div className="row">
                                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 menu-page-item">
                                                <div className="cleric-custommenu default">
                                                    <h2 className="widgettitle">Shop Pages</h2>
                                                    <ul className="menu">
                                                        <li className="menu-item">
                                                            <a href="shoppingcart.html">Shopping Cart</a>
                                                        </li>
                                                        <li className="menu-item">
                                                            <a href="checkout.html">Checkout</a>
                                                        </li>
                                                        <li className="menu-item">
                                                            <a href="contact.html">Contact us</a>
                                                        </li>
                                                        <li className="menu-item">
                                                            <a href="404page.html">404</a>
                                                        </li>
                                                        <li className="menu-item">
                                                            <a href="login.html">Login/Register</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 menu-page-item">
                                                <div className="cleric-custommenu default">
                                                    <h2 className="widgettitle">Product</h2>
                                                    <ul className="menu">
                                                        <li className="menu-item">
                                                            <a href="productdetails-fullwidth.html">Product Fullwidth</a>
                                                        </li>
                                                        <li className="menu-item">
                                                            <a href="productdetails-leftsidebar.html">Product left
                                                                sidebar</a>
                                                        </li>
                                                        <li className="menu-item">
                                                            <a href="productdetails-rightsidebar.html">Product right
                                                                sidebar</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 menu-page-item">
                                            </div>
                                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 menu-page-item">
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="menu-item  menu-item-has-children">
                                    <a href="inblog_right-siderbar.html" className="cleric-menu-item-title"
                                        title="Blogs">Blogs</a>
                                    <span className="toggle-submenu"></span>
                                    <ul className="submenu">
                                        <li className="menu-item menu-item-has-children">
                                            <a href="#" className="cleric-menu-item-title" title="Blog Style">Blog Style</a>
                                            <span className="toggle-submenu"></span>
                                            <ul className="submenu">
                                                <li className="menu-item">
                                                    <a href="bloggrid.html">Grid</a>
                                                </li>
                                                <li className="menu-item">
                                                    <a href="bloglist.html">List</a>
                                                </li>
                                                <li className="menu-item">
                                                    <a href="bloglist-leftsidebar.html">List Sidebar</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item menu-item-has-children">
                                            <a href="#" className="cleric-menu-item-title" title="Post Layout">Post Layout</a>
                                            <span className="toggle-submenu"></span>
                                            <ul className="submenu">
                                                <li className="menu-item">
                                                    <a href="inblog_left-siderbar.html">Left Sidebar</a>
                                                </li>
                                                <li className="menu-item">
                                                    <a href="inblog_right-siderbar.html">Right Sidebar</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-item">
                                    <a href="about.html" className="cleric-menu-item-title" title="About">About</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </header>
}