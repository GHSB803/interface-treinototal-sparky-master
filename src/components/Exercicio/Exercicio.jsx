import './Exercicio.css';
import React, { useState } from 'react';
import bg1 from '../../assets/bg1.png';
import { Link } from 'react-router-dom';

function Exercicio() {
    const [showRegister, setShowRegister] = useState(false);
    const [formData, setFormData] = useState({
        emailProfessor: '',
        senha: '',
        idAparelho: '',
        nomeExercicio: '',
        cargaUtilizada: '',
        numeroRepeticoes: '',
        regiaoAtivada: ''
    });

    const handleToggleRegister = () => {
        setShowRegister(!showRegister);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode enviar os dados para o banco de dados
        console.log('Dados enviados:', formData);
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
                        <span>ProSaúde</span>
                        <header>{showRegister ? 'Cadastro Exercício' : 'Sessão Exercício'}</header>
                    </div>

                    {!showRegister ? (
                        <>
                            <form onSubmit={handleSubmit}>

                                <div className='input-field'>
                                    <input
                                        type="text"
                                        className='input'
                                        name='emailProfessor'
                                        value={formData.emailProfessor}
                                        onChange={handleChange}
                                        placeholder='E-mail Professor'
                                        required
                                    />
                                </div>
                                <div className='input-field'>
                                    <input
                                        type="password"
                                        className='input'
                                        name='senha'
                                        value={formData.senha}
                                        onChange={handleChange}
                                        placeholder='Senha'
                                        required
                                    />
                                </div>
                                <div className='input-field'>
                                    <input onClick={handleToggleRegister} type="submit" className='submit' value='Cadastrar' />
                                </div>
                                <div className='bottom'>
                                    <div className='right'>
                                        <label><Link to="/">Página Inicial</Link></label>
                                    </div>
                                </div>
                            </form>
                        </>
                    ) : (
                        <>
                            <form>
                                <div className='input-field'>
                                    <input
                                        type="text"
                                        className='input'
                                        name='idAparelho'
                                        value={formData.idAparelho}
                                        onChange={handleChange}
                                        placeholder='id Aparelho utilizado'
                                        required
                                    />
                                </div>
                                <div className='input-field'>
                                    <input
                                        type="text"
                                        className='input'
                                        name='nomeExercicio'
                                        value={formData.nomeExercicio}
                                        onChange={handleChange}
                                        placeholder='Nome Exercício'
                                        required
                                    />
                                </div>
                                <div className='input-field'>
                                    <input
                                        type="text"
                                        className='input'
                                        name='cargaUtilizada'
                                        value={formData.cargaUtilizada}
                                        onChange={handleChange}
                                        placeholder='Carga utilizada'
                                        required
                                    />
                                </div>
                                <div className='input-field'>
                                    <input
                                        type="text"
                                        className='input'
                                        name='numeroRepeticoes'
                                        value={formData.numeroRepeticoes}
                                        onChange={handleChange}
                                        placeholder='Número Repetições'
                                        required
                                    />
                                </div>
                                <div className='input-field'>
                                    <input
                                        type="text"
                                        className='input'
                                        name='regiaoAtivada'
                                        value={formData.regiaoAtivada}
                                        onChange={handleChange}
                                        placeholder='Região ativada'
                                        required
                                    />
                                </div>
                                <div className='input-field'>
                                    <input type="submit" className='submit' value='Cadastrar' />
                                </div>
                                <div className='bottom'>
                                    <div className='left'>
                                        <label><Link onClick={handleToggleRegister}>Voltar</Link></label>
                                    </div>
                                </div>
                            </form>
                        </>
                    )}
                </div>
            </div>
    );
}

export default Exercicio;