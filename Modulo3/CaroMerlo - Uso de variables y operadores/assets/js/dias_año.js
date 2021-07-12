document.write("<br> <br> Ejercicio 4 (Año/mes/dia)"); 
//Se solicitan valores
var num1 = prompt('Ingrese dias');
//Operaciones
var años = Math.floor(parseFloat(num1) / 365);
var meses = Math.floor((parseFloat(num1) - (años * 365)) / 30);
var dias = Math.floor(parseFloat(num1) - (años * 365) - (meses * 30));
// Se muestra el resultado en la consola
document.write("<br> "+ años + " Año/s"); 
document.write("<br> "+ meses + " mes/es"); 
document.write("<br> "+ dias + " dia/s"); 
