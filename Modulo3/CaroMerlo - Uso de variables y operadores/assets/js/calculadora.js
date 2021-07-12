document.write("Ejercicio 2 (Calculadora)"); 
//Se solicitan valores
var num1 = prompt('Ingrese número 1');
var num2 = prompt('Ingrese número 2');
// Se suman las variables y el resultado se guarda en una var.
var suma =  (parseFloat(num1) + parseFloat(num2));
var resta =  (parseFloat(num1) - parseFloat(num2));
var multi =  (parseFloat(num1) * parseFloat(num2));
var division =  (parseFloat(num1) / parseFloat(num2));
// Se muestra el resultado en la consola
document.write("<br>Valores ingresados: " + num1 + " y " + num2); 
document.write("<br> Suma: " + suma); 
document.write("<br> Resta: " + resta); 
document.write("<br> multiplicación: " + multi); 
document.write("<br> División: " + division); 