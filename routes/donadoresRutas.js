const express = require('express');
const router = express.Router();
const donadoresController = require("../controladores/donadoresController.js");
router.get("/",donadoresController.getAll);
router.get("/:rfc",donadoresController.getByRFC);

module.exports = router;