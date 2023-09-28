const donadores = [
    {
        rfc:"ferb3003",
        nombre:"Ricardo Ferrel",
        proyectosAsociados:"1,2"
    },
    {
        rfc:"remt2903",
        nombre:"Eric Rios",
        proyectosAsociados:"3"
    },
    {
        rfc:"roml2608",
        nombre:"Miguel Romero",
        proyectosAsociados:"2,3"
    }
]

const findAll = function(){
    return donadores;
}

const findByRFC = function(rfc){
    let d = donadores.find( e=> e.rfc == rfc);
    return d;
}

exports.findAll = findAll;
exports.findByRFC = findByRFC;