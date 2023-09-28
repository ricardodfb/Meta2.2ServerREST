const proyectos = require("../modelos/proyecto.js");

const getAll = async function(req,res) {
    let p = proyectos.findAll();
    await res.json(p);
}

const getByID = async function(req,res) {
    await res.json(proyectos.findByID(req.params.id))
}

const add = async function(req,res) {
    const newProject = proyectos.add(req.body);
    await res.json(newProject);
}

exports.getAll = getAll;
exports.getByID = getByID;
exports.add = add;