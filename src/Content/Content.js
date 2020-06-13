import React from 'react';
import {withRouter, NavLink} from 'react-router-dom';


const Content = props => {

    const handleClick = ( type) => {
        props.history.push({pathname: "/products/" + type})
    }

    return (
        <>
            <section className="carousel container">
                <div className="row">
                    <div className="carousel-content col-10">
                        <i className="fas fa-chevron-left left-arrow"></i>
                        <ul>
                            <li className="visible-poem">
                                <div className="first-poem"><span>Góry uczą smaku rzeczy prostych,<br/> takich, których nie doceniamy.<br/><br/>Stanisław Biel</span>
                                </div>
                            </li>
                            <li>
                                <div className="second-poem"><span>Góry są miejscem, gdzie przyrodę tej planety doświadczamy najzupełniej.<br/> Dlatego sam pobyt w górach może stać się wielkim odkryciem.<br/><br/> Wojtek Kurtyka</span>
                                </div>
                            </li>
                            <li>
                                <div className="third-poem"><span>Góry dają człowiekowi, poprzez zdobywanie wzniesień nieograniczony kontakt z przyrodą<br/> – poczucie
                        wewnętrznego wyzwolenia, oczyszczenia, niezależności.<br/><br/>Jan Paweł II</span></div>
                            </li>
                        </ul>
                        <i className="fas fa-chevron-right right-arrow"></i>
                    </div>
                </div>
            </section>
            <section className="container">
                <div className="row">
                    <div className="promo-section-first col-12">
                        <div className="promo-section-info">Wytrzymałe buty na górskie wędrówki<br/> i na każdą pogodę!
                        </div>
                        <NavLink to={{pathname: 'products/shoes_man_low', state:{title: 'Buty Męskie Trekkingowe Niskie'}}}><button  className="promo-btn">Sprawdź!</button></NavLink>
                    </div>
                </div>
            </section>
            <section className="container">
                <div className="row">
                    <div className="promo-section-second col-12">
                        <div className="promo-section-info">Odkrywaj nowe szlaki<br/> z nowymi kurtkami Gore-Tex!
                        </div>
                        <NavLink to={{pathname: 'products/jacket_woman_goretex', state:{title: 'Kurtki Damskie Gore-Tex'}}}><button  className="promo-btn">Sprawdź!</button></NavLink>
                    </div>
                </div>
            </section>
            <section className="container">
                <div className="row">
                    <div className="promo-section-third col-12">
                        <div className="promo-section-info">Podejmuj nowe wyzwania<br/> w naszych termoaktywnych<br/> T-Shirtach!<br/>
                            <NavLink to={{pathname: 'products/shirt_woman_thermo', state:{title: 'T-shirt Damskie Termoaktywne'}}}><button className="promo-btn">Sprawdź!</button></NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Content;