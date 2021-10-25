// nombre, apellido, dni, fechaNacimiento, email, telefono
//una clase es una plantilla
class Persona {
  // el metodo constructor es el 1ero q se ejecuta cuando creo un objeto
  constructor(
    parametroNombre,
    parametroApellido,
    parametroDni,
    parametroFechaNacimiento,
    parametroEmail,
    parametroTelefono
  ) {
    //crear las propiedades del objeto
    this.nombre = parametroNombre;
    this.apellido = parametroApellido;
    this.dni = parametroDni;
    this.fechaNacimiento = parametroFechaNacimiento;
    this.email = parametroEmail;
    this.telefono = parametroTelefono;
  }

  //agregar los metodos es decir las acciones q puedo realizar las propiedades q van a tener mis objetos.pueden ser todos los
  //q quiera pero siempre dentro de las llaves de la clase.
  mostrarDatos() {
    // document.write("<h5>Persona: "+ this.nombre +"</h5><br>Nombre: "+this.nombre+"<br>Apellido: "+ this.apellido)
    //o puedo escribir simplificando las comillas de esta manera
    document.write(`<h5>Persona: ${this.nombre}</h5>
      <br>Nombre: ${this.nombre}
      <br>Apellido: ${this.apellido}
      <br>DNI: ${this.dni}
      <br>Fecha Nacimiento: ${this.fechaNacimiento}
      <br>Email: ${this.email}
      <br>Telefono: ${this.telefono}`);
  }

  //agregar las propiedades conmutadas get y set. no puede llamarse igual a las propiedades del objeto pero si alusivas
  //get mostrar una propiedad del objeto
  get mostrarNombre() {
    return this.nombre;
  }

  get mostrarApellido() {
    return this.apellido;
  }

  //set modificar una propiedad del objeto.siempre tienen que tener un parametro que es por donde va a recibir el nuevo valor
  set modificarNombre(nuevoNombre) {
    this.nombre = nuevoNombre;
  }

  set modificarApellido(nuevoApellido) {
    this.apellido = nuevoApellido;
  }
}

// crear o instanciar un objeto usando la clase

let victor = new Persona(
  "Victor",
  "Ignacio",
  39888777,
  "21/04/91",
  "vignacio@gmail.com",
  3814252525
);

// usar los metodos del objeto
victor.mostrarDatos();

let nombre = prompt("Ingrese un nombre");
let apellido = prompt("Ingrese un apellido");
let dni = prompt("Ingrese un dni");
let fechaNacimiento = prompt("Ingrese una fecha de Nacimiento");
let email = prompt("Ingrese un email");
let tel = prompt("Ingrese un Telefono");

let naty = new Persona(nombre, apellido, dni, fechaNacimiento, email, tel);

naty.mostrarDatos();

//modificar una propiedad de un objeto.
naty.modificarNombre = "Rocio";

naty.mostrarDatos();

console.log(naty.mostrarNombre);

document.write("<br>" + victor.mostrarNombre + "" + victor.mostrarApellido);
