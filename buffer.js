let abc = Buffer.alloc(26);
console.log(abc)

for (let i = 0; i < 26; i++) {
    abc[i] = i + 97//97 es la a en ASCII: sobre el 97 sigue añadiendo un numero de uno en uno hasta el 26
    // Al momento de imprimir el buffer siempre va a mostrar información en formato hexagesimal
}

console.log(abc)
console.log(abc.toString())