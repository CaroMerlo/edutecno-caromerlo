<template>
  <div class="lista">
    soy un primer texto estatico de un componente hijo
    {{ message1 }}
    <button @click="clickResponse">Llamar al padre</button>
  </div>
</template>

<script>
export default {
  name: "lista",
  props: {
    message1: {
      type: String,
      required: true
    }
  },
  methods: {
    clickResponse(event) {
      //sentencias, condicion, iteracion x cada, emito un evento ,etc
      this.$emit("eventoDelHijo", "Soy info de un hijo");
    }
  }

  
};
