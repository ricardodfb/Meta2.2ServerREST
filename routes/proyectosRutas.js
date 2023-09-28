const express = require('express');
const router = express.Router();
const proyectosController = require("../controladores/proyectosController.js");
router.get("/",proyectosController.getAll);
router.get("/:id",proyectosController.getByID);
router.post("/", proyectosController.add);

module.exports = router;