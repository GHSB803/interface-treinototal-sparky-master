import React, { useState, useEffect } from 'react';
import Navegacao from '../Navegacao/Navegacao';
import Table from 'react-bootstrap/Table';
import ProfessorRequests from '../../fetch/ProfessorRequests';
// import Pagination from 'react-bootstrap/Pagination';

function ListaProfessor() {
    const [professores, setProfessores] = useState([]);
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
                const professores = await ProfessorRequests.buscarProfessores();
                if (Array.isArray(professores)) {
                    setProfessores(professores);
                } else {
                    throw new Error('Formato de resposta inválido');
                }
            } catch (error) {
                console.error('Erro ao buscar professores:', error);
                setError('Erro ao buscar professores. Verifique se o servidor está funcionando.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const deletarProfessor = async (id) => {
        const confirma = window.confirm(`Deseja deletar o Cadastro do Professor com id ${id}?`);
        if (confirma) {
            try {
                const success = await ProfessorRequests.deletarProfessor(id);
                if (success) {
                    window.alert('Cadastro do Professor deletado com sucesso');
                    const updatedProfessores = professores.filter(professor => professor.show_id !== id);
                    setProfessores(updatedProfessores);
                } else {
                    throw new Error('Erro ao deletar Cadastro do Professor');
                }
            } catch (error) {
                window.alert('Erro ao deletar Cadastro do Professor');
                console.error('Erro ao deletar professor:', error);
            }
        }
    }

    // Calcular o índice dos itens a serem exibidos na página atual
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = professores.slice(indexOfFirstItem, indexOfLastItem);

    // Calcular o número total de páginas
    const totalPages = Math.ceil(professores.length / itemsPerPage);

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
                <h1>Lista dos Professores</h1>
            </div>
            <Table striped bordered hover style={{ color: "white" }}>
                <thead>

                    <tr>
                        <th style={{ backgroundColor: "#14213D", color:"white", width: "100px" }}>Nome</th>
                        <th style={{ backgroundColor: "#14213D", color:"white", width: "100px" }}>CPF</th>
                        <th style={{ backgroundColor: "#14213D", color:"white", width: "100px" }}>Email</th>
                        <th style={{ backgroundColor: "#14213D", color:"white", width: "150px" }}>Telefone</th>
                        <th style={{ backgroundColor: "#14213D", color:"white", width: "150px" }}>Endereço</th>
                        <th style={{ backgroundColor: "#14213D", color:"white", width: "200px" }}>Data de Nascimento</th>
                        <th style={{ backgroundColor: "#14213D", color:"white", width: "200px" }}>Data de Contrato</th>
                        <th style={{ backgroundColor: "#14213D", color:"white", width: "150px" }}>Formação</th>
                        <th style={{ backgroundColor: "#14213D", color:"white", width: "150px" }}>Especialidade</th>
                        <th style={{ backgroundColor: "red", width: "90px" }}>Deletar</th>
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
                        currentItems.map(professor => (
                            <tr key={professor.show_id}>
                                <td>{professor.nome}</td>
                                <td>{professor.cpf}</td>
                                <td>{professor.email}</td>
                                <td>{professor.celular}</td>
                                <td>{professor.endereco}</td>
                                <td>{formatarData(professor.data_nascimento)}</td>
                                <td>{formatarData(professor.data_contratacao)}</td>
                                <td>{professor.formacao}</td>
                                <td>{professor.especialidade}</td>
                                <td onClick={() => deletarProfessor(professor.show_id)}>Deletar</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan='11'>Nenhum professor encontrado</td>
                        </tr>
                    )}


                </tbody>
            </Table>
            {/* <Pagination style={{display: "flex", flexDirection: "row"}}>
                <Pagination.First onClick={() => setCurrentPage(1)} disabled={currentPage === 1}  />
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

export default ListaProfessor;