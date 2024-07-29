/**
 * Classe responsável por fazer as requisições para o servidor
 */
class AparelhoRequests {

    /**
     * Construtor para instanciar os parâmetros do servidor
     */
    constructor() {
        this.serverUrl = 'http://localhost:3006';           // endereço do servidor back-end
        this.routelistaAparelho = '/listar-aparelho';           // rota do servidor back-end
        this.routeCadastraAparelho = '/novo/aparelho';          // rota de cadastro
    }

    /**
     * Busca os aparelho cadastrados no servidor
     * 
     * @returns Array com os aparelho cadastrados
     */
    async buscarAparelho() {
        try {
            // Faz a requisição para o servidor, passando o endereço e a rota a serem acessados
            const response = await fetch(`${this.serverUrl}${this.routelistaAparelho}`);
            // Verifica se a resposta não foi bem sucedida...
            if (!response.ok) {
                // ...lança um erro
                throw new Error('Erro ao buscar servidor');
            }
            // retorna a lista dos aparelho no formato json a quem chamou a função
            return await response.json();
        } catch (error) {
            // caso ocorra algum erro na comunicação
            console.error('Erro: ', error);
            return null;
        }
    }

    /**
     * Cadastra um aparelho no servidor
     * 
     * @param {*} aparelho Objeto com as informações do Sistema
     * @returns **verdadeiro (true)** caso o cadastro tenho sido feito com sucesso, **null (nulo)** caso tenha ocorrido algum erro
     */
    async cadastrarAparelho(aparelho) {
        try {
            // Faz a requisição para o servidor, passando o endereço e a rota a serem acessados
            const response = await fetch(`${this.serverUrl}${this.routeCadastraAparelho}`, {
                // Informa o verbo a ser acessado
                method: 'POST',
                // informa os cabeçalhos da requisição
                headers: {
                    'Content-Type': 'application/json'
                },
                // informa o corpo da requisição, contendo as informações do Amazon
                body: JSON.stringify(aparelho)
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
            window.alert('Erro ao cadastrar Aparelho');
            return null;
        }
    }

    /**
     * Deleta um Aparelho do servidor
     * 
     * @param {*} idAparelho ID do Aparelho a ser deletado
     * @returns **verdadeiro (true)** caso o Aparelho tenha sido deletado, **null (nulo)** caso tenha acontecido algum erro
     */
    // async deletarProduto(idAparelho) {
    //     try {
    //         // Faz a requisição para o servidor, passando o endereço, a rota e a query com o ID do Aparelho
    //         const response = await fetch(`${this.serverUrl}${this.routeRemoverAparelho}?idAparelho=${idAparelho}`, {
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
    //         window.alert('Erro ao cadastrar Aparelho');
    //         return null;
    //     }
    // }

    /**
     * Atualiza o registro de um Aparelho no servidor
     * 
     * @param {*}  Aparelho Objeto com as informações do Aparelho
     * @returns **verdadeiro (true)** caso o Aparelho tenha sido deletado, **null (nulo)** caso tenha acontecido algum erro
     */

    
}

export default new AparelhoRequests;