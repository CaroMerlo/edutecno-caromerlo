document.write("<br> <br> Ejercicio 5 (Suma/promedio)"); 
//Se solicitan valores
var num1 = prompt('Ingrese número 1');
var num2 = prompt('Ingrese número 2');
var num3 = prompt('Ingrese número 3');
var num4 = prompt('Ingrese número 4');
var num5 = prompt('Ingrese número 5');
//Operaciones
var sumas =  parseFloat(num1) +  parseFloat(num2) +  parseFloat(num3) +  parseFloat(num4) +  parseFloat(num5)
var prom =  (parseFloat(num1) +  parseFloat(num2) +  parseFloat(num3) +  parseFloat(num4) +  parseFloat(num5))/5
// Se muestra el resultado en la consola
document.write("<br> Suma: " + sumas); 
document.write("<br> Promedio: " + prom); 