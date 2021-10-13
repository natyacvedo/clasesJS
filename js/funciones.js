//crear o declarar una funcion sin parametros

function saludar() {
  //todo el codigo que quiero escribir dentro de la funcion
  document.write("Hola mundo<br>");
}

//funcion con parametros o argumentos
function saludo(nombre, apellido) {
  document.write(
    "<br>Hola mi nombre es: " + nombre + " y mi apellido es " + apellido
  );
}

function datosPersonales(direccion, nombre, apellido, dni) {
  document.write(dni);
  document.write(
    "<br>Hola mi nombre es " +
      nombre +
      " y mi apellido es " +
      apellido +
      "mi direccion es: " +
      direccion
  );
}

//funciones que retornan un valor
//function convertirDolaresAPesos(dolares) {
 // let pesosFinales = dolares * 187;
  //cuando queremos extraer un valor de una funcion va la sig linea
  //console.log(pesosFinales);
  //return pesosFinales;
  //la palabra return siempre es la ultima linea de codigo, jamas se ejecuta lo q escriba debajo
//}

//funcion en forma de flecha, simplifica la funcion anterior
let convertirDolaresAPesos = (dolares) => {
  let pesosFinales = dolares * 187;
  console.log(pesosFinales);
  return pesosFinales;
};

//llamar o invocar a una funcion
saludar();
saludar();
saludar();
saludar();

let nombreSolicitado = prompt("Ingrese un nombre");
let apellidoSolicitado = prompt("Ingrese un apellido");
let edad = 22;

saludo(nombreSolicitado, apellidoSolicitado);

//llamamos a la funcion que retorna un valor
let producto = convertirDolaresAPesos(500);
document.write("<br>Producto RTX3090 $" + producto);

document.write("<br>Producto Iphone $" + convertirDolaresAPesos(1300));
