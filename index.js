import fs from 'fs'

function func(array, condicion) {
    const tiposValidos = ['number', 'string', 'boolean']

    let arrayFiltrado = []

    if (!condicion && !tiposValidos.includes(typeof condicion)) {
        throw new Error ("Condición inválida")
    } 

    for (let i = 0; i < array.length; i++) {
        if(typeof array[i] ===typeof condicion){
            arrayFiltrado.push(array[i])
        }
    }

    let arrayOrdenadoAsc = arrayFiltrado.sort(function(a, b) {return a - b} )

    if (arrayOrdenadoAsc.length===0){
        throw new Error ("No hay datos que cumplan con la condición")
    }

    fs.writeFile('doc.txt', arrayOrdenadoAsc.join(', '), (err) => {
        if (err) {
            throw err;
        }
    });

    return arrayOrdenadoAsc
}

let condicion = "Hola Mundo :)"

try {
    console.log(func([2, 10, "go", 4, "c#", 6, "nodejs", true, "java", 9, 1,
    "python", 12, "ruby", "php", false], condicion));
} catch (error) {
    console.log("Ocurrió un error: ", error);
}

