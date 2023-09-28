const donatarios = require("../modelos/donatario.js");

const getAll = async function(req,res) {
    let d = donatarios.findAll();
    await res.json(d);
}

const getByRFC = async function(req,res) {
    await res.json(donatarios.findByRFC(req.params.rfc))
}

exports.getAll = getAll;
exports.getByRFC = getByRFC;