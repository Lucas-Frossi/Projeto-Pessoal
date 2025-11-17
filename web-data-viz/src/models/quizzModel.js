var database = require("../database/config");

function buscarPorId(id) {
    var instrucaoSql = `SELECT * FROM questoes WHERE idQuestoes = '${id}'`;

    return database.executar(instrucaoSql);
}

function listar(id) {
    var instrucaoSql = `SELECT * FROM alternativas WHERE fkQuestoes = '${id}';`;

    return database.executar(instrucaoSql);
}

module.exports = {
    buscarPorId,
    listar
};