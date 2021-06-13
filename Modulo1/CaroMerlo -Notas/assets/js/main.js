//Ventanas de dialogo:Datos del alumno
var valorNom = prompt('Ingrese nombre');
while (valorNom.length == 0) {// Se validan los datos
    alert("Por favor ingrese nombre");
    valorNom = prompt("Ingrese nombre?");
}

var valorApe = prompt('Ingrese apellido');
while (valorApe.length == 0) {// Se validan los datos
    alert("Por favor ingrese apellido");
    valorApe = prompt("Ingrese apellido");
}

var valorCar = prompt("Ingrese nombre de la carrera");
while (valorCar.length == 0) {// Se validan los datos
    alert("Por favor ingrese nombre de la carrera");
    valorCar = prompt("Ingrese nombre de la carrera");
}

//Ventanas de dialogo:Datos del primer ramo
var nomRam1 = prompt("Ingrese nombre del primer ramo");
while (nomRam1.length == 0) {// Se validan los datos
    alert("Por favor ingrese nombre del primer ramo");
    nomRam1 = prompt("Ingrese nombre del primer ramo");
}

var vr11 = prompt("Ingrese nota 1 (" + nomRam1 + ")");
while ( isNaN(parseFloat(vr11)) == true ) {// Se validan los dato nota 1. 
    alert("Ingrese un número válido para la nota 1 ");
    vr11 = prompt("Ingrese nota 1 ");
}

var vr12 = prompt("Ingrese nota 2 (" + nomRam1 + ")");
while (isNaN(parseFloat(vr12))  == true)  {// Se validan los dato nota 2. 
    alert("Ingrese un número válido para la nota 2 ");
    vr12 = prompt("Ingrese nota 2 ");
}


var vr13 = prompt("Ingrese Nota 3 (" + nomRam1 + ")");
while (isNaN(parseFloat(vr13)) == true) {// Se validan los dato nota 3. 
    alert("Ingrese un número válido para la nota 3 ");
    vr13 = prompt("Ingrese nota 3 ");
}

//Ventas de dialogo:Datos del segundo ramo
var nomRam2 = prompt("Nombre del segundo ramo");
while (nomRam2.length == 0) {// Se validan los datos
    alert("Por favor ingrese nombre del segundo ramo" );
    nomRam2 = prompt("Ingrese nombre del segundo ramo");
}
var vr21 = prompt("Ingrese nota 1 (" + nomRam2 + ")");
while (isNaN(parseFloat(vr21))  == true ) {// Se validan los dato nota 1. 
    alert("Ingrese un número válido para la nota 1 ");
    vr21 = prompt("Ingrese nota 1 ");
}

var vr22 = prompt("Ingrese nota 2 (" + nomRam2 + ")");
while (isNaN(parseFloat(vr22))  == true ) {// Se validan los dato nota 2. 
    alert("Ingrese un número válido para la nota 2 ");
    vr22 = prompt("Ingrese nota 2 ");
}

var vr23 = prompt("Ingrese nota 3 (" + nomRam2 + ")");
while (isNaN(parseFloat(vr23))  == true ) {// Se validan los dato nota 3. 
    alert("Ingrese un número válido para la nota 3 ");
    vr23 = prompt("Ingrese nota 3 ");
}

//Ventas de dialogo:Datos del tercer ramo
var nomRam3 = prompt("Nombre del tercer ramo");
while (nomRam3.length == 0) {// Se validan los datos
    alert("Por favor ingrese nombre del tercer ramo");
    nomRam3 = prompt("Ingrese nombre del tercer ramo");
}

var vr31 = prompt("Ingrese nota 1 (" + nomRam3 + ")");
while (isNaN(parseFloat(vr31))  == true ) {// Se validan los dato nota 1. 
    alert("Ingrese un número válido para la nota 1 ");
    vr31 = prompt("Ingrese nota 1 ");
}

var vr32 = prompt("Ingrese nota 2 (" + nomRam3 + ")");
while (isNaN(parseFloat(vr32))  == true ) {// Se validan los dato nota 2. 
    alert("Ingrese un número válido para la nota 2 ");
    vr32 = prompt("Ingrese nota 2 ");
}

var vpa3 = prompt("Ingrese promedio de aprobación");
while (isNaN(parseFloat(vpa3))  == true ) {// Se validan nota de aprobacion. 
    alert("Ingrese un número válido para el promedio de aprobación ");
    vpa3 = prompt("Ingrese promedio de aprobación ");
}

//Se calculan valores
var vp1 = (parseFloat(vr11) + parseFloat(vr12) + parseFloat(vr13)) / 3;
var vp2 = (parseFloat(vr21) + parseFloat(vr22) + parseFloat(vr23)) / 3;
var vna3 = (parseFloat(vpa3) * 3) - (parseFloat(vr31) + parseFloat(vr32));

//Contenido del sitio en js.
document.write("<div class='container'>");
document.write("<h1>Notas Finales</h1>");
document.write("<br><h5>Nombre: " + valorNom + " " + valorApe + "</h5>");
document.write("<h5>Carrera: " + valorCar + "</h5>");
//Tabla encabezado
document.write("<br><table class='table'>"); 
document.write("<thead class='thead-dark'>");
document.write("<tr>");
document.write("<th scope='col'>Ramo</th>");
document.write("<th scope='col'>Nota 1</th>");
document.write("<th scope='col'>Nota 2</th>");
document.write("<th scope='col'>Nota 3</th>");
document.write("<th scope='col'>Promedio</th>");
document.write("</tr");
document.write("</thead>");
document.write("<tbody>");
//Cuerpo de la tabla.
document.write("<tr>");
document.write("<th scope='row'>" + nomRam1 + "</th>");
document.write("<td>" + vr11 + "</td>");
document.write("<td>" + vr12 + "</td>");
document.write("<td>" + vr13 + "</td>");
document.write("<td class='font-weight-bold'>" + vp1.toFixed(2) + "</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<th scope='row'>" + nomRam2 + "</th>");
document.write("<td>" + vr21 + "</td>");
document.write("<td>" + vr22 + "</td>");
document.write("<td>" + vr23 + "</td>");
document.write("<td class='font-weight-bold'>" + vp2.toFixed(2) + "</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<th scope='row'>" + nomRam3 + "</th>");
document.write("<td>" + vr31 + "</td>");
document.write("<td>" + vr32 + "</td>");
document.write("</tr>");
document.write("</tbody>");
//Mensaje final con nota de aprobación
document.write("<caption> Para aprobar el ramo " + nomRam3 + " con nota 4 necesitas obtener un: " + vna3.toFixed(2) + " en la nota 3.</caption>");
document.write("</table");







