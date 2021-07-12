document.write("<br><br>  Ejercicio 3 Convertir grados"); 
//Se solicitan valores
var num1 = prompt('Ingrese temperatura');
//Operaciones
var kelvin = parseFloat(num1) + parseFloat(273.15);
var fahrenheit = ((parseFloat(num1) * (9/5)) + 32);
// Se muestra el resultado en la consola
document.write("<br> Valor ingresado en grado Celcius:" + num1); 
document.write("<br> Kelvin:" + kelvin + " °K"); 
document.write("<br> Fahrenheit:" + fahrenheit + " °F"); 