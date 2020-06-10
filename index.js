// Para importar módulos externos 
const math = require('./math.js');

// Así importamos los módulos preconfigurados de NodeJS

// Para trabajar con métodos sobre información del SO   
const os = require('os');

// Para trabajar con archivos del sistema
const fs = require('fs');

console.log(math.add(1, 2)); 
console.log(math.substract(1, 2)); 
console.log(math.multiply(1, 2)); 
console.log(math.divide(1, 2)); 

// Ver el tipo de SO
console.log(os.platform());

// Ver la plataforma sobre la cual estamos ejecutando NodeJS
console.log(os.release());

// Ver la memoria libre que tenemos en nuestro SO
console.log('Free Memory: ', os.freemem(), ' bytes ');

// Ver la memoria total que tenemos en nuestro SO
console.log('Total Memory:', os.totalmem(), ' bytes ');

// Esta es una operación asíncrona puesto que se lleva a cabo una operación que toma tiempo y puesto que el programa sigue ejecutando las líneas debajo de esta función hasta obtener una respuesta de dicha operación
fs.writeFile('./nuevo.txt', 'Este es el texto del nuevo archivo', function (err){
    if( err ){
        console.log('An error exists: ', err);
    }
    console.log('File created with success!');
});

console.log('Esta línea se ejecutará después de la operación writeFile puesto que dicha operación es asíncrona');

// Este método es para leer lo que se encuentra dentro de un archivo 
fs.readFile('./nuevo.txt', function ( err, data ){
    // Si existe un error avisamos al usuario 
    if(err){
        console.log('An error occurred while creating the file');
    }
    // En caso contrario convertimos los datos a string para poder leerlos adecuadamente 
    console.log(data.toString());
});