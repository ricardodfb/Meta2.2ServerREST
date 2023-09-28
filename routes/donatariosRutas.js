const express = require('express');
const router = express.Router();
const donatariosController = require("../controladores/donatariosController.js");
router.get("/",donatariosController.getAll);
router.get("/:rfc",donatariosController.getByRFC);

module.exports = router;