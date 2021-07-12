import Animal from "./Animal.js";

class Leon extends Animal {
    constructor (nombre, edad, img, comentario, sonido){
        super(nombre, edad, img, comentario, sonido)
    }
    
    Rugir (){
        let sonido = this.getSonido()    
    }
    activaraudio() {
        var playme = document.getElementById('play');        
        playme.load();
        playme.play();
      }
}
export {Leon};

class Lobo extends Animal {
    constructor (nombre, edad, img, comentario, sonido){
        super(nombre, edad, img, comentario, sonido)
    }
    
    Aullar (){
        let sonido = this.getSonido(sonido)    
    }

    activaraudio() {
        var playme = document.getElementById('play');        
        playme.load();
        playme.play();
      }
}
export {Lobo};

class Oso extends Animal {
    constructor (nombre, edad, img, comentario, sonido){
        super(nombre, edad, img, comentario, sonido)
    }
    
    Gruñir (){
        let sonido = this.getSonido(sonido)    
    }

    
    activaraudio() {
        var playme = document.getElementById('play');        
        playme.load();
        playme.play();
      }
}
export {Oso};

class Serpiente extends Animal {
    constructor (nombre, edad, img, comentario, sonido){
        super(nombre, edad, img, comentario, sonido)
    }
    
    Sisear (){
        let sonido = this.getSonido(sonido)    
    }
    activaraudio() {
        var playme = document.getElementById('play');        
        playme.load();
        playme.play();
      }
}
export {Serpiente};

class Aguila extends Animal {
    constructor (nombre, edad, img, comentario, sonido){
        super(nombre, edad, img, comentario, sonido)
    }
    
    Chillar (){
        let sonido = this.getSonido(sonido)    
    }
    activaraudio() {
        var playme = document.getElementById('play');          
        playme.load();
        playme.play();
      }
}
export {Aguila};

//console.log(new Leon("Lyon","00", "Leon.png","Nuevo Leon","rugido.mp3"));