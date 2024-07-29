/**
 * Classe responsável por fazer as requisições para o servidor
 */
class ProfessorRequests {

    /**
     * Construtor para instanciar os parâmetros do servidor
     */
    constructor() {
        this.serverUrl = 'http://localhost:3006';           // endereço do servidor back-end
        this.routeListaProfessor = '/listar-professores';           // rota do servidor back-end
        this.routeCadastraProfessor = '/novo/professor';            // rota de cadastro
    }

    /**
     * Busca os Professores cadastrados no servidor
     * 
     * @returns Array com os Professores cadastrados
     */
    async buscarProfessores() {
        try {
            // Faz a requisição para o servidor, passando o endereço e a rota a serem acessados
            const response = await fetch(`${this.serverUrl}${this.routeListaProfessor}`);
            // Verifica se a resposta não foi bem sucedida...
            if (!response.ok) {
                // ...lança um erro
                throw new Error('Erro ao buscar servidor');
            }
            // retorna a lista dos Professores no formato json a quem chamou a função
            return await response.json();
        } catch (error) {
            // caso ocorra algum erro na comunicação
            console.error('Erro: ', error);
            return null;
        }
    }

    /**
     * Cadastra um Professor no servidor
     * 
     * @param {*} professor Objeto com as informações do Professor
     * @returns **verdadeiro (true)** caso o cadastro tenho sido feito com sucesso, **null (nulo)** caso tenha ocorrido algum erro
     */
    async cadastrarProfessor(professores) {
        try {
            // Faz a requisição para o servidor, passando o endereço e a rota a serem acessados
            const response = await fetch(`${this.serverUrl}${this.routeCadastraProfessor}`, {
                // Informa o verbo a ser acessado
                method: 'POST',
                // informa os cabeçalhos da requisição
                headers: {
                    'Content-Type': 'application/json'
                },
                // informa o corpo da requisição, contendo as informações do Professor
                body: JSON.stringify(professores)
            });
            // Verifica se a resposta não foi bem sucedida ...
            if (!response.ok) {
                // ... lança um erro
                throw new Error('Erro ao enviar formulário');
            }
            // retorna true caso a resposta seja bem sucedida
            return true;
        } catch (error) {
            // caso ocorra algum erro na comunicação
            console.error('Erro: ', error);
            window.alert('Erro ao cadastrar Professor');
            return null;
        }
    }

    /**
     * Deleta um Professor do servidor
     * 
     * @param {*} idProfessor ID do Professor a ser deletado
     * @returns **verdadeiro (true)** caso o Professor tenha sido deletado, **null (nulo)** caso tenha acontecido algum erro
     */
    // async deletarProfessor(idProfessor) {
    //     try {
    //         // Faz a requisição para o servidor, passando o endereço, a rota e a query com o ID do Professor
    //         const response = await fetch(`${this.serverUrl}${this.routeRemoverProfessor}?idProfessor=${idProfessor}`, {
    //             // Informa o verbo a ser acessado
    //             method: 'DELETE'
    //         });
    //         // Verifica se a resposta não foi bem sucedida ...
    //         if (!response.ok) {
    //             // ... lança um erro
    //             throw new Error('Erro ao enviar formulário');
    //         }
    //         // retorna true caso a resposta seja bem sucedida
    //         return true;
    //     } catch (error) {
    //         // caso ocorra algum erro na comunicação
    //         console.error('Erro: ', error);
    //         window.alert('Erro ao cadastrar Professor');
    //         return null;
    //     }
    // }

    /**
     * Atualiza o registro de um Professor no servidor
     * 
     * @param {*}  Professores Objeto com as informações do Professor
     * @returns **verdadeiro (true)** caso o Professor tenha sido deletado, **null (nulo)** caso tenha acontecido algum erro
     */

    
}

export default new ProfessorRequests;