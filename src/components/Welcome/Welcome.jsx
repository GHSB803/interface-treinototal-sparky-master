import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importa o CSS do carrossel
import './Welcome.css'; // Importa um arquivo CSS para estilizar o componente.
import gym1 from '../../assets/gym1.jpg';
import gym2 from '../../assets/gym2.jpg';
import gym3 from '../../assets/gym3.jpg'
function Welcome() {
    // Função para renderizar a seta anterior
    const renderArrowPrev = (onClickHandler, hasPrev, label) =>
        hasPrev && (
            <button type="button" onClick={onClickHandler} title={label} className="custom-arrow custom-prev">
                &lt; {/* Ícone ou texto da seta anterior */}
            </button>
        );

    // Função para renderizar a seta próxima
    const renderArrowNext = (onClickHandler, hasNext, label) =>
        hasNext && (
            <button type="button" onClick={onClickHandler} title={label} className="custom-arrow custom-next">
                &gt; {/* Ícone ou texto da seta próxima */}
            </button>
        );

    return (
        <div className="welcome">
            <Carousel showThumbs={false}
                autoPlay={true}
                infiniteLoop={true}
                showStatus={false}
                renderArrowPrev={renderArrowPrev}
                renderArrowNext={renderArrowNext}
            >
                <div>
                    <img src={gym1} alt="Imagem 1" className='carousel' />
                    <h1 className='legend'>imagem 1</h1>
                </div>
                <div>
                    <img src={gym2} alt="Imagem 2" className='carousel' />
                    <p className="legend">Legenda para a Imagem 2</p>
                </div>
                <div>
                    <img src={gym3} alt="Imagem 3" className='carousel' />
                    <p className="legend">Legenda para a Imagem 3</p>
                </div>
            </Carousel>
        </div>
    );
}

export default Welcome;
