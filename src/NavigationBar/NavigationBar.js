import React, {useContext} from 'react';
import {withRouter, NavLink} from 'react-router-dom';
import NavigationItem from './NavigationItem/NavigationItem';
import NavMainItem from './NavMainItem/NavMainItem';
import { ShopContext } from '../context/shop-context';
import Logo from '../images/logo.jpg';


const NavigationBar = props => {
    const userId = useContext(ShopContext).userId;
    const shopItems = useContext(ShopContext).shopItems;
    const logout = useContext(ShopContext).shopLogout;


    console.log(shopItems)

    const onLogout = () => {
        logout();
        props.history.replace({pathname: "/"});
    };

    return (
        <header className="header container">
            <nav className="navbar align-bottom navbar-dark navbar-expand-md nav-item">
                <NavLink to="/"><a className="align-content-between logo"><img src={Logo} alt="shop-logo" title="mountain-shop logo"/></a></NavLink>
                <button className="navbar-toggler hamburger-menu" data-toggle="collapse" type="button"
                        data-target="#mainMenu" aria-controls="mainMenu" aria-expanded="false">
                    <i className="fas fa-bars"></i></button>
                <div className="collapse navbar-collapse div-menu" id="mainMenu">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <NavMainItem><span>T</span>-Shirt</NavMainItem>
                            <div className="dropdown-menu">
                                <div className="nav-title dropdown-header">Damskie</div>
                                <NavigationItem className="dropdown-item" products="shirt_woman_thermo" title='T-shirt Damskie Termoaktywne'>Termoaktywne</NavigationItem>
                                <NavigationItem className="dropdown-item" products="shirt_woman_cotton" title='T-shirt Damskie Bawełniane'>Bawełniane</NavigationItem>
                                <div className="dropdown-header">Męskie</div>
                                <NavigationItem className="dropdown-item" products="shirt_man_thermo" title='T-shirt Męskie Termoaktywne'>Termoaktywne</NavigationItem>
                                <NavigationItem className="dropdown-item" products="shirt_man_cotton" title='T-shirt Męskie Bawełniane'>Bawełniane</NavigationItem>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <NavMainItem><span>K</span>urtki</NavMainItem>
                            <div className="dropdown-menu">
                                <div className="dropdown-header">Damskie</div>
                                <NavigationItem className="dropdown-item" products="jacket_woman_softshell" title='Kurtki Damskie Softshell'>Softshell</NavigationItem>
                                <NavigationItem className="dropdown-item" products="jacket_woman_goretex" title='Kurtki Damskie Gore-Tex'>Gore-Tex</NavigationItem>
                                <div className="dropdown-header">Męskie</div>
                                <NavigationItem className="dropdown-item" products="jacket_man_softshell" title='Kurtki Męskie Softshell'>Softshell</NavigationItem>
                                <NavigationItem className="dropdown-item" products="jacket_man_goretex" title='Kurtki Męskie Gore-Tex'>Gore-Tex</NavigationItem>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <NavMainItem><span>B</span>uty</NavMainItem>
                            <div className="dropdown-menu">
                                <div className="dropdown-header">Damskie</div>
                                <NavigationItem className="dropdown-item" products="shoes_woman_low" title='Buty Damskie Trekkingowe Niskie'>Trekkingowe niskie</NavigationItem>
                                <NavigationItem className="dropdown-item" products="shoes_woman_high" title='Buty Damskie Trekingowe Wysokie'>Trekingowe wysokie</NavigationItem>
                                <div className="dropdown-header">Męskie</div>
                                <NavigationItem className="dropdown-item" products="shoes_man_low" title='Buty Męskie Trekkingowe Niskie'>Trekkingowe niskie</NavigationItem>
                                <NavigationItem className="dropdown-item" products="shoes_man_high" title='Buty Męskie Trekkingowe Wysokie'>Trekkingowe wysokie</NavigationItem>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <NavLink to={{pathname: "/products/gadgets", state: {title: "Gadżety"}}}><a className="nav-link"><span>G</span>adżety</a></NavLink>
                        </li>

                        <li className="nav-item dropdown">
                            { !userId ? <NavLink to="/login"><a className="nav-link"><span>Z</span>aloguj się</a></NavLink> : <a onClick={onLogout} className="nav-link"><span>W</span>yloguj się</a> }
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink to="/summary-cart"><a className="nav-link"><i className="fas fa-shopping-basket"></i><span>{shopItems.length}</span></a></NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink to="/history"><i className="fas fa-history"></i></NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default withRouter(NavigationBar);