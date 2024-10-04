//Ejercicio de POO
/*
Crea una clase Termostato que tenga los atributos temperatura y estado (encendido o apagado).
Debe tener métodos para subir la temperatura, bajar la temperatura, encender y apagar el termostato, 
y mostrar el estado actual
*/
//Creando la clase
class Termostato {
    //Creando el constructor
    constructor(temperatura, estado){
        this._temperatura=temperatura;//Atributos
        this._estado=estado;
    }
    //Creando el get de temperatura
    get temperatura(){
        return this._temperatura;
    }
    //Creando el set de temperatura
    set temperatura(temperatura){
        this._temperatura=temperatura;
    }
    //Creando el get de estado
    get estado(){
        return this._estado;
    }
    //Creando el set de estado
    set estado(estado){
        this._estado=estado;
    }
    //Creando el método para subir la temperatura
    subirTemperatura(nTemp){
        return this._temperatura += nTemp;
    }
    //Creando el método de bajar la temperatura
    bajarTemperatura(nTemp){
        return this._temperatura -= nTemp;
    }
    //Creando el método de encender el termostato
    encenderTermostato(){
        this._estado="Encendido";
    }
    //Creando el método de encender el termostato
    apagarTermostato(){
        this._estado="Apagado";
    }
    //Creando el método de mostrar el estado actual
    mostrarEstadoActual(){
        alert(`El termostato tiene la temperatura: ${term1._temperatura} y el estado: ${term1._estado}`);
    }
    //Crear el método para generar valores aleatorios
    generarAleatorio(){
        return Math.floor(Math.random() * 50) + 1; //El return regresa el valor aleatorio generado
    }
}
//Añadiendo valores iniciales al termostato
let temp = Math.floor(Math.random() * 50) + 1;
let estado = "Apagado";

//Creando el primer termostato
const term1 = new Termostato(temp, estado);

//Creando el menú interactivo - switch
let estad=true;
do {
    opcion = parseInt(prompt(`¡Bienvenido al menú del termostato!, digite una de las siguientes opciones: 
        \n 1 para visualizar el estado actual del termostato
        \n 2 para encender el termostato
        \n 3 para apagar el termostato
        \n 4 para aumentar la temperatura del termostato
        \n 5 para disminuir la temperatura del termostato
        \n 6 Para salir`));

    switch(opcion){
        case 1:
        term1.mostrarEstadoActual();
        break;

        case 2:
        term1.encenderTermostato();
        term1.mostrarEstadoActual();
        break;

        case 3:
        term1.apagarTermostato();
        term1.mostrarEstadoActual();
        break;

        case 4:
        if(term1._estado=="Encendido"){
            let temp1 = term1.generarAleatorio();
            alert(`Se aumentará la temperatura en: ${temp1}`);
            term1.subirTemperatura(temp1);
            term1.mostrarEstadoActual();
        }else{
            alert(`El termostato debe estar encendido para poder aumentar su temperatura.`);
        }
        break;

        case 5:
        if(term1._estado=="Encendido"){
            let temp2 = term1.generarAleatorio();
            alert(`Se disminuirá la temperatura en: ${temp2}`);
            term1.bajarTemperatura(temp2);
            term1.mostrarEstadoActual();
        }else{
            alert(`El termostato debe estar encendido para poder disminuir su temperatura.`);
        }
        break;

        case 6: alert ("Saliendo...");
        estado = false;
        break;

        default:
            alert ("Opción no válida")
    }
} while(estado);