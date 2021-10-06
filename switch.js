/*
switch(opcion){
    case 1:
        todas las lineas de codigo q quiero ejecutar si es el caso que eligio el usuario
        break;
    case 2:
        todas las lineas de codigo q quiero ejecutar si es el caso que eligio el usuario
        break;
    default:
        las lineas q quiero ejecutar si la opcion del usuario es distinta a mis cases.    
}
*/

//estacion preferida del año

let estacion = prompt(
  "Ingrese su estacion del año preferida: 1-verano, 2-otoño, 3-invierno, 4-primavera"
);

switch (estacion) {
  case "1":
  case "verano":
    document.write("Helado");
    break;
  case "2":
    document.write("cafe");
    break;
  case "3":
    document.write("guiso de lenteja");
    break;
  case "4":
    document.write("sandwich de milanesa");
    break;
  default:
    document.write("Opcion erronea vuelva a intentarlo");
}
