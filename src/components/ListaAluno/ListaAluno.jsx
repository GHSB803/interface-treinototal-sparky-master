import React, { useState, useEffect } from 'react';
import Navegacao from '../Navegacao/Navegacao';
import Table from 'react-bootstrap/Table';
import AlunoRequests from '../../fetch/AlunoRequests';
// import Pagination from 'react-bootstrap/Pagination';

function ListaAluno() {
    const [alunos, setAlunos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const maxPageNumbersToShow = 5;
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const formatarData = (dataISO) => {
        if (!dataISO) return "";
    
        // Garantir que estamos lidando apenas com a parte da data
        const [ano, mes, dia] = dataISO.split("T")[0].split("-");
        return `${dia}/${mes}/${ano.slice(2)}`; // Formato DD/MM/AA
    
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const alunos = await AlunoRequests.listarAlunos();
                if (Array.isArray(alunos)) {
                    setAlunos(alunos);
                } else {
                    throw new Error('Formato de resposta inválido');
                }
            } catch (error) {
                console.error('Erro ao buscar alunos:', error);
                setError('Erro ao buscar alunos. Verifique se o servidor está funcionando.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const deletarAluno = async (id) => {
        const confirma = window.confirm(`Deseja deletar o Cadastro do Aluno com id ${id}?`);
        if (confirma) {
            try {
                const success = await AlunoRequests.deletarAluno(id);
                if (success) {
                    window.alert('Cadastro do aluno deletado com sucesso');
                    const updatedAlunos = alunos.filter(aluno => aluno.show_id !== id);
                    setAlunos(updatedAlunos);
                } else {
                    throw new Error('Erro ao deletar Cadastro do Aluno');
                }
            } catch (error) {
                window.alert('Erro ao deletar Cadastro do Aluno');
                console.error('Erro ao deletar aluno:', error);
            }
        }
    }

    // Calcular o índice dos itens a serem exibidos na página atual
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = alunos.slice(indexOfFirstItem, indexOfLastItem);

    // Calcular o número total de páginas
    const totalPages = Math.ceil(alunos.length / itemsPerPage);

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
                <h1>Lista dos Alunos</h1>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th style={{ backgroundColor: "#14213D", width: "180px", color:"white" }}>Nome</th>
                        <th style={{ backgroundColor: "#14213D", width: "150px", color:"white" }}>CPF</th>
                        <th style={{ backgroundColor: "#14213D", width: "150px", color:"white" }}>Email</th>
                        <th style={{ backgroundColor: "#14213D", color:"white", width: "150px" }}>Telefone</th>
                        <th style={{ backgroundColor: "#14213D", color:"white", width: "200px" }}>Endereço</th>
                        <th style={{ backgroundColor: "#14213D", color:"white", width: "200px" }}>Data de Nascimento</th>
                        <th style={{ backgroundColor: "#14213D", color:"white", width: "90px" }}>Altura</th>
                        <th style={{ backgroundColor: "#14213D", color:"white", width: "80px" }}>Peso</th>
                        <th style={{ backgroundColor: "#14213D", color:"white", width: "80px" }}>IMC</th>
                        <th style={{ backgroundColor: "red", width: "100px" }}>Deletar</th>
                    </tr>
                </thead>
                <tbody style={{ color: "black" }}>
                    {loading ? (
                        <tr>
                            <td colSpan='11'>Carregando...</td>
                        </tr>
                    ) : error ? (
                        <tr>
                            <td colSpan='11'>{error}</td>
                        </tr>
                    ) : currentItems.length > 0 ? (
                        currentItems.map(alunos => (
                            <tr key={alunos.show_id}>
                                <td>{alunos.nome}</td>
                                <td>{alunos.cpf}</td>
                                <td>{alunos.email}</td>
                                <td>{alunos.celular}</td>
                                <td>{alunos.endereco}</td>
                                <td>{formatarData(alunos.data_nascimento)}</td>
                                <td>{alunos.altura}</td>
                                <td>{alunos.peso}</td>
                                <td>{alunos.imc}</td>
                                <td onClick={() => deletarAluno(alunos.show_id)}>Deletar</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan='11'>Nenhum aluno encontrado</td>
                        </tr>
                    )}
                </tbody>
            </Table>
            {/* <Pagination style={{justifyContent: "center"}}>
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

export default ListaAluno;