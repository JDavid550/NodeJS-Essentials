function async(micallback) {
    setTimeout(function () {
        console.log("Soy una función asíncrona")
        micallback()
    },2000)
    
}

console.log("Iniciando proceso")
async(function () {
    console.log("Terminando proceso")
},2000)

