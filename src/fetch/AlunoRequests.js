class AlunoRequests {

    constructor() {
        this.serverUrl = 'http://localhost:3006';
        this.routeListarAlunos = '/listar-aluno';
        this.routeCadastrarAlunos = '/novo/alunos';
    }

    async listarAlunos() {
        try {
            const response = await fetch(`${this.serverUrl}${this.routeListarAlunos}`);
if (!response.ok) {
    throw new Error('Erro ao buscar servidor');
}
return await response.json();
} catch (error) {
console.error('Erro: ', error);
return null;
}
    }

        /**
     * Cadastra um aluno no servidor
     * 
     * @param {*} aluno Objeto com as informações do aluno
     * @returns *verdadeiro (true)* caso o cadastro tenho sido feito com sucesso, *null (nulo)* caso tenha ocorrido algum erro
     */
        async cadastrarAluno(alunos) {
            try {
                // Faz a requisição para o servidor, passando o endereço e a rota a serem acessados
                const response = await fetch(`${this.serverUrl}${this.routeCadastrarAlunos}`, {
                    // Informa o verbo a ser acessado
                    method: 'POST',
                    // informa os cabeçalhos da requisição
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    // informa o corpo da requisição, contendo as informações do aluno
                    body: JSON.stringify(alunos)
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
                window.alert('Erro ao cadastrar aluno');
                return null;
            }
        }

}

export default new AlunoRequests;