class Animal  {
    constructor (nombre, edad, img, comentario, sonido) {

       let Nombre = nombre;
       let Edad = edad;
       let Img = img;
       let Comentario = comentario;
       let Sonido = sonido;

       this.getNombre = () => Nombre
       this.getEdad = () => Edad
       this.getImg= () => Img
       this.getComentario = () => Comentario
       this.getSonido = (sonido) => Sonido

       this.setSonido =  (sonido) => (Sonido = sonido);
    }

    get Nombre(){
        return this.getNombre();
    }

    get Edad(){
        return this.getEdad();
    }

    get Img(){
        return this.getImg();
    }
    
    get Comentario(){
        return this.getComentario();
    }
    
    get Sonido(){
        return this.getSonido();
    }

    set Sonido(sonido) {
        return this.getSonido(sonido);
    }
    
}
export default Animal;
