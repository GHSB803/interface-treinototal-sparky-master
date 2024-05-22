import './Home.css'; // Importa um arquivo CSS para estilizar o componente.
import Welcome from '../../components/Welcome/Welcome'; // Importa o componente de boas-vindas.
import Navegacao from '../../components/Navegacao/Navegacao'; // Importa o componente de navegação.
import Rodape from '../../components/Rodape/Rodape'; // Importa o componente de rodapé.

function Home() {
    return (
        <>
            <Navegacao /> {/* Renderiza o componente de navegação */}
            <Welcome /> {/* Renderiza o componente de boas-vindas */}
            <Rodape /> {/* Renderiza o componente de rodapé */}
        </>
    );
}

export default Home;