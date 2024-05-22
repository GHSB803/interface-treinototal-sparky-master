import './Welcome.css'; // Importa um arquivo CSS para estilizar o componente.
import peso from '../../assets/peso.jpeg'; // Importa a imagem de fundo.
import { Link } from 'react-router-dom'; // Importa o componente Link do React Router para criar links entre páginas.

function Welcome() {
    return (
        <div className="welcome"> {/* Define uma div com a classe "welcome" */}
            <img src={peso} alt="apresentacao-gym" className='peso' /> {/* Renderiza a imagem de fundo */}

            <div className="welcome-container"> {/* Define uma div com a classe "welcome-container" */}
                <h1>COMECE</h1> {/* Renderiza um título "COMECE" */}
                <h1>AGORA</h1> {/* Renderiza um título "AGORA" */}
                <p>Vem com tudo, parceiro! Na academia Treino Total, cada suor é um degrau a mais rumo ao seu melhor shape.
                    Vamos conquistar esses ganhos juntos, nessa jornada de superação e determinação!</p> {/* Renderiza um parágrafo com o texto */}
                <button className='botao-2'><Link to='/assinatura' style={{color: 'white'}}>Conheça Já</Link></button> {/* Renderiza um botão com o texto "Conheça Já" */}
            </div>
        </div>
    );
}

export default Welcome;
