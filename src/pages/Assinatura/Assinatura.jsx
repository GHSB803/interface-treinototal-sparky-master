import './Assinatura.css'; // Importa um arquivo CSS para estilizar o componente.
import Navegacao from '../../components/Navegacao/Navegacao'; // Importa o componente de navegação.
import Rodape from '../../components/Rodape/Rodape'; // Importa o componente de rodapé.
import Planos from '../../components/Planos/Planos';

function Assinatura() {
    return (
        <>
            <Navegacao />
            <Planos />
            <h1 className='nada'>NADA AQUI AINDA</h1>
            <Rodape /> 
        </>
    );
}

export default Assinatura;