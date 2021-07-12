import Animales from "./Consulta.js";

document.getElementById ( "animal" ).addEventListener ( "click", async()=> {
    const { animales } = await  Animales.getdata();
    console.log(animales);
    const anl = document.getElementById ("animal").value;   
    const imgAnl = animales 
    .find((a) => a.name == anl);
 
    var resultado = (`url(http://localhost:5500/assets/imgs/${imgAnl.imagen})`);
  
    document.getElementById ( "preview" ).style.backgroundImage =  (`url(http://localhost:5500/assets/imgs/${imgAnl.imagen})`);

   
});