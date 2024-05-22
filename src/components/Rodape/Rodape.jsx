import './Rodape.css'; // Importa um arquivo CSS para estilizar o componente.
import face from '../../assets/face.png'; // Importa o ícone do Facebook.
import insta from '../../assets/insta.png'; // Importa o ícone do Instagram.
import gojo from '../../assets/gojo.png';
import { Link } from 'react-router-dom'; // Importa o componente Link do React Router.

function Rodape() {
    return (
        <div className='rodape'> {/* Define uma div com a classe "rodape" */}
            <div className='container-rodape'> {/* Define uma div com a classe "container-rodape" */}
            <img src={gojo} alt="gojo" className='gojo' style={{paddingLeft: ""}}/>
                <h1 className='h1-frase'>"Persista hoje, conquiste amanhã!"</h1> {/* Renderiza um título com a frase */}
                <Link to="/loginprofessor" style={{ fontSize: "30px", fontWeight: 'bold', border: "none", background: "none", cursor: "pointer", color: "#13213d", textDecoration: "underline" }}>Trabalhe Conosco</Link> {/* Renderiza um link para a página de login */}
                <h1>Endereço</h1> {/* Renderiza um título "Endereço" */}
                <p className='p-rodape'>C. 6 958, La Plata, Provincia de Buenos Aires, Argentina</p> {/* Renderiza um parágrafo com o endereço */}
                <p>CEP: 1900 TEL: (221) 93664-3687</p> {/* Renderiza um parágrafo com o CEP e o telefone */}
                <h1>Redes Sociais</h1> {/* Renderiza um título "Redes Sociais" */}
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={insta} alt="instagram"/> {/* Renderiza o ícone do Instagram */}
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={face}  alt="facebook"/> {/* Renderiza o ícone do Facebook */}
                </a>
            </div>
        </div>
    );
}

export default Rodape;
