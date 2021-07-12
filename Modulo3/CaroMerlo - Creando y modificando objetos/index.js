//Creo func. condtrutora
function Consultorio(nombre, paciente) {
    this.nombre = nombre;
    this.paciente = paciente || [];
}

function Paciente(nombre, edad, rut, diagnostico) {
    this.nombre = nombre;
    this.edad = edad;
    this.rut = rut;
    this.diagnostico = diagnostico;
}


Consultorio.prototype.setPaciente = function (paciente) {
    this.paciente.push(paciente);
}


//Instanciar el objeto
var c1 = new Consultorio('Santa Anselma', [{ nombre: 'Pilar', edad: '40', rut: '12345678', diagnostico: 'Resfrio' },
                                          { nombre: 'Maria', edad: '30', rut: '12345678', diagnostico: 'Resfrio' },
                                         { nombre: 'Sonia', edad: '30', rut: '12345678', diagnostico: 'Resfrio' }]);
var c2 = new Paciente ('Sonia', '40', '12345678', 'Resfrio');
c1.setPaciente(c2);
console.log(c1)

// //Getters y Setters
// function Consultorio(nombre, paciente) {
//     var _nombre = nombre;
//     var _paciente = paciente;
//     Object.defineProperty(this, "_nombre", {
//         get: function () {
//             return _nombre;
//         },
//         set: function (nuevoNombre) {
//             _nombre = nuevoNombre;
//         }
//     });
//     Object.defineProperty(this, "_paciente", {
//         get: function () {
//             return _paciente;
//         }
//     });  
// };

// function Paciente(nombre, edad, rut, diagnostico) {
//     var _nombre = nombre;
//     Object.defineProperty(this, "_nombre", {
//         get: function () {
//             return _nombre;
//         },
//         set: function (nuevoNombre) {
//             _nombre = nuevoNombre;
//         }
//     });

//     Object.defineProperty(this, "_edad", {
//         get: function () {
//             return _edad;
//         },
//         set: function (nuevaEdad) {
//             _edad = nuevoEdad;
//         }
//     });  
// };


// Consultorio.prototype.getNombreConsultorio = function () {
//     return this._nombre;
// }
// Paciente.prototype.getNombrePaciente = function () {
//     return this._nombre;
// }
// Consultorio.prototype.setNombreConsultorio = function (nuevoNombre) {
//     this._nombre = nuevoNombre;
   
// }
// Paciente.prototype.setNombrePaciente = function (nuevoNombre) {
//     this._nombre = nuevoNombre;
// }
// var m1 = new Paciente('Marcela','25','22319785','Gripe');
// var p1 = new Consultorio('La Cisterna', m1);
// console.log(p1);
// console.log(m1);
// console.log(m1.getNombrePaciente());
// console.log(p1.getNombreConsultorio());
// m1.setNombrePaciente('Juana');
// console.log(m1.getNombrePaciente());
// console.log(c1)







