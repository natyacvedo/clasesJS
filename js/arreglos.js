/*el arreglo no tiene un limite en las cosas q tengo q guardar pero solo almacena un valor por instante de tiempo*/

//funcion para mostrar los elementos del arreglo
function mostrarArreglo(){
}

//crear o declaramos un arreglo

let series = ["friends","game of thrones","Black Mirror", "Castlevania", 10, true];

//crear un arreglo vacio

let temporadas = [];

//mostrar elemento de una posicion particular del arreglo

document.write(series[2]);
console.log(series.length);

//mostrar todos los elementos de un arreglo con un bucle

for(let posicion = 0; posicion < series.length; posicion++){
    document.write("<br>" +series[posicion])
}

//agregar un elemento al final del arreglo, puede ser un elemento o una variable
series.push("jojo bizarre adventure");

document.write("<h5>Agregar un elemento al final del arreglo</h5>");

for(let posicion = 0; posicion < series.length; posicion++){
    document.write("<br>" +series[posicion])
}

//agregar un elemento en una posicion particular
series.splice(1,0,"Death note") //splice(posicion del elemento, cantidad de elementos a borrar, elemento que quiero agregar si es texto va entre comillas)

document.write("<h5>Agregar un elemento al final del arreglo</h5>");

for(let posicion = 0; posicion < series.length; posicion++){
    document.write("<br>" +series[posicion])
}

//para borrar un elemento por ejemplo de la posicion 6
series.splice(6,1);

series.splice(1,0,"Death note") //splice(posicion del elemento, cantidad de elementos a borrar, elemento que quiero agregar si es texto va entre comillas)

document.write("<h5>Eliminar un elemento de una posicion particular del arreglo</h5>");

for(let posicion = 0; posicion < series.length; posicion++){
    document.write("<br>" +series[posicion])
}

//para modificar un valor de una posicion particular, por ejemplo en la 5

series[5] = "Evangelion";

document.write("<h5>Modificar un elemento de una posicion particular del arreglo</h5>");

for(let posicion = 0; posicion < series.length; posicion++){
    document.write("<br>" +series[posicion])
}

