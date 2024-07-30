import './Navegacao.css'; // Importa um arquivo CSS para estilizar o componente.
import treino from '../../assets/treino.jpg'; // Importa a imagem do ícone de treino.
import { Link } from 'react-router-dom'; // Importa o componente Link do React Router.

function Navegacao() {
    return (
        <div className="navbar-opcoes"> {/* Define uma div com a classe "navbar-opcoes" */}
            <img className='treino' src={treino}/> {/* Renderiza a imagem do ícone de treino */}
            <ul> {/* Define uma lista não ordenada */}
                <li><Link style={{color: "#fff"}} to="/">Home</Link></li> {/* Renderiza um link para a página Home */}
                <li><Link style={{color: "#fff"}} to="/assinatura">Planos</Link></li> {/* Renderiza um link para a página Planos */}
                <li><Link style={{color: "#fff"}} to="/treinos">Treinos</Link></li> {/* Renderiza um link para a página Treinos */}
                <li><Link style={{color: "#fff"}} to="/assistencia">Acompanhamento</Link></li> {/* Renderiza um link para a página Acompanhamento */}
                <li className="dropdown" > {/* Define um item de lista para o dropdown */}
                    <span className="droplis">Listas</span> {/* Define o botão do dropdown */}
                    <div className="dropdown-content" style={{minWidth: "116px"}}> {/* Define o conteúdo do dropdown */}
                        <Link style={{color: "#000"}} to="/listaAluno">Aluno</Link> {/* Link para a página de cadastro */}
                        <Link style={{color: "#000"}} to="/listaProfessor">Professor</Link> {/* Link para a página de login */}
                        <Link style={{color: "#000"}} to="/listaAparelho">Aparelho</Link> {/* Link para a página de aparelho */}
                        <Link style={{color: "#000"}} to="/listaExercicio">Exercício</Link> {/* Link para a página de aparelho */}
                    </div>
                </li>
                <li className="dropdown"> {/* Define um item de lista para o dropdown */}
                    <span className="dropbtn">Formulários</span> {/* Define o botão do dropdown */}
                    <div className="dropdown-content"> {/* Define o conteúdo do dropdown */}
                        <Link style={{color: "#000"}} to="/loginaluno">Login Aluno</Link> {/* Link para a página de cadastro */}
                        <Link style={{color: "#000"}} to="/loginprofessor">Login Professor</Link> {/* Link para a página de login */}
                        <Link style={{color: "#000"}} to="/aparelho">Aparelho</Link> {/* Link para a página de aparelho */}
                        <Link style={{color: "#000"}} to="/exercicio">Exercício</Link> {/* Link para a página de aparelho */}
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Navegacao;