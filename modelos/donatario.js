const donatarios = [
    {
        rfc:"feib0205",
        nombre:"Ivone Ferrel",
        proyectoAsociados:"1"
    },
    {
        rfc:"feem0215",
        nombre:"Emmanuel Isaac",
        proyectoAsociados:"2"
    },
    {
        rfc:"buva1577",
        nombre:"Erika Bueno",
        proyectoAsociados:"3"
    }
]

const findAll = function(){
    return donatarios;
}

const findByRFC = function(rfc){
    let d = donatarios.find( e=> e.rfc == rfc);
    return d;
}

exports.findAll = findAll;
exports.findByRFC = findByRFC;