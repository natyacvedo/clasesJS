// esto es un comentario simple

/* esto es un comentario
de multiples 
lineas */

// mostrar un mensaje en la consola
console.log("hola comision");

// mostrar un mensaje en la pagina html
document.write("Este es un mensaje");

// mostrar un mensaje en una ventana emergente
//alert("esto es una alerta o ventana emergente");

// crear o declarar una variable ( var - let- const. var en desuso)
var alumno = "Rodrigo";
let edad = 27;

document.write("<br>Alumno: "+ alumno);
document.write("<br>Edad: "+ edad);

alumno = "Marta";
document.write("<br>Alumno: "+ alumno);

//pedirle a un usuario que ingrese el nombre de un alumno
alumno = prompt("Ingrese un nombre de un alumno/a")
document.write("<br>Alumno: "+ alumno);

//variable constante
const url = "https://campus.rollingcodeschool.com/"
document.write("<br>Url: "+ url);

let numero1 = 20
let numero2 = parseInt(prompt("Ingrese un numero"))

document.write("<br>Resultado:" + (numero1 + numero2));
