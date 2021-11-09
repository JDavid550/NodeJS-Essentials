function hola(nombre) {
    return new Promise(function (res, rej) {
        setTimeout(function () {
            console.log("Hola " + nombre)
            res(nombre)
            rej("ha habido un problema")
        },2000)
    })
    
}
console.log("Iniciando el proceso...")
hola('Juan')
.then(function (nombre) {
    console.log("Terminado el proceso")
})
.catch(error =>{
    console.log("ha habido un error: " + error)
})

/**La principal diferencia entre un callback y una promesa es que los parametros dejan de ser otra función directamente, y más bien se convierten en un estructura capaz de invocar la siguiente función por medio del método then. También se evita el callbackhell*/