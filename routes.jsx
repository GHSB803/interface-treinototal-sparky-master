import Assinatura from './src/pages/Assinatura/Assinatura'
import Treinos from './src/pages/Treinos/Treinos'
import Assistencia from './src/pages/Assistencia/Assistencia'
import Home from './src/pages/Home/Home';
import LoginAluno from './src/pages/LoginAluno/LoginAluno';
import LoginProfessor from './src/pages/LoginProfessor/LoginProfessor';
import Exercicio from './src/components/Exercicio/Exercicio';
import Aparelho from './src/components/Aparelho/Aparelho';
import Maquina from './src/pages/Maquina/Maquina';
import Lista from './src/pages/Lista/Lista';
import ListaAluno from './src/components/ListaAluno/ListaAluno';
import ListaProfessor from './src/components/ListaProfessor/ListaProfessor';
import ListaAparelho from './src/components/ListaAparelho/ListaAparelho';
import ListaExercicio from './src/components/ListaExercicio/ListaExercicio';
import { BrowserRouter as Roteador, Routes, Route } from 'react-router-dom';

function AppRouter() {
  return (
    <>
      <Roteador>
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route exact path='/aparelho' Component={Aparelho} />
          <Route exact path='/assinatura' Component={Assinatura} />
          <Route exact path='/assistencia' Component={Assistencia} />
          <Route exact path='/exercicio' Component={Exercicio} />
          <Route exact path='/lista' Component={Lista} />
          <Route exact path='/listaAluno' Component={ListaAluno} />
          <Route exact path='/listaAparelho' Component={ListaAparelho} />
          <Route exact path='/listaExercicio' Component={ListaExercicio} />
          <Route exact path='/listaProfessor' Component={ListaProfessor} />
          <Route exact path='/loginAluno' Component={LoginAluno} />
          <Route exact path='/loginprofessor' Component={LoginProfessor} />
          <Route exact path='/maquina' Component={Maquina} />
          <Route exact path='/treinos' Component={Treinos} />
        </Routes>
      </Roteador>
    </>
  );
}

export default AppRouter;