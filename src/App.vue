<template>
  <Form />
</template>

<script>
import Form from "./components/Form.vue";
import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/arya-orange/theme.css";

export default {
  name: "App",
  components: {
    Form,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
