let numero1 = parseInt(prompt("Ingrese un numero"));
let numero2 = parseInt(prompt("Ingrese un segundo numero"));

//si quiero ir viendo en consola si estan bien hechas las variables tengo que hacer
console.log(numero1);
console.log(numero2);

/* Estructura if
if(condicion logica){
    todas las lineas de codigo cuando la condicion es verdadera o true
}else{
    todas las lineas de codigo cuando la condicion es falsa o false
}
*/

if (numero1 > numero2) {
  //numero 1 es mayor
  document.write("El numero 1 es mayor que el numero 2 - " + numero1);
} else if (numero1 == numero2) {
  document.write("Ambos numeros son iguales -" + numero2);
} else {
  // numero2 es mayor al numero1
  document.write("El numero 2 es mayor que el numero 1 - " + numero2);
}



/*let numero1= parseInt(prompt("Ingrese un numero"));
let numero2= parseInt(prompt("Ingrese un segundo numero"));

console.log(numero1);
console.log(numero2);

/* Estructura if
if ( condicion logica) {
    todas las lineas de codigo cuando la condicion es verdadera o true
}else{
    todas las lineas de codigo cuando la condicion es falsa o false
}
*/

/*if( numero1 > numero2){
    // numero1 es mayor
    document.write("El numero 1 es mayor que el numero 2"+numero1);
}else{
    // numero 2 es mayor al numero1
    document.write("El numero 2 es mayor que el numero 1"+numero2)
}
*/
