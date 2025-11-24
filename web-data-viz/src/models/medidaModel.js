var database = require("../database/config");

function buscarMedidasKpi(idUsuario, limite_linhas) {

    var instrucaoSql = `SELECT 
    pontuacao,
    ROUND((pontuacao / 5) * 100, 2) AS porcentagem_acertos,
    (SELECT COUNT(*) FROM resposta WHERE fkUsuario = ${idUsuario}) AS quantidade_tentativas
FROM resposta
WHERE fkUsuario = ${idUsuario}
ORDER BY idResposta DESC
LIMIT ${limite_linhas};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasGrafico() {

    var instrucaoSql = `SELECT 
    preferencia,
    COUNT(*) AS quantidade_usuarios
FROM usuario
GROUP BY preferencia
ORDER BY quantidade_usuarios DESC;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarMedidasKpi,
    buscarMedidasGrafico
}
