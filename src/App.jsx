import './App.css'
import Assinatura from './pages/Assinatura/Assinatura'
import Treinos from './pages/Treinos/Treinos'
import Assistencia from './pages/Assistencia/Assistencia'
import Home from './pages/Home/Home';
import LoginAluno from './pages/LoginAluno/LoginAluno';
import LoginProfessor from './pages/LoginProfessor/LoginProfessor';
import Maquina from './pages/Maquina/Maquina';
import Exercicio from './components/Exercicio/Exercicio';
import Aparelho from './components/Aparelho/Aparelho';
import Lista from './pages/Lista/Lista';
import { BrowserRouter as Roteador, Routes, Route } from 'react-router-dom';


function App() {
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
          <Route exact path='/loginAluno' Component={LoginAluno} />
          <Route exact path='/loginprofessor' Component={LoginProfessor} />
          <Route exact path='/maquina' Component={Maquina} />
          <Route exact path='/treinos' Component={Treinos} />
        </Routes>
      </Roteador>
    </>
  );
}

export default App;