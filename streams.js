const fs = require('fs')

let data  = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt')
readableStream.setEncoding('utf-8') //Permite configurar que la salida del texto sea en ASCII y no en hexadecimal
readableStream.on('data', function (chunk) {
    
    console.log(chunk)
})

const stream = require('stream')

process.stdout.write('hola ')

process.stdout.write('que ')

process.stdout.write('tal ')

const Transform = stream.Transform;
const util = require('util')

function Mayus() {
    Transform.call(this)
}
util.inherits(Mayus,Transform)

Mayus.prototype._transform = function (chunk, endod, cb) {
    chunkMayus = chunk.toString().toUpperCase()
    this.push(chunkMayus)
    cb()
}

let mayus = new Mayus
readableStream.pipe(mayus).pipe(process.stdout)