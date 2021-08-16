import React from "react";
import Footer from "./footer";
import Header from "./header";

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {

    return <>
        <Header />
        <div className='main-content main-content-product no-sidebar'>
            {children}
        </div>
        <Footer />
    </>
}