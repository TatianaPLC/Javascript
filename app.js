//Comentario de una linea
/* 
Comentario de varias lineas 
*/
/*console.log("Hola Mundo");*/

//Variables
/*
let numero1 = 45;
let numero2 = 39;
const pi = 3.1415;
let estado = true;
let numero3 = 78;
numero3 = 125;
let direccion = "calle 7 sur 18"
let suma, resta, multiplicacion, mod, division;
let nulo = null;
*/

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
/*
let anio;

anio = parseInt(prompt("Ingrese su año de nacimiento"));
*/
/*
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
*/

//Operador ternario
/*
let edad = 18;
let res = (edad >= 18)? "Es mayor de edad" : "Es menor de edad";
console.log(res);
*/
//Estructura case
/*
let dia = 5;

switch(dia){
    case 1: console.log("Es Lunes");
    break;
    case 2: console.log("Es Martes");
    break;
    case 3: console.log("Es Miercoles");
    break;
    case 4: console.log("Es Jueves");
    break;
    case 5: console.log("Es Viernes");
    break;
    case 6: console.log("Es Sabado");
    break;
    case 7: console.log("Es Domingo");
    break;
    default: console.log("El día no existe");
}
*/
//Otro ejemplo del switch
/*
let operador = "+";
switch (operador){
    case "+": console.log("Es una suma");
    break;
    case "-": console.log("Es una suma");
    break;
    case "*": console.log("Es una suma");
    break;
    case "/": console.log("Es una suma");
    break;
    default: console.log("Operación no existe");
}
*/

//Ejercicio del switch case
/*
let dolar = 4280;
let euro = 4728;
let libraEsterlina = 5601;

let valor = parseInt(prompt("Ingrese el valor que requiere convertir"));
let divisa = prompt("Registre el D para convertir en dolar, E para convertir en Euro y L para convertir en Libra Esterlina");
let conversion;

switch (divisa){
    case "D": 
        conversion = valor/dolar;
        console.log(`El valor ${valor} en dolares corresponde a: ${conversion}`);
    break;
    case "E":
        conversion = valor/euro;
        console.log(`El valor ${valor} en euros corresponde a: ${conversion}`);
    break;
    case "L": 
        conversion = valor * libraEsterlina;
        console.log(`El valor ${valor} en Libras Esterlinas corresponde a: ${conversion}`);
    break;
    default: console.log("No se ingreso una conversión válida");
}
*/
//Estructuras repetitivas con for
//Incremento
/*
for (let i = 1; i<=10; i++){
    console.log(i);
}
*/
//De 3 en 3
/*
for (let i = 3; i<=30; i+=3){
    console.log(i);
}
*/
//Decremento
/*
for (let i=10; i>= 1; i--){
    console.log(i);
}
*/
//Decremento de 2 en 2, desde 30 hasta 1
/*
for (i=30; i>=1; i-=2){
    console.log(i);
}
*/
//Tabla del 6
/*
let tabla = 6;
for (let i = 1; i <= 10; i++){
    console.log(`${tabla} x ${i} = ${(tabla*i)}`);
}
*/
//La tabla que yo quiera
/*
let tabla = parseInt(prompt("Ingrese el número de la tabla que quiere consultar"));

for (let i = 1; i <= 10; i++){
    console.log(`${tabla} x ${i} = ${(tabla*i)}`);
}
*/
//Ejercicio del restaurante - switch case
/*
let menu = prompt("Registre C para Carne, P para Pescado y E para Ensalada");
menu=menu.toUpperCase();
switch (menu){
    case "C": 
        console.log(`¿Desea beber vinotinto?`);
    break;
    case "P":
        console.log(`¿Desea beber vinoblanco?`);
    break;
    case "E": 
        console.log(`¿Desea beber agua?`);
    break;
    default: console.log("¡Elija carne, pescado o ensalada!");
}
*/
//Ejercicio de las estaciones - switch case
/*
let estacion = parseInt(prompt("Registre el número del mes (1 al 12) para conocer su estación"));

switch (estacion){
    case 12: 
    case 1: 
    case 2: 
        console.log(`En este mes la estación será Invierno`);
    break;
    case 3: 
    case 4:
    case 5:
        console.log(`En este mes la estación será Primavera`);
    break;
    case 6:
    case 7:
    case 8: 
        console.log(`En este mes la estación será Verano`);
    break;
    case 9:
    case 10:
    case 11: 
        console.log(`En este mes la estación será Otoño`);
    break;
    case 3: 
        console.log(`En este mes la estación será Primavera`);
    break;
    default: console.log("¡Digite un número de mes válido entre el 1 y el 12!");
}
*/
//Ejercicio de la sala de juegos - switch case
/*En una sala de juegos existen cuatro salas: Consolas, Juegos 2D, Juegos 3D y Realidad Virtual.
Si un usuario paga 4 créditos puede acceder a todas, si paga 3 solo podrá acceder a las tres primeras,
Si paga 2 a las dos primeras y si paga 1 solo a la primera sala.
Tecleo que pago 2 créditos, el script me dirá que puedo acceder a las salas de consola y juegos 2D.*/
/*
let creditos = parseInt(prompt("Registre el número de créditos que desea pagar"));

switch (creditos){
    case 4:  
        console.log(`Puedes acceder a todas las salas (Consolas, Juegos 2D, Juegos 3D y Realidad Virtual)`);
    break;
    case 3:
        console.log(`Puedes acceder a las siguientes salas (Consolas, Juegos 2D, Juegos 3D)`);
    break;
    case 2:
        console.log(`Puedes acceder a las siguientes salas (Consolas, Juegos 2D)`);
    break;
    case 1:
        console.log(`Puedes acceder a las siguientes salas (Consolas)`);
    break;
    default: console.log("¡Solo puedes pagar minimo 1 crédito y máximo 4 créditos!");
}
*/

/* Un comerciante hace descuentos a sus clientes de la siguiente forma:
Si ha comprado menos de 100 mil pesos no hay descuento
Si la compra está entre 100 mil y 300 mil pesos le descuenta un 5%
Si la compra está por encima de 300 mil hasta 500 mil pesos le descuenta un 10%
Si la compra supera los 500 mil pesos le descuenta un 15%
Es decir: hago una compra de 150 mil: pago 150000 - 5% de 150000, o sea 142,500 pesos.*/
/*
let compras = prompt("Registre el valor total en pesos que debe pagar el cliente");
let descuento;
let total;

switch (true){
    case compras <100000:  
        total = compras;
        alert(`El cliente no recibe descuento, debe pagar: ${total}`);
    break;
    case compras >=100000 && compras <= 300000:
        total = compras - (compras * 0.05);
        alert(`El cliente recibe 5% descuento, debe pagar: ${total}`);
    break;
    case compras >300 && compras <=500:
        total = compras - (compras * 0.10);
        alert(`El cliente recibe 10% descuento, debe pagar: ${total}`);
    break;
    case compras >500:
        total = compras - (compras * 0.15);
        alert(`El cliente recibe 15% descuento, debe pagar: ${total}`);
    break;
    default: console.log("¡Debe registrar un valor a pagar válido mayor que 0!");
}
*/

//Ejercicio 2 sumas los valores de I
/*
let n= parseInt(prompt("Introduce un número positivo: "));
let sum= 0;

for (let i = 1; i <= n; i++){
    sum +=i;
}
console.log(`La suma de los números del 1 al ${n} es: ${sum}`);
*/

//Otro ejercicio con tablas de multiplicar - for
/*
let t;

for (let t = 1; t <= 10; t++){
    console.log(`La tabla del ${t} es: `);
    for (let i = 1; i <= 10; i++){
        console.log(`${t} x ${i} = ${(t*i)}`);
    }
}
*/

//Imprimir la suma de los primeros 100 números impares
/*
let suma=0;
for (let i = 1; i <=200; i+=2){
    console.log(`el valor es: ${i}`);
    suma += i;
}
console.log(`La suma de los primeros 100 números impares es: ${suma}`);
*/
//Ciclo While
/*
let numero = 1;
while(numero <= 10){
    console.log(numero);
    numero++;
}
*/

//Sumar numeros positivos
/*
let n = 1;
let sum = 0;

while(n > 0){
    n = parseInt(prompt("Ingrese un número positivo para sumarlos e ingrese un número negativo para salir"));
    sum += n;
    
    if (n < 0){
        sum -= n;
    }
    console.log(`La suma: ${sum}`);
}
console.log(`Lo que suman los números ingresados es: ${sum}`);
*/

//Desarrollar menú de opiciones
/*
let opcion;
let estado = true;
let coseno, seno, raiz, numero;
*/
/*
Opciones para realizar un calculo matematico
1. Raiz
2. Seno
3. Coseno
*/
/*
while(estado){
opcion = (parseInt(prompt(`Seleccione una opción \n 1. Raiz \n 2. Seno de N1 \n 3. Coseno de N1 \n 4. Salir`)));

switch(opcion){
    case 1: alert("Seleccionó Raiz");
    numero = (parseFloat(prompt(`Ingrese el número para calcular la raiz`)));
    raiz = Math.sqrt(numero);
    alert(`La raiz de ${numero} es: ${raiz}`);
    break;

    case 2: alert("Seleccionó Seno de N1");
    numero = (parseFloat(prompt(`Ingrese el número para calcular el seno`)));
    seno = Math.sin(numero);
    alert(`El seno de ${numero} es: ${seno}`);
    break;

    case 3: alert("Seleccionó coseno de N1");
    numero = (parseFloat(prompt(`Ingrese el número para calcular el coseno`)));
    seno = Math.cos(numero);
    alert(`El coseno de ${numero} es: ${coseno}`);
    break;

    case 4: alert("Seleccionó Salir");
    estado = falso;
    break;

    default:
        alert("La opción seleccionada no es válida");
}
}
*/

//Adivinar un número generado aleatoriamente
/* 
1. Generar un número aleatorio del 1 al 50
2. Solicitar al usuario un número
3. Si el numero ingresado no es igual al número generado, mostrar "El número generado es mayor a x" o 
"El número generado es menor a x"
4. Si el numero ingresado es igual al generado, mostrar "Adivinaste"
*/
/*
let aleatorio = Math.floor(Math.random() * 50) + 1;
let estado = true;
let numero;
let contador = 0;

while(estado){
    alert(`El número es: ${aleatorio}`);
    numero = (parseInt(prompt(`¡Adivine el número del 0 a 50!, ingrese el número para intentarlo.`)));
    
    if(numero<0 || numero>50 || isNaN(numero)){
        alert(`¡Ingresaste un número inválido!, vuelve a intentarlo.`);
    } else if (numero<aleatorio){
        alert(`¡El número a advinar es mayor al número ingresado!, sigue intentando.`);
    } else if (numero>aleatorio){
        alert(`¡El número a adivinar es menor al número ingresado!, sigue intentando.`);
    } else if (numero==aleatorio){
        alert(`¡Genial!, adivinaste el número, lo intentaste ${contador} veces antes de adivinarlo.`);
        estado=false;
    }
    contador +=1;
}
*/
// Do While

//Calculo del area de un circulo, cuadrado, y un triangulo
// Area circulo A = pi * r*r, Area del cuadrado A = lado * lado, Area del triangulo A = B * H /2
/*
let ac, acu, at;
let r, lado, b, h;
let opcion;
const pi = 3.1416;
let estado=true;

do {
    opcion = parseInt(prompt(`1. Área del circulo \n 2. Área del cuadrado \n Área del triangulo`));

    switch(opcion){
        case 1: alert ("Area del circulo");
        r = parseFloat(prompt(`Ingrese el valor del radio`));
        ac = pi * (r*r);
        alert (`El área del circulo es: ${ac}`);
        break;

        case 2: alert ("Area del Cuadrado");
        lado = parseFloat(prompt(`Ingrese el valor del lado`));
        acu = (lado*lado);
        alert (`El área del cuadrado es: ${acu}`);
        break;

        case 3: alert ("Area del Triangulo");
        b = parseFloat(prompt(`Ingrese el valor de la base`));
        h = parseFloat(prompt(`Ingrese el valor de la altura`));
        at = (b*h)/2;
        alert (`El área del triangulo es: ${at}`);
        break;

        case 4: alert ("Saliendo");
        estado = false;
        break;

        default:
            alert ("Opción no válida")
    }
} while(estado);
*/
// Conversiones Temperaturas
/*
De kelvin a Celsius C = K - 273.15
De Kelvin a Farenheit F = ((9*(K - 273.15)) / 5) + 32
De Farenheit a Celsius C = (5*(F - 32)) / 9
De Farenheit a Kelvin K = ((5*(F - 32)) / 9) + 273.15
De Celsius a Kelvin K = C + 273.15
De Celsius a Farenheit F = ((9 * C) / 5) + 32
*/
let c, k, f;
let opcion;
let estado=true;

do {
    opcion = parseInt(prompt(`Conversor de Temperaturas, digíte una de las siguientes opciones: 
        \n 1 para convertir de kelvin a Celsius
        \n 2 para convertir de Kelvin a Farenheit
        \n 3 para convertir de Farenheit a Celsius
        \n 4 Para convertir de Farenheit a Kelvin
        \n 5 Para convertir de Celsius a Kelvin
        \n 6 Para convertir de Celsius a Farenheit
        \n 7 Para salir`));

    switch(opcion){
        case 1: alert ("Convertir de kelvin a Celsius");
        k = parseFloat(prompt(`Ingrese el valor en Kelvin que quiere convertir a Celsius`));
        c = k - 273.15;
        alert (`El valor ${k} en Kelvin equivale a ${c} Celsius`);
        break;

        case 2: alert ("Convertir de Kelvin a Farenheit");
        k = parseFloat(prompt(`Ingrese el valor en Kelvin que quiere convertir a Farenheit`));
        f = ((9*(k - 273.15)) / 5) + 32;
        alert (`El valor ${k} en Kelvin equivale a ${f} Farenheit`);
        break;

        case 3: alert ("Convertir de Farenheit a Celsius");
        f = parseFloat(prompt(`Ingrese el valor en Farenheit que quiere convertir a Celsius`));
        c = (5*(f - 32)) / 9;
        alert (`El valor ${f} en Farenheit equivale a ${c} Celsius`);
        break;

        case 4: alert ("Convertir de Farenheit a Kelvin");
        f = parseFloat(prompt(`Ingrese el valor en Farenheit que quiere convertir a Kelvin`));
        k = ((5*(f - 32)) / 9) + 273.15;
        alert (`El valor ${f} en Farenheit equivale a ${k} Kelvin`);
        break;

        case 5: alert ("Convertir de Celsius a Kelvin");
        c = parseFloat(prompt(`Ingrese el valor en Celsius que quiere convertir a Kelvin`));
        k = c + 273.15;
        alert (`El valor ${c} en Celsius equivale a ${k} Kelvin`);
        break;

        case 6: alert ("Convertir de Celsius a Farenheit");
        c = parseFloat(prompt(`Ingrese el valor en Celsius que quiere convertir a Farenheit`));
        f = ((9 * c) / 5) + 32;
        alert (`El valor ${c} en Celsius equivale a ${f} Farenheit`);
        break;

        case 7: alert ("Saliendo...");
        estado = false;
        break;

        default:
            alert ("Opción no válida")
    }
} while(estado);
