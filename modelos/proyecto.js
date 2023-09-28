const proyectos = [
    {
        id:1,
        nombre:"reforestacion",
        descripcion:"reforestacion del bosque incendiado"
    },
    {
        id:2,
        nombre:"alimenta mascotas",
        descripcion:"colecta de alimento para animales sin hogar"
    },
    {
        id:3,
        nombre:"apoya victimas de terremoto",
        descripcion:"dona dinero a víctimas de terremoto"
    }
]

const findAll = function(){
    return proyectos;
}

const findByID = function(id){
    let p = proyectos.find( e=> e.id == id);
    return p;
}

exports.findAll = findAll;
exports.findByID = findByID;