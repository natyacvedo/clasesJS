//let email = "pablodominguez@gmail.com";
//let password = "A1234$567";
//let domicilio = "datos del domicilio";
//let localidad = "t4000";
//let telefono = 3814534634;
//let dni = 35666777;

// crear un objeto con notacion literal
let usuariopablo = {
  //propiedades -> clave: valor
  email: "pablodominguez@gmail.com",
  password:"A1234$567",
  domicilio:"datos del domicilio",
  localidad:"t4000",
  telefono:3814534634,
  dni:35666777,
  estado: true,
//metodos
login: function (){
    //todo el codigo que quiero de este metodo
    console.log("Estamos logueados");
},
logout: () =>{
    //todo el codigo que quiero que haga este metodo de logout
    console.log("Cerramos sesion");
}
}

//mostrar un objeto
console.log(usuariopablo);

//mostrar cada propiedad del objeto - forma 1
document.write("Email: "+ usuariopablo.email);
document.write("<br>localidad: "+ usuariopablo.localidad);

// mostrar cada propiedad del objeto - forma 2
document.write("<br>telefono: "+ usuariopablo["telefono"]);

//cargar una propiedad nueva dentro de un objeto
usuariopablo.nivel = 1;
document.write("<br>Nivel de usuario: "+ usuariopablo.nivel);

//modificar una propiedad de un objeto
usuariopablo.dni = 37666643;

//queremos mostrar todas las propiedades (claves) de un objeto

let claves = (Object.keys(usuariopablo));
console.log(claves) ;

for(let posicion = 0; posicion < claves.length ; posicion ++){
    document.write("<br>" +claves[posicion] + ": "+usuariopablo[claves[posicion]])
    
}

//usar los metodos de un objeto
//si tiene parametros van dentro de los parentesis sino van los parentesis solos, tengo que fijarme como cree el metodo
usuariopablo.login();

usuariopablo.logout();