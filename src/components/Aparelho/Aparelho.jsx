import './Aparelho.css';
import React, { useState } from 'react';
import bg1 from '../../assets/bg1.png';
import { Link } from 'react-router-dom';
import AparelhoRequests from '../../fetch/AparelhoRequests';

function cadastrarAparelho() {
    const [aparelhoData, setAparelhoData] = useState({
        nome_aparelho: '',
        musculo_ativado: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAparelhoData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Função para lidar com o envio do formulário
    const handleSubmit = async (e) => {
        e.preventDefault(); // Evita o recarregamento da página
        // Envia os dados do formulário para o servidor
        if (await AparelhoRequests.cadastrarAparelho(aparelhoData)) {
            window.alert(`Informações enviadas com sucesso!`)
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
                    <header style={{ fontSize: "20px" }}>Cadastro Aparelho</header>
                </div>
                <>
                    <form onSubmit={handleSubmit}>
                    <div className='input-field'>
                            <input type="text" 
                            className='input' 
                            placeholder='Nome Aparelho' 
                            name='nome_aparelho' 
                            value={aparelhoData.nome_aparelho} 
                            onChange={handleChange} required />
                            <i className='bx bx-user'></i>
                        </div>
                        <div className='input-field'>
                            <input type="text" 
                            className='input' 
                            placeholder='Músculo Ativado' 
                            name='musculo_ativado' value={aparelhoData.musculo_ativado} 
                            onChange={handleChange} required />
                            <i className='bx bx-muscle'></i>
                        </div>
                        <div className='input-'>
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

export default cadastrarAparelho;