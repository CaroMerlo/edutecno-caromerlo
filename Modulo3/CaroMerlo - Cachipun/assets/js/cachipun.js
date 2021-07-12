//Se solicitan valores
var jugada = prompt('Ingrese Piedra/Papel o Tijera'); 
var num2 =  Math.floor((Math.random()*3)+ 1); 

if (num2 == 1) {
    var ordenador = "Piedra";
} else if (num2 == 2) {
    var ordenador = "Papel";
} else {
     var ordenador = "Tijera";
}

document.write(jugada  + " contra " + ordenador + "<br>");

    if (jugada == ordenador) {
         document.write("Empate, los dos eligieron " + jugada);
    } else {
        if (jugada == "Piedra" && ordenador == "Papel") {
            document.write ("Perdiste! " + jugada + " no le gana a " + ordenador);
        } 
        if (jugada == "Piedra" && ordenador == "Tijera") {
            document.write ("Felicitaciones, ganaste!" + jugada +" gana a " + ordenador);
        } 
        if (jugada == "Papel" && ordenador == "Tijera") { 
             document.write ("Perdiste! " + jugada + " no le gana a " + ordenador);
         }
         if (jugada == "Papel" && ordenador == "Piedra"){
            document.write ("Felicitaciones, ganaste!" + jugada +" gana a " + ordenador);
        }
         if (jugada == "Tijera" && ordenador == "Piedra") {
             document.write ("Perdiste! " + jugada + " no le gana a " + ordenador);
            }
         if (jugada == "Tijera" && ordenador == "Papel") {
            document.write ("Felicitaciones, ganaste!" + jugada +" gana a " + ordenador);
        }
    }
