var database = require("../database/config")

function inserir(pontuacao, tentativa, id) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", pontuacao, tentativa, id);

    var instrucaoSql = `
        INSERT INTO resposta (pontuacao, tentativa, fkUsuario) VALUES ('${pontuacao}', '${tentativa}', '${id}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    inserir
};