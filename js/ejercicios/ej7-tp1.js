/* escribe un programa q pida 3 numeros y escriba en la pantalla el mayor de los 3 */

let numero1 = parseInt(prompt("Ingrese un primer numero"));
let numero2 = parseInt(prompt("Ingrese un segundo numero"));
let numero3 = parseInt(prompt("Ingrese un tercer numero"));

console.log(numero1);
console.log(numero2);
console.log(numero3);

if (numero1 > numero2 && numero1 > numero3) {
  document.write("El primer numero ingresado es mayor - " + numero1);
} else if (numero2 > numero3) {
  document.write("El segundo numero ingresado es mayor - " + numero2);
} else if (numero1 == numero2 && numero2 == numero3) {
  document.write("Todos los numeros son iguales -" + numero3);
}else{
    document.write("El tercer numero ingresado es mayor - "+ numero3)
}
