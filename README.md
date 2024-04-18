TP2 - Primer servidor NODE.JS

Crear un pequeño servicio en Node.js que cumpla con las siguientes especificaciones:
Dado el siguiente array de datos: [2, 10, "go", 4, "c#", 6, "nodejs", true, "java", 9, 1, "python", 12, "ruby", "php", false]
1. Crear una función(solo una) que reciba por parámetros este array y una condición (esta condición puede ser una variable previamente definida)
2. La función debe crear un nuevo array que contenga los valores según el tipo de dato proporcionado por la condición (puede ser “number”, “string”, “boolean”, etc)
3. Este nuevo array debe estar organizado de manera ascendente y contener sólo los datos filtrados
4. Si la condición no existe o no es válida, se debe retornar un mensaje de error
5. Si la condición existe y si el nuevo array tiene datos, se escribirá el contenido de dicho array en un archivo “.txt” con File System Module
