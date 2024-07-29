import './Exercicio.css';
import React, { useState } from 'react';
import bg1 from '../../assets/bg1.png';
import { Link } from 'react-router-dom';
import ExercicioRequests from '../../fetch/ExercicioRequests';

function Exercicio() {
    const [formData, setExercicioData] = useState({
        id_aparelho: '',
        exercicio: '',
        carga: '',
        repeticoes: '',
        regiao_corpo_ativa: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setExercicioData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (await ExercicioRequests.cadastrarExercicio(formData)) {
            window.alert(`Informações enviadas com sucesso!`);
        }
    };

    return (
        <div className='box' style={{
            backgroundImage: `url(${bg1})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <div className='container'>
                <div className='top-header'>
                    <header style={{ fontSize: "20px" }}>Cadastro Exercício</header>
                </div>
                <>
                    <form onSubmit={handleSubmit}>
                        <div className='input-field'>
                            <input
                                type="number"
                                className='input'
                                name='id_aparelho'
                                value={formData.id_aparelho}
                                onChange={handleChange}
                                placeholder='id Aparelho'
                                required
                            />
                        </div>
                        <div className='input-field'>
                            <input
                                type="text"
                                className='input'
                                name='exercicio'
                                value={formData.exercicio}
                                onChange={handleChange}
                                placeholder='Nome Exercício'
                                required
                            />
                        </div>
                        <div className='input-field'>
                            <input
                                type="number"
                                className='input'
                                name='carga'
                                value={formData.carga}
                                onChange={handleChange}
                                placeholder='Carga utilizada'
                                required
                            />
                        </div>
                        <div className='input-field'>
                            <input
                                type="number"
                                className='input'
                                name='repeticoes'
                                value={formData.repeticoes}
                                onChange={handleChange}
                                placeholder='Número Repetições'
                                required
                            />
                        </div>
                        <div className='input-field'>
                            <input
                                type="text"
                                className='input'
                                name='regiao_corpo_ativa'
                                value={formData.regiao_corpo_ativa}
                                onChange={handleChange}
                                placeholder='Região ativada'
                                required
                            />
                        </div>
                        <div className='input-field'>
                            <input type="submit" className='submit' value='Cadastrar' />
                        </div>
                        <div className='bottom'>
                            <div className='right'>
                                <label><Link to="/">Página Inicial</Link></label>
                            </div>
                        </div>
                    </form>
                </>
            </div>
        </div>
    );
}

export default Exercicio;
