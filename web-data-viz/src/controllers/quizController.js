var quizModel = require("../models/quizModel");

function inserir(req, res) {
    var pontuacao = req.body.pontuacaoServer;
    var tentativa = req.body.tentativaServer
    var id = req.body.idServer;

    if (id == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else if (pontuacao == undefined) {
        res.status(400).send("Seu pontuação está undefined!");
    } else if (tentativa == undefined) {
        res.status(400).send("Sua tentativa está undefined!");
    } else {
        quizModel.inserir(pontuacao, tentativa, id)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    inserir
}