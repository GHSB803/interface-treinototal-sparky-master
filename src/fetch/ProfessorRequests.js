/**
 * Classe responsável por fazer as requisições para o servidor
 */
class ProfessorRequests {

    /**
     * Construtor para instanciar os parâmetros do servidor
     */
    constructor() {
        this.serverUrl = 'http://localhost:3000';           // endereço do servidor back-end
        this.routelistaProfessor = '/listaProfessor';           // rota do servidor back-end
    }

    /**
     * Busca os professor cadastrados no servidor
     * 
     * @returns Array com os professor cadastrados
     */
    async buscarProfessor() {
        try {
            // Faz a requisição para o servidor, passando o endereço e a rota a serem acessados
            const response = await fetch(`${this.serverUrl}${this.routelistaProfessor}`);
            // Verifica se a resposta não foi bem sucedida...
            if (!response.ok) {
                // ...lança um erro
                throw new Error('Erro ao buscar servidor');
            }
            // retorna a lista dos professor no formato json a quem chamou a função
            return await response.json();
        } catch (error) {
            // caso ocorra algum erro na comunicação
            console.error('Erro: ', error);
            return null;
        }
    }

    /**
     * Cadastra um Amazon no servidor
     * 
     * @param {*} Exercicio Objeto com as informações do Amazon
     * @returns **verdadeiro (true)** caso o cadastro tenho sido feito com sucesso, **null (nulo)** caso tenha ocorrido algum erro
     */
    // async cadastrarprofessor(professor) {
    //     try {
    //         // Faz a requisição para o servidor, passando o endereço e a rota a serem acessados
    //         const response = await fetch(`${this.serverUrl}${this.routeCadastrarprofessor}`, {
    //             // Informa o verbo a ser acessado
    //             method: 'POST',
    //             // informa os cabeçalhos da requisição
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             // informa o corpo da requisição, contendo as informações do Amazon
    //             body: JSON.stringify(professor)
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
    //         window.alert('Erro ao cadastrar professor');
    //         return null;
    //     }
    // }

    /**
     * Deleta um Amazon do servidor
     * 
     * @param {*} idProduto ID do Amazon a ser deletado
     * @returns **verdadeiro (true)** caso o Amazon tenha sido deletado, **null (nulo)** caso tenha acontecido algum erro
     */
    async deletarProduto(idProduto) {
        try {
            // Faz a requisição para o servidor, passando o endereço, a rota e a query com o ID do Amazon
            const response = await fetch(`${this.serverUrl}${this.routeRemoverProduto}?idProduto=${idProduto}`, {
                // Informa o verbo a ser acessado
                method: 'DELETE'
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
            window.alert('Erro ao cadastrar Produto');
            return null;
        }
    }

    /**
     * Atualiza o registro de um Amazon no servidor
     * 
     * @param {*}  professor Objeto com as informações do Produto
     * @returns **verdadeiro (true)** caso o Amazon tenha sido deletado, **null (nulo)** caso tenha acontecido algum erro
     */

    
}

export default new ProfessorRequests;