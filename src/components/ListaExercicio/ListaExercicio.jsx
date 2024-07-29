import React, { useState, useEffect } from 'react';
import Navegacao from '../Navegacao/Navegacao';
import Table from 'react-bootstrap/Table';
import ExercicioRequests from '../../fetch/ExercicioRequests';
// import Pagination from 'react-bootstrap/Pagination';

function ListaExercicio() {
    const [exercicios, setExercicios] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const maxPageNumbersToShow = 5;
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const exercicios = await ExercicioRequests.buscarExercicio();
                if (Array.isArray(exercicios)) {
                    setExercicios(exercicios);
                } else {
                    throw new Error('Formato de resposta inválido');
                }
            } catch (error) {
                console.error('Erro ao buscar exercícios:', error);
                setError('Erro ao buscar exercícios. Verifique se o servidor está funcionando.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const deletarExercicio = async (id) => {
        const confirma = window.confirm(`Deseja deletar o Cadastro do Exercicio com id ${id}?`);
        if (confirma) {
            try {
                const success = await ExercicioRequests.deletarExercicio(id);
                if (success) {
                    window.alert('Cadastro do exercício deletado com sucesso');
                    const updatedExercicios = exercicios.filter(exercicio => exercicio.show_id !== id);
                    setExercicios(updatedExercicios);
                } else {
                    throw new Error('Erro ao deletar Cadastro do Exercicio');
                }
            } catch (error) {
                window.alert('Erro ao deletar Cadastro do Exercicio');
                console.error('Erro ao deletar exercício:', error);
            }
        }
    }

    // Calcular o índice dos itens a serem exibidos na página atual
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = exercicios.slice(indexOfFirstItem, indexOfLastItem);

    // Calcular o número total de páginas
    const totalPages = Math.ceil(exercicios.length / itemsPerPage);

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
                <h1>Lista dos Exercicios</h1>
            </div>
            <Table striped bordered hover style={{ color: "white" }}>
                <thead >
                    <tr>
                    <th style={{ backgroundColor: "#14213D", color:"white", width: "350px" }}>Id_aparelho</th>
                        <th style={{ backgroundColor: "#14213D", color:"white", width: "350px" }}>Nome do Exercicio</th>
                        <th style={{ backgroundColor: "#14213D", color:"white", width: "230px" }}>Carga Utilizada</th>
                        <th style={{ backgroundColor: "#14213D", color:"white", width: "230px" }}>Número de Repetições</th>
                        <th style={{ backgroundColor: "#14213D", color:"white", width: "350px" }}>Região Ativada</th>
                        <th style={{ backgroundColor: "red", width: "200px" }}>Deletar</th>
                    </tr>
                </thead>
                <tbody style={{ color: "black" }}>
                    {loading ? (
                        <tr>
                            <td colSpan='6'>Carregando...</td>
                        </tr>
                    ) : error ? (
                        <tr>
                            <td colSpan='6'>{error}</td>
                        </tr>
                    ) : currentItems.length > 0 ? (
                        currentItems.map(exercicio => (
                            <tr key={exercicio.show_id}>
                                {/* id_aparelho, exercicio, carga, repeticoes, regiao_corpo_ativa */}
                                <td>{exercicio.id_aparelho}</td>
                                <td>{exercicio.exercicio}</td>
                                <td>{exercicio.carga}</td>
                                <td>{exercicio.repeticoes}</td>
                                <td>{exercicio.regiao_corpo_ativa}</td>
                                <td onClick={() => deletarExercicio(exercicio.show_id)}>Deletar</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan='6'>Nenhum exercício encontrado</td>
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

export default ListaExercicio;