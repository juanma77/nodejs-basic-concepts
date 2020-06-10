// Para importar módulos externos 
const math = require('./math.js');

// Así importamos los módulos preconfigurados de NodeJS

// Para trabajar con métodos sobre información del SO   
const os = require('os');

// Para trabajar con archivos del sistema
const fs = require('fs');

// Para trabajar con métodos y arquitectura http y poder crear un servidor 
const http = require('http');

// Para utilizar el módulo que permtie cambiar el color de las letras del terminal de node 
const colors = require('colors');

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

// Para crear un servidor e indicar el puerto en el cual estará escuchando 
const handleServer =  function ( req, res ){

    // Escribimos el tipo de respuesta de la petición 
    res.writeHead(200, { 'Content-type': 'text/html' }); 

    // Contenido de la página 
    res.write('<h1>Hola Mundo desde NodeJS</h1>');

    // Debemos de finalizar siempre la respuesta 
    res.end();
}

const server = http.createServer(handleServer);

server.listen(3800, function(){
    console.log('Server running on port 3800!'.green);
});

// Para crear un servidor e indicar su puerto pero ahora utilizando Express (Comentar el código desde el inicio hasta la línea anterior y dejar este sin comentar para ver la funcionalidad con Express)
const express = require('express');
const server = express();

server.get('/', ( req, res ) =>{
   // console.log("Hola Mundo");
    res.send('<h1>Hola Mundo desde Express</h1>');
});

server.listen(3800, () =>{
    console.log('Server listenning on port 3800!');
});