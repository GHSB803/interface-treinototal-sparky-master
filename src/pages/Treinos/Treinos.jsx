import './Treinos.css'; // Importa um arquivo CSS para estilizar o componente.
import Navegacao from '../../components/Navegacao/Navegacao'; // Importa o componente de navegação.
import Rodape from '../../components/Rodape/Rodape'; // Importa o componente de rodapé.
import { Link } from 'react-router-dom'; // Importa o componente Link do React Router para criar links entre páginas.
import Aparelho from '../../assets/img-aparelho.jpg'; // Importa uma imagem de aparelho.
import Exercicio from '../../assets/img-exercicio.jpg'; // Importa uma imagem de exercício.
import bg3 from '../../assets/bg3.jpg'; // Importa uma imagem de fundo 

function Treinos() {
    return (
        <>
            <Navegacao /> {/* Renderiza o componente de navegação */}
            {/* Renderiza os cartões de opção de treino */}
            <div className="pagina-registro" style={{
            backgroundImage: `url(${bg3})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundAttachment: 'unset',
            width: '100%',
            height: '70vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'}}>
                {/* Cartão para registrar treino */}
                <Link to="/exercicio" className="cartao-1">
                    <img src={Exercicio} alt="Imagem Treino" className='img1' />
                    <h2>Registrar Treino</h2>
                    <p>Aqui você registra o seu treino.</p>
                </Link>
                {/* Cartão para registrar aparelho */}
                <Link to="/aparelho" className="cartao-2">
                    <img src={Aparelho} alt="Imagem Aparelho" className='img2' />
                    <h2>Registrar Aparelho</h2>
                    <p>Aqui você registra um aparelho.</p>
                </Link>
            </div>
            <Rodape /> {/* Renderiza o componente de rodapé */}
        </>
    );
}

export default Treinos;