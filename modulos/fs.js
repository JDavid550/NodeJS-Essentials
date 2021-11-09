const fs = require('fs');



function leer(ruta, cb) {
    fs.readFile(ruta, (err,data)=>{
        console.log(data)
    })
    
}

leer(__dirname + '/archivo.txt')

function escribir(ruta, contenido, cb) {
    fs.writeFile(ruta, contenido, (err)=>{
        if(err){
            console.log("No he podido escribirlos")
        }else{
            console.log("Se ha escrito correctamente")
        }
    })
}

escribir(__dirname + '/archivo.txt', 'Hola, soy un archvio nuevo', console.log)