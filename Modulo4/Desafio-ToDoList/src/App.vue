<template lang="html">
  <div id="app">    
    <div v-if="mostrar">
      {{ message }}
      <input v-model="new_task"  />
      <button @click="createTask">Crear</button>          
      <ul>
        <li v-for="tarea in tareas">
          <span>{{ tarea.name }}</span>
        </li>
      </ul>
    </div>
  </div>
  
</template>

<script>
import lista from "./lista.vue";

export default {
  name: "app",
  components: {
    lista
  },
  data() {
    return {      
      tareas: [{ name: "Hacer Desafio VueJs" }, { name: "Ir al supermercado" }],
      mostrar: true,
      message: "Tarea",
      
    };
    
  },
  
  methods: {    
    createTask: function () {
    this.tareas.push({
        name: this.new_task,
       
    });

    this.new_task = '';
}
  }
};
</script>
