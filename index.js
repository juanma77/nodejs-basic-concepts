// Para importar módulos externos 
const math = require('./math.js');

// Así importamos los módulos preconfigurados de NodeJS
const os = require('os');

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