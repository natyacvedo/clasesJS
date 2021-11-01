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

//regular o no, curso, comision, legajo, notas, cuotas al dia
//la palabra extends sinifica q esta heredando todo de la clase persona

class Alumno extends Persona{
  constructor( parametroNombre,
    parametroApellido,
    parametroDni,
    parametroFechaNacimiento,
    parametroEmail,
    parametroTelefono,
    parametroCurso,
    parametroComision,
    parametroCuotasAlDia){
      //ejecutar el constructor de la clase persona
      super( parametroNombre,
        parametroApellido,
        parametroDni,
        parametroFechaNacimiento,
        parametroEmail,
        parametroTelefono);
        this.curso = parametroCurso;
        this.comision = parametroComision;
        this.cuotaAlDia = parametroCuotasAlDia
        

  }
//quiero mostrar el valor de una sola propiedad, uso un get, seescribe sin parametros, devuelve un valor
//al momento de crear un set o un get no debo usar el mismo nombre de la propiedad porq se rompe el codigo
  get mostrarComision(){
    //quiero que el metodo get me muestre el valor de la propiedad comision
    return this.comision;
  }

  mostrarDatos(){
    document.write(`<h5>Alumno: ${this.nombre}</h5>
    <br>Nombre: ${this.nombre}
    <br>Apellido: ${this.apellido}
    <br>DNI: ${this.dni}
    <br>Fecha Nacimiento: ${this.fechaNacimiento}
    <br>Email: ${this.email}
    <br>Curso: ${this.curso}
    <br>Comision: ${this.comision}`);
  }

  /*mostrarDatosComision(){
    document.write(`
    <br>Curso: ${this.curso}
    <br>Comision: ${this.comision}`);
  }*/

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

/*let nombre = prompt("Ingrese un nombre");
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

console.log(naty.mostrarNombre);*/

document.write("<br>" + victor.mostrarNombre + "" + victor.mostrarApellido);

let rodrigo = new Alumno("Rodrigo", "Bazan", 39888222, "04/03/97", "rbazan@gmail.com", 38122233, "FullStack", "19i", true);

rodrigo.mostrarDatos();
//este metodo se creo en la linea 24, lo estamos heredando de ahi
//si yo creo otro metodo y lo llamo igual que el que herede lo q entiende js es q no quiero utilizar el metodo q herede de mi clase
//padre sino q quiero sobreescribirlo, volver a diseñar este metodo

