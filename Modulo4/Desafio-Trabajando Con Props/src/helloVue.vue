<template>
  <div class="hellovue">
   
    {{ message1 }}
    <button @click="clickGuardar">Llamar al padre</button>
  </div>
</template>

<script>
export default {
  name: "HelloVue",
  props: {
    message1: {
      type: String,
      required: true
    }
  },
  methods: {    
    clickGuardar() {
        this.$emit('creaTask', sasdad);
     },
  }
};
</script>

<style scoped>
.hellovue {
  font-size: 20px;
  border: 1px solid black;
  padding: 20px;
}
</style>
