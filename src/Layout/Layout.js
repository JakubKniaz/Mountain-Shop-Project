import NavigationBar from "../NavigationBar/NavigationBar";
import AllProductsSection from "../AllProductsSection/AllProductsSection";
import Footer from "../Footer/Footer";
import React from "react";

const Layout = props => {

    return (
        <>
            <NavigationBar/>
            {props.children}
            <Footer/>
        </>
    );
};

export default Layout;