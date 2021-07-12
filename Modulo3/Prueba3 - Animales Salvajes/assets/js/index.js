import { Leon, Lobo, Oso, Serpiente, Aguila } from "./clases/Tipo.js"

let animales = [];
document.getElementById("btnRegistrar").addEventListener("click", () => {
let nombre = document.getElementById("animal");
let edad = document.getElementById("edad");
let comentario = document.getElementById("comentarios");
let previewElement = document.getElementById("preview");
let imagenSrc = previewElement.style.backgroundImage;
let imgSrc = imagenSrc.slice(5, imagenSrc.length -2 )
 

let nuevoAnimal;

if (animal.value == "Leon") {
    nuevoAnimal = new Leon (
        nombre.value,
        edad.value,       
        imgSrc,  
        comentario.value,  
        "Rugido.mp3"
    );
}

if (animal.value == "Lobo") {
    nuevoAnimal = new Lobo (
        nombre.value,
        edad.value,       
        imgSrc,  
        comentario.value,  
        "Aullido.mp3"
    );
}

if (animal.value == "Oso") {
    nuevoAnimal = new Oso (
        nombre.value,
        edad.value,       
        imgSrc,  
        comentario.value,  
        "Gruñido.mp3"
    );
}


if (animal.value == "Serpiente") {
    nuevoAnimal = new Serpiente (
        nombre.value,
        edad.value,       
        imgSrc,  
        comentario.value,  
        "Siseo.mp3"
    );
}

if (animal.value == "Aguila") {
    nuevoAnimal = new Aguila (
        nombre.value,
        edad.value,       
        imgSrc,  
        comentario.value,  
        "Chillido.mp3"
    );
}

if (animal.value  && edad.value && comentario.value) {
    animales.push(nuevoAnimal);    
    animal.selectedIndex = 0;
    edad.selectedIndex = 0;
    comentarios.value = "";
    previewElement.style.backgroundImage ="none";

    reloadTable();
}else {
    alert("Faltan datos por llenar");
}
});
  
const reloadTable  = () => {
    const animalesTemplate = document.getElementById("Animales"); 
    animalesTemplate.innerHTML = "";
    animales.forEach( (a, i) => {
        animalesTemplate.innerHTML += `
        <div class="px-3 pb-2 animales" >
                <div class="card" style="width: 11rem;">
                <H5>${a.getNombre()}</H5>                
                <img src="${a.getImg()}" id ="ImgAnimal" class="" alt="...">   
                <H6>Edad: ${a.getEdad()}</H6>
                <H6>Cometario: ${a.getComentario()}</H6>       
                <audio id="play" src="assets/sounds/${a.getSonido()}"></audio>
                <div>
                <button id = "btnplay" onclick= "document.getElementById('play').play()">play</button>           
                </div>              
                </div>  
         </div>`;    
         console.log (a);     
    })    
}

//<audio id="play" src="assets/sounds/${a.getSonido()}"></audio>
//    <button id = "btnplay" onclick= "document.getElementById('play').play()">play</button>   
document.getElementById ("Animales").addEventListener("click", () =>{       
    document.querySelectorAll(" .animales img").forEach ((i) => {
        i.addEventListener("click", (e) => {
            const imagenSrc = e.target.src;            
            console.log(e);
            var output = `<img src="${imagenSrc}" id ="ImgAnimal" style="width:320PX;" 
            class="" alt="...">  `;
            document.getElementById("animales").innerHTML = output;     
            $('#imagenesModal').modal('show');
        })
    })           
})


