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
let suma, resta, multiplicacion, mod, division;
let nulo = null;

//Imprimiendo variables
/*
console.log(numero1);
console.log(numero2);
console.log(pi);
console.log(estado);
console.log(numero3);

suma = numero1 + numero2;
console.log(suma);

console.log(direccion);
resta = numero1 - numero2;
multiplicacion = numero1 * numero2;
mod = numero1 % numero2;
division = numero1 / numero2;
*/

//Concatenar valores
/*
console.log('El primer valor es: ' + numero1);
console.log('El segundo valor es: ' + numero2);
console.log('La suma de ' + numero1 + ' y ' + numero2 + ' es ' + suma);
*/

//Literal template
/*
console.log(`la suma de ${numero1} y ${numero2} es ${suma}`);
console.log(`la resta de ${numero1} y ${numero2} es ${resta}`);
console.log(`la multiplicación de ${numero1} y ${numero2} es ${multiplicacion}`);
console.log(`el módulo de ${numero1} y ${numero2} es ${mod}`);
console.log(`la división de ${numero1} y ${numero2} es ${division}`);
*/

//Typeof nos permite visualizar el tipo de dato de una variable
/*
console.log(typeof(numero1));
console.log(typeof(numero2));
console.log(typeof(pi));
console.log(typeof(estado));
console.log(typeof(numero3));
*/
//Se usa parseInt para hacer la conversión a entero del tipo de dato, parsefloat es para flotantes
/*
let num1 = parseInt(prompt(("ingrese el primer valor")));
let num2 = parseInt(prompt(("ingrese el segundo valor")));
let sum = num1 + num2;
console.log(`El primer valor ingresado es: ${num1} y el segundo valor ingresado es: ${num2}`);
console.log(`La suma entre el valor : ${num1} y el valor: ${num2} es: ${sum}`);
*/

//Generación de numeros aleatorios
//Numero aleatorio entre 1 y 50
//Forma 1
/*
let alea = Math.floor(Math.random() * 50) + 1;
console.log(alea);
*/
//Forma 2
//Genera un aleatorio entre 0 y 99
/*
let alea1 = Math.floor(Math.random() * 99) + 1;
console.log(alea1);
*/
//Estructura del IF
/*
let edad = 20;

if(edad >=18){
    console.log("Es mayor de edad");
}else{
    console.log("Es menor de edad");
}
*/
//Ejercicio 2
/*
let calificacion;

calificacion = parseFloat(prompt("Ingrese calificación"));

if(calificacion < 3.0){
    console.log("Reprobó");
}else if(calificacion > 3.1 && calificacion <= 4.0){
    console.log("Aprobó");
}else{
    console.log("El estudiante es muy bueno");
}
*/
/*
    && operador lógico y se cumplen las dos condiciones.
    || operador lógico o se cumple una de las dos condiciones. (se dice pie)
*/

//Ejercicio de generaciones

let anio;

anio = parseInt(prompt("Ingrese su año de nacimiento"));

if (anio >= 1883 && anio <= 1900){
    console.log("¡Perteneces a la generación perdida!");
}else if(anio >= 1901 && anio <= 1924){
    console.log("¡Perteneces a la generación grandiosa!");
}else if(anio >= 1925 && anio <= 1945){
    console.log("¡Perteneces a la generación silenciosa!");
}else if(anio >= 1946 && anio <= 1964){
    console.log("¡Perteneces a la generación Baby Boomers!");
}else if(anio >= 1965 && anio <= 1980){
    console.log("¡Perteneces a la generación X!");
}else if(anio >= 1981 && anio <= 1996){
    console.log("¡Perteneces a la generación Y!");
}else if(anio >= 1997 && anio <= 2012){
    console.log("¡Perteneces a la generación Z!");
}else if(anio >= 2013 && anio <= 2025){
    console.log("¡Perteneces a la generación Alpha!");
}else {
    console.log("No haces parte de ninguna generación registrada");
}
