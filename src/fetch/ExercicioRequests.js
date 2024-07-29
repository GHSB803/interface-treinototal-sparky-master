/**
 * Classe responsável por fazer as requisições para o servidor
 */
class ExercicioRequests {

    /**
     * Construtor para instanciar os parâmetros do servidor
     */
    constructor() {
        this.serverUrl = 'http://localhost:3006';           // endereço do servidor back-end
        this.routeListaExercicio = '/listar-exercicios';           // rota do servidor back-end
        this.routeCadastraExercicio = '/novo/exercicio';           // rota de cadastro
    }

    /**
     * Busca os Exercicios cadastrados no servidor
     * 
     * @returns Array com os Exercicios cadastrados
     */
    async buscarExercicio() {
        try {
            // Faz a requisição para o servidor, passando o endereço e a rota a serem acessados
            const response = await fetch(`${this.serverUrl}${this.routeListaExercicio}`);
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
     * Cadastra um Exercicio no servidor
     * 
     * @param {*} exercicio Objeto com as informações do Exercicio
     * @returns **verdadeiro (true)** caso o cadastro tenho sido feito com sucesso, **null (nulo)** caso tenha ocorrido algum erro
     */
    async cadastrarExercicio(exercicio) {
        try {
            // Faz a requisição para o servidor, passando o endereço e a rota a serem acessados
            const response = await fetch(`${this.serverUrl}${this.routeCadastraExercicio}`, {
                // Informa o verbo a ser acessado
                method: 'POST',
                // informa os cabeçalhos da requisição
                headers: {
                    'Content-Type': 'application/json'
                },
                // informa o corpo da requisição, contendo as informações Exercicio
                body: JSON.stringify(exercicio)
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
            window.alert('Erro ao cadastrar Exercício');
            return null;
        }
    }

    /**
     * Deleta um Exercicio do servidor
     * 
     * @param {*} idExercicio ID do Exercicio a ser deletado
     * @returns **verdadeiro (true)** caso o Exercicio tenha sido deletado, **null (nulo)** caso tenha acontecido algum erro
     */
    // async deletarExercicio(idExercicio) {
    //     try {
    //         // Faz a requisição para o servidor, passando o endereço, a rota e a query com o ID do Exercicio
    //         const response = await fetch(`${this.serverUrl}${this.routeRemoverExercicio}?idExercicio=${idExercicio}`, {
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
    //         window.alert('Erro ao cadastrar Exercicio');
    //         return null;
    //     }
    // }

    /**
     * Atualiza o registro de um Exercicio no servidor
     * 
     * @param {*}  Exercicios Objeto com as informações do Exercicio
     * @returns **verdadeiro (true)** caso o Exercicio tenha sido deletado, **null (nulo)** caso tenha acontecido algum erro
     */

    
}

export default new ExercicioRequests;