import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

const Footer = props => {

    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-left">
                    <div className="socials-logo">
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-youtube"></i></a>
                    </div>
                    <div className="menu-footer">
                        <ul>
                            <li><a href="#"><span>O</span> nas</a></li>
                            <li><a href="#"><span>P</span>olityka prywatności</a></li>
                            <li><a href="#"><span>D</span>ane firmy</a></li>
                            <li><a href="#"><span>R</span>egulamin</a></li>
                        </ul>
                        <p>&copy 2020 Sklep Górski, All Rights Reserved</p>
                    </div>
                </div>
                <div className="logo-footer">
                    <a href="#"><img src="/src/images/logo.jpg" alt="shop-logo" title="mountain-shop logo"/></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;