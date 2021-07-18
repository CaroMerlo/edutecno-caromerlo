<template lang="html">
  <div id="app">    
    <div v-if="mostrar">
      {{ message }}
      <input v-model="new_task"  />
      <button @click="creaTask">Crear</button>         
      <ul>
        <li v-for="tarea in tareas">
          <span>{{ tarea.name }}</span>
          <button @click="eliminarTask(index)">Eliminar</button>  
          
        </li>
      </ul>
    </div>
  </div>
  
</template>

<script>
import HelloVue from "./helloVue.vue";

export default {
  name: "app",
  components: {
    HelloVue
  },
  data() {
    return {      
      tareas: [{ name: "Hacer Desafio VueJs" }, { name: "Ir al supermercado" }],
      mostrar: true,
      message: "Tarea",      
    };    
  },
  computed: {   
  },
  
  methods: {    
    creaTask() {
       this.tareas.push({
        name: this.new_task,       
    });
    this.new_task = '';
    },
    eliminarTask(index) {
      this.tareas.splice(index, 1);
    },

      metodoDelPadre() {
      console.log("Evento del hijo controlado");
      this.checked = !this.checked;
      this.frutas.push({ name: "NuevaFruta", comprado: true });
    },
    mostrarComponente() {
      console.log("Soy un metodo");
      this.mostrar = !this.mostrar;
    }
  }
};
</script>

<style>
</style>
