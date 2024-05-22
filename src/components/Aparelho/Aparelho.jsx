import './Aparelho.css';
import React, { useState } from 'react';
import bg1 from '../../assets/bg1.png';
import { Link } from 'react-router-dom';

function Aparelho() {
    const [showRegister, setShowRegister] = useState(false);
    const [formData, setFormData] = useState({
        emailProfessor: '',
        senha: '',
        nomeAparelho: '',
        musculoAtivado: ''
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
                    <header>{showRegister ? 'Cadastro Aparelho' : 'Sessão Aparelho'}</header>
                </div>

                {!showRegister ? (
                    <>
                        <form onSubmit={handleSubmit}>
                            <div className='input-field'>
                                <input type="text" className='input' placeholder='E-mail Professor' name='emailProfessor' value={formData.emailProfessor} onChange={handleChange} required />
                                <i className='bx bx-user'></i>
                            </div>
                            <div className='input-field'>
                                <input type="password" className='input' placeholder='Senha' name='senha' value={formData.senha} onChange={handleChange} required />
                                <i className='bx bx-lock'></i>
                            </div>
                        </form>                            
                        <div className='below'>
                            <div className='input-field'>
                                <input onClick={handleToggleRegister} type="submit" className='submit' value='Cadastrar' />
                            </div>
                        </div>
                        <div className='bottom'>
                            <div className='left'>
                                <label><Link to="/">Página Inicial</Link></label>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <form onSubmit={handleSubmit}>
                            <div className='input-field'>
                                <input type="text" className='input' placeholder='Nome Aparelho' name='nomeAparelho' value={formData.nomeAparelho} onChange={handleChange} required />
                                <i className='bx bx-user'></i>
                            </div>
                            <div className='input-field'>
                                <input type="text" className='input' placeholder='Músculo Ativado' name='musculoAtivado' value={formData.musculoAtivado} onChange={handleChange} required />
                                <i className='bx bx-muscle'></i>
                            </div>
                            <div className='input-'>
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

export default Aparelho;