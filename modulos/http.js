const { Console } = require('console')
const http = require('http')

http.createServer(router).listen(3000)
// Si abrimos localhost:3000 aparecera el resultado de la petición 
console.log("escuchando")

function router (req, res){
    console.log('Nueva petición: ' + req.url)
    switch (req.url) {
        case '/hola':
            res.write('Hola! que tal?')
            res.end();
            break;
    
        default:
            res.write('Error 404. No sé que quieres')
            res.end();
            break;
    }
    /* res.write("<h1>Hola, ya se usar http de NodeJS</h1>")
    res.end(); */
}