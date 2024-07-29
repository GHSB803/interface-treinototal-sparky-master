import React, { useState, useEffect } from 'react';
import Navegacao from '../Navegacao/Navegacao';
import Table from 'react-bootstrap/Table';
import AparelhoRequests from '../../fetch/AparelhoRequests';
// import Pagination from 'react-bootstrap/Pagination';

function ListaAparelho() {
    const [aparelho, setaparelho] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const maxPageNumbersToShow = 5;
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const aparelho = await AparelhoRequests.buscarAparelho();
                if (Array.isArray(aparelho)) {
                    setaparelho(aparelho);
                } else {
                    throw new Error('Formato de resposta inválido');
                }
            } catch (error) {
                console.error('Erro ao buscar aparelho:', error);
                setError('Erro ao buscar aparelho. Verifique se o servidor está funcionando.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const deletarAparelho = async (id) => {
        const confirma = window.confirm(`Deseja deletar o Cadastro do Aparelho com id ${id}?`);
        if (confirma) {
            try {
                const success = await AparelhoRequests.deletarAparelho(id);
                if (success) {
                    window.alert('Cadastro do aparelho deletado com sucesso');
                    const updatedaparelho = aparelho.filter(aparelho => aparelho.show_id !== id);
                    setaparelho(updatedaparelho);
                } else {
                    throw new Error('Erro ao deletar Cadastro do Aparelho');
                }
            } catch (error) {
                window.alert('Erro ao deletar Cadastro do Aparelho');
                console.error('Erro ao deletar aparelho:', error);
            }
        }
    }

    // Calcular o índice dos itens a serem exibidos na página atual
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = aparelho.slice(indexOfFirstItem, indexOfLastItem);

    // Calcular o número total de páginas
    const totalPages = Math.ceil(aparelho.length / itemsPerPage);

    // Gerar os itens da paginação com páginas limitadas
    const getPageNumbers = () => {
        const pageNumbers = [];
        const halfPageNumbersToShow = Math.floor(maxPageNumbersToShow / 2);

        let startPage = Math.max(1, currentPage - halfPageNumbersToShow);
        let endPage = Math.min(totalPages, currentPage + halfPageNumbersToShow);

        if (startPage === 1) {
            endPage = Math.min(totalPages, maxPageNumbersToShow);
        } else if (endPage === totalPages) {
            startPage = Math.max(1, totalPages - maxPageNumbersToShow + 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }

        return pageNumbers;
    }

    const pageNumbers = getPageNumbers();

    return (
        <body style={{backgroundColor: "#fca311"}}>
            <Navegacao />
            <div>
            <h1>Lista dos aparelho</h1>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th style={{ backgroundColor: "#14213D", color:"white", width: "350px" }}>Nome do Aparelho</th>
                        <th style={{ backgroundColor: "#14213D", color:"white", width: "350px" }}>Músculo Ativado</th>
                        <th style={{ backgroundColor: "red", width: "300px" }}>Deletar</th>
                    </tr>
                </thead>
                <tbody style={{ color: "black", backgroundColor: "#FCA311" }}>
                    {loading ? (
                        <tr>
                            <td colSpan='5'>Carregando...</td>
                        </tr>
                    ) : error ? (
                        <tr>
                            <td colSpan='5'>{error}</td>
                        </tr>
                    ) : currentItems.length > 0 ? (
                        currentItems.map(aparelho => (
                            <tr key={aparelho.show_id}>
                                <td>{aparelho.nome_aparelho}</td>
                                <td>{aparelho.musculo_ativado}</td>
                                <td onClick={() => deletarAparelho(aparelho.show_id)}>Deletar</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan='5'>Nenhum aparelho encontrado</td>
                        </tr>
                    )}
                </tbody>
            </Table>
            {/* <Pagination style={{ justifyContent: "center" }}>
                <Pagination.First onClick={() => setCurrentPage(1)} disabled={currentPage === 1} />
                <Pagination.Prev onClick={() => setCurrentPage(prevPage => Math.max(prevPage - 1, 1))} disabled={currentPage === 1} />
                {pageNumbers.map(number => (
                    <Pagination.Item key={number} active={number === currentPage} onClick={() => setCurrentPage(number)}>
                        {number}
                    </Pagination.Item>
                ))}
                <Pagination.Next onClick={() => setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages))} disabled={currentPage === totalPages} />
                <Pagination.Last onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages} />
            </Pagination> */}
        </body>
    );
}

export default ListaAparelho;