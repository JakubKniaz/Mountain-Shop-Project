import React from 'react';
import { NavLink} from 'react-router-dom';
import Carousel from "./Carousel";


const Content = props => {
    return (
        <>
            <Carousel />
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