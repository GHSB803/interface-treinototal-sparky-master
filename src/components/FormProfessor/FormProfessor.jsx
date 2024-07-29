import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bg1 from '../../assets/bg2.png';
import ProfessorRequests from '../../fetch/ProfessorRequests';

function FormProfessor() {  

    const [professorData, setProfessorData] = useState({
        //nome, cpf, data_nascimento, celular, endereco, email, senha, Data_contratacao, formacao, especialidade
        nome: '',
        cpf: '',
        data_nascimento: '',
        celular: '',
        endereco: '',
        email: '',
        senha: '',  
        data_contratacao: '',
        especialidade: '',
        formacao: ''
    });

    // Função para lidar com o envio do formulário
    const handleSubmit = async (e) => {
        e.preventDefault(); // Evita o recarregamento da página
        // Envia os dados do formulário para o servidor
        if(ProfessorRequests.cadastrarProfessor(professorData)) {
            window.alert(`Informações enviadas com sucesso!`)
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfessorData(prevState => ({
            ...prevState,
            [name]: value
        }));
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
                                type="date"
                                className='input'
                                name='data_nascimento'
                                value={professorData.data_nascimento}
                                onChange={handleChange}
                                placeholder='Data de Nascimento'
                                required
                            />
                        </div>

                        <div className='input-field'>
                            <input
                                type="tel"
                                className='input'
                                name='celular'
                                value={professorData.celular}
                                onChange={handleChange}
                                placeholder='Telefone'
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
                                name='data_contratacao'
                                value={professorData.data_contratacao}
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
