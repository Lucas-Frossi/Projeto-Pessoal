var quizzModel = require("../models/quizzModel");


function buscarPorId(req, res) {
    var id = req.params.id;

    quizzModel.buscarPorId(id).then((resultado) => {
        res.status(200).json(resultado);
    });
}

function listar(req, res) {
    var id = req.params.id;

    quizzModel.listar(id).then((resultado) => {
        res.status(200).json(resultado);
    });
}
module.exports = {
    buscarPorId,
    listar
};