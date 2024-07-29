import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bg2 from '../../assets/bg2.png';
import AlunoRequests from '../../fetch/AlunoRequests';

function FormAluno() {

    const [alunoData, setAlunoData] = useState({
        nome: '',
        email: '',
        celular: '',
        data_nascimento: '',
        endereco: '',
        cpf: '',
        senha: '',
        altura: '',
        peso: '',
        imc: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAlunoData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Função para lidar com o envio do formulário
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(await AlunoRequests.cadastrarAluno(alunoData)) {
            window.alert("Informações enviadas com sucesso")
        }else {
            window.alert("Erro ao enviar formulário")
        }
    };

    return (
        <div className='box' style={{
            backgroundImage: `url(${bg2})`,
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
                    <header style={{fontSize: "20px"}}>Cadastro Aluno</header>
                </div>

                <form onSubmit={handleSubmit}>
                    <div>
                        <div className='input-field'>
                            <input
                                type="text"
                                className='input'
                                name='nome'
                                value={alunoData.nome}
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
                                value={alunoData.email}
                                onChange={handleChange}
                                placeholder='E-mail'
                                required
                            />
                        </div>
                        <div className='input-field'>
                            <input
                                type="number"
                                className='input'
                                name='celular'
                                value={alunoData.celular}
                                onChange={handleChange}
                                placeholder='Telefone'
                                required
                            />
                        </div>
                        <div className='input-field'>
                            <input
                                type="date"
                                className='input'
                                name='data_nascimento'
                                value={alunoData.data_nascimento}
                                onChange={handleChange}
                                placeholder='Data de Nascimento'
                                required
                            />
                        </div>
                        <div className='input-field'>
                            <input
                                type="text"
                                className='input'
                                name='endereco'
                                value={alunoData.endereco}
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
                                value={alunoData.cpf}
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
                                value={alunoData.senha}
                                onChange={handleChange}
                                placeholder='Senha'
                                required
                            />
                        </div>
                        <div className='input-field'>
                            <input
                                type="number"
                                className='input'
                                name='altura'
                                value={alunoData.altura}
                                onChange={handleChange}
                                placeholder='Altura (cm)'
                                required
                            />
                        </div>
                        <div className='input-field'>
                            <input
                                type="number"
                                className='input'
                                name='peso'
                                value={alunoData.peso}
                                onChange={handleChange}
                                placeholder='Peso (kg)'
                                required
                            />
                        </div>
                        <div className='input-field'>
                            <input
                                type="number"
                                className='input'
                                name='imc'
                                value={alunoData.imc}
                                onChange={handleChange}
                                placeholder='IMC'
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

export default FormAluno;