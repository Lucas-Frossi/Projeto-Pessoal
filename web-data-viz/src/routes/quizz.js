var express = require("express");
var router = express.Router();

var quizzController = require("../controllers/quizzController");

router.get("/buscar/:id", function (req, res) {
  quizzController.buscarPorId(req, res);
});

router.get("/listar/:id", function (req, res) {
  quizzController.listar(req, res);
});

module.exports = router;