document.write("Hola mundo linea 1");
document.write("<br>Hola mundo linea 2");
document.write("<br>Hola mundo linea 3");
document.write("<br>Hola mundo linea 4");
document.write("<br>Hola mundo linea 5");
document.write("<br>Hola mundo linea 6");
document.write("<br>Hola mundo linea 7");

//while
/*while(condicion logica){
    todas las lineas de codigo que me interesan
    hasta que cambie la condicion logica 
}

*/
//let contador = 1;

//while( contador <= 50){
//    document.write("Hola mundo linea"+contador+ "<br>"); 
//    contador++ //contador = contador + 1;  
//}

//do-while hacer alguna tarea mientras se cumpla una condicion logica
/*
do{
    todas las lineas de codigo que me interesan
    en algun momento tengo q cambiar la condicion logica
}while(condicion logica)
*/

/*let contar = 40;

do{
    document.write("Hola mundo linea"+contar+ "<br>");
    contar--; //contar = contar - 1;
}while(contar >= 1)*/

/*for(declarar una variable; condicion logica; incrementar o decrementar la variable ){
todas las lineas de codigo que me interesan
}*/

for(let indice = 1; indice <= 50 ; indice = indice + 1 ){
    document.write("Hola mundo linea" +indice+ "<br>");
}