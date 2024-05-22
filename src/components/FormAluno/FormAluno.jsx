import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bg2 from '../../assets/bg2.png';

function FormAluno() {

    const [alunoData, setAlunoData] = useState({
        nome: '',
        email: '',
        telefone: '',
        datanascimento: '',
        endereco: '',
        cpf: '',
        senha: '',
        altura: '',
        peso: '',
        IMC: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAlunoData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Função para lidar com o envio do formulário
    const handleSubmit = (e) => {
        e.preventDefault(); // Evita o recarregamento da página
        // Envia os dados do formulário para o servidor
        console.log(JSON.stringify(alunoData));
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
                                type="tel"
                                className='input'
                                name='telefone'
                                value={alunoData.telefone}
                                onChange={handleChange}
                                placeholder='Telefone'
                                pattern="(\([0-9]{2}\))\s([9]{1})?([0-9]{4})-([0-9]{4})"
                                title="Número de telefone precisa ser no formato (xx) xxxx-xxxx"
                                required
                            />
                        </div>
                        <div className='input-field'>
                            <input
                                type="date"
                                className='input'
                                name='datanascimento'
                                value={alunoData.datanascimento}
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
                                name='IMC'
                                value={alunoData.IMC}
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