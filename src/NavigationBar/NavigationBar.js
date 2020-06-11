import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {withRouter} from 'react-router-dom'


const NavigationBar = props => {

    const handleClick = ( type ) => {
        //console.log(props.history)
        props.history.push({pathname: "/products/" + type})
    };
    const loginClick = () => {
        props.history.push({pathname: "/login"});
    };

    return (
        <header className="header container">
            <nav className="navbar align-bottom navbar-dark navbar-expand-md nav-item">
                <a className="align-content-between logo" href="#"><img src="images/logo.jpg" alt="shop-logo" title="mountain-shop logo"/></a>
                <button className="navbar-toggler hamburger-menu" data-toggle="collapse" type="button"
                        data-target="#mainMenu" aria-controls="mainMenu" aria-expanded="false">
                    <i className="fas fa-bars"></i></button>
                <div className="collapse navbar-collapse div-menu" id="mainMenu">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button"
                               aria-expanded="false" aria-haspopup="true"><span>T</span>-Shirt</a>
                            <div className="dropdown-menu">
                                <div className="dropdown-header">Damskie</div>
                                <a className="dropdown-item" onClick={ () => handleClick('shirt_woman_thermo')}>Termoaktywne</a>
                                <a className="dropdown-item" onClick={ () => handleClick('shirt_woman_cotton')}>Bawełniane</a>
                                <div className="dropdown-header">Męskie</div>
                                <a className="dropdown-item" onClick={ () => handleClick('shirt_man_thermo')}>Termoaktywne</a>
                                <a className="dropdown-item" onClick={ () => handleClick('shirt_man_cotton')}>Bawełniane</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button"
                               aria-expanded="false" aria-haspopup="true"><span>K</span>urtki</a>
                            <div className="dropdown-menu">
                                <div className="dropdown-header">Damskie</div>
                                <a className="dropdown-item" onClick={ () => handleClick('jacket_woman_softshell')}>Softshell</a>
                                <a className="dropdown-item" onClick={ () => handleClick('jacket_woman_goretex')}>Gore-Tex</a>
                                <div className="dropdown-header">Męskie</div>
                                <a className="dropdown-item" onClick={ () => handleClick('jacket_man_softshell')}>Softshell</a>
                                <a className="dropdown-item" onClick={ () => handleClick('jacket_man_goretex')}>Gore-Tex</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button"
                               aria-expanded="false" aria-haspopup="true"><span>B</span>uty</a>
                            <div className="dropdown-menu">
                                <div className="dropdown-header">Damskie</div>
                                <a className="dropdown-item" onClick={ () => handleClick('shoes_woman_low')}>Trekkingowe niskie</a>
                                <a className="dropdown-item" onClick={ () => handleClick('shoes_woman_high')}>Trekingowe wysokie</a>
                                <div className="dropdown-header">Męskie</div>
                                <a className="dropdown-item" onClick={ () => handleClick('shoes_man_low')}>Trekkingowe niskie</a>
                                <a className="dropdown-item" onClick={ () => handleClick('shoes_man_high')}>Trekkingowe wysokie</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown"
                               role="button" onClick={ () => handleClick('gadgets')}><span>G</span>adżety</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a onClick={loginClick} className="nav-link"><span>Z</span>aloguj się</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default withRouter(NavigationBar);