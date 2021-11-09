let suma = 0

console.time('bucle') // Permite evaluar tiempos de un algoritmo
for (let i = 0; i < 1000000; i++) {
    suma += i
    
}
console.timeEnd('bucle')
console.log(suma)
