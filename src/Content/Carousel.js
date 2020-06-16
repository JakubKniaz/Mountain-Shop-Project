import React, {useState} from 'react';

const Carousel = ( props) => {
    const [listIndex, setListIndex] = useState(0);
    const listContent = ['Góry uczą smaku rzeczy prostych, takich, których nie doceniamy. - Stanisław Biel',
        'Góry są miejscem, gdzie przyrodę tej planety doświadczamy najzupełniej. Dlatego sam pobyt w górach może stać się wielkim odkryciem. - Wojtek Kurtyka',
        'Góry dają człowiekowi, poprzez zdobywanie wzniesień nieograniczony kontakt z przyrodą – poczucie wewnętrznego wyzwolenia, oczyszczenia, niezależności. - Jan Paweł II'
    ];

    const onLeftArrowClick = () => {

        setListIndex( prevIndex => {
            if (prevIndex <= 0) {
                prevIndex = listContent.length - 1;
            } else {
                prevIndex -= 1
            }
            return prevIndex;
        })

    };

    const onRightArrowClick = () => {
        setListIndex( prevIndex => {
            if (prevIndex >= listContent.length - 1) {
                prevIndex = 0;
            } else {
                prevIndex += 1
            }
            return prevIndex;
        })

    };

    return (
        <section className="carousel container">
            <div className="row">
                <div className="carousel-content col-10">
                    <i onClick={onLeftArrowClick} className="fas fa-chevron-left left-arrow"></i>
                    <ul>
                        <li className="visible-poem">
                            <div className="first-poem">
                                <span>{listContent[listIndex]}</span>
                            </div>
                        </li>
                    </ul>
                    <i onClick={onRightArrowClick} className="fas fa-chevron-right right-arrow"></i>
                </div>
            </div>
        </section>
    )

};

export default Carousel;