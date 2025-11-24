var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/kpis/:idUsuario", function (req, res) {
    medidaController.buscarMedidasKpi(req, res);
});

router.get("/grafico/", function (req, res) {
    medidaController.buscarMedidasGrafico(req, res);
});


module.exports = router;