import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bg1 from '../../assets/bg2.png';

function FormProfessor() {  

    const [professorData, setProfessorData] = useState({
        professor_id: '',
        especialidade: '',
        formacao: '',
        data_contrato: '',
        nome: '',
        data_nascimento: '',
        cpf: '',
        telefone: '',
        endereco: '',
        senha: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfessorData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Função para lidar com o envio do formulário
    const handleSubmit = (e) => {
        e.preventDefault(); // Evita o recarregamento da página
        // Envia os dados do formulário para o servidor
        console.log(JSON.stringify(professorData));
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
                    <header style={{fontSize: "20px"}}>Cadastro Profissional</header>
                </div>

                <form onSubmit={handleSubmit}>
                    <div>
                        <div className='input-field'>
                            <input
                                type="text"
                                className='input'
                                name='nome'
                                value={professorData.nome}
                                onChange={handleChange}
                                placeholder='Nome'
                                required
                            />
                        </div>
                        <div className='input-field'>
                            <input
                                type="email"
                                className='input'
                                name='email'
                                value={professorData.email}
                                onChange={handleChange}
                                placeholder='E-mail'
                                required
                            />
                        </div>
                        <div className='input-field'>
                            <input
                                type="tel"
                                className='input'
                                name='telefone'
                                value={professorData.telefone}
                                onChange={handleChange}
                                placeholder='Telefone'
                                pattern="(\([0-9]{2}\))\s([9]{1})?([0-9]{4})-([0-9]{4})"
                                title="Número de telefone precisa ser no formato (xx) xxxx-xxxx"
                                required
                            />
                        </div>
                        <div className='input-field'>
                            <input
                                type="text"
                                className='input'
                                name='endereco'
                                value={professorData.endereco}
                                onChange={handleChange}
                                placeholder='Endereço'
                                required
                            />
                        </div>
                        <div className='input-field'>
                            <input
                                type="text"
                                className='input'
                                name='cpf'
                                value={professorData.cpf}
                                onChange={handleChange}
                                placeholder='CPF'
                                required
                            />
                        </div>
                        <div className='input-field'>
                            <input
                                type="password"
                                className='input'
                                name='senha'
                                value={professorData.senha}
                                onChange={handleChange}
                                placeholder='Senha'
                                required
                            />
                        </div>
                        <div className='input-field'>
                            <input
                                type="date"
                                className='input'
                                name='datacontratacao'
                                value={professorData.datacontratacao}
                                onChange={handleChange}
                                placeholder='Data de Contratação'
                                required
                            />
                        </div>
                        <div className='input-field'>
                            <input
                                type="text"
                                className='input'
                                name='formacao'
                                value={professorData.formacao}
                                onChange={handleChange}
                                placeholder='Formação'
                                required
                            />
                        </div>
                        <div className='input-field'>
                            <input
                                type="text"
                                className='input'
                                name='especialidade'
                                value={professorData.especialidade}
                                onChange={handleChange}
                                placeholder='Especialidade'
                                required
                            />
                        </div>
                    </div>
                    <div className='input-field'>
                        <input type="submit" className='submit' value='Cadastrar' />
                    </div>
                </form>
                <div className='bottom'>
                    <div className='right'>
                        <label><Link to="/">Página Inicial</Link></label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormProfessor;
