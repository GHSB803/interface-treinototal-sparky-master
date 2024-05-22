/**
 * Classe responsável por fazer as requisições para o servidor
 */
class ExercicioRequests {

    /**
     * Construtor para instanciar os parâmetros do servidor
     */
    constructor() {
        this.serverUrl = 'http://localhost:3000';           // endereço do servidor back-end
        this.routelistaExercicio = '/listaExercicio';           // rota do servidor back-end
    }

    /**
     * Busca os Exercicios cadastrados no servidor
     * 
     * @returns Array com os Exercicios cadastrados
     */
    async buscarExercicio() {
        try {
            // Faz a requisição para o servidor, passando o endereço e a rota a serem acessados
            const response = await fetch(`${this.serverUrl}${this.routelistaExercicio}`);
            // Verifica se a resposta não foi bem sucedida...
            if (!response.ok) {
                // ...lança um erro
                throw new Error('Erro ao buscar servidor');
            }
            // retorna a lista dos Exercicios no formato json a quem chamou a função
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
     * @param {*} Exercicios Objeto com as informações do Amazon
     * @returns **verdadeiro (true)** caso o cadastro tenho sido feito com sucesso, **null (nulo)** caso tenha ocorrido algum erro
     */
    // async cadastrarProdutos(Produtos) {
    //     try {
    //         // Faz a requisição para o servidor, passando o endereço e a rota a serem acessados
    //         const response = await fetch(`${this.serverUrl}${this.routeCadastrarProdutos}`, {
    //             // Informa o verbo a ser acessado
    //             method: 'POST',
    //             // informa os cabeçalhos da requisição
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             // informa o corpo da requisição, contendo as informações do Amazon
    //             body: JSON.stringify(Produtos)
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
    //         window.alert('Erro ao cadastrar Produtos');
    //         return null;
    //     }
    // }

    /**
     * Deleta um Amazon do servidor
     * 
     * @param {*} idProduto ID do Amazon a ser deletado
     * @returns **verdadeiro (true)** caso o Amazon tenha sido deletado, **null (nulo)** caso tenha acontecido algum erro
     */
    async deletarExercicio(idExercicio) {
        try {
            // Faz a requisição para o servidor, passando o endereço, a rota e a query com o ID do Amazon
            const response = await fetch(`${this.serverUrl}${this.routeRemoverExercicio}?idExercicio=${idExercicio}`, {
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
            window.alert('Erro ao cadastrar Exercicio');
            return null;
        }
    }

    /**
     * Atualiza o registro de um Amazon no servidor
     * 
     * @param {*}  Exercicios Objeto com as informações do Exercicio
     * @returns **verdadeiro (true)** caso o Amazon tenha sido deletado, **null (nulo)** caso tenha acontecido algum erro
     */

    
}

export default new ExercicioRequests;