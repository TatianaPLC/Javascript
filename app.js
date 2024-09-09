//Comentario de una linea
/* 
Comentario de varias lineas 
*/
console.log("Hola Mundo");

//Variables
let numero1 = 45;
let numero2 = 39;
const pi = 3.1415;
let estado = true;
let numero3 = 78;
numero3 = 125;
let direccion = "calle 7 sur 18"

console.log(numero1);
console.log(numero2);
console.log(pi);
console.log(estado);
console.log(numero3);

let suma = numero1 + numero2;
console.log(suma);

console.log(direccion);
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;

//Concatenar valores
console.log('El primer valor es: ' + numero1);
console.log('El segundo valor es: ' + numero2);
console.log('La suma de ' + numero1 + ' y ' + numero2 + ' es ' + suma);

//Literal template
console.log(`la suma de ${numero1} y ${numero2} es ${suma}`);
console.log(`la resta de ${numero1} y ${numero2} es ${resta}`);
console.log(`la multiplicación de ${numero1} y ${numero2} es ${multiplicacion}`);

