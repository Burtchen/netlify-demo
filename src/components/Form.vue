<template>
  <div>
    <form>
      <Textarea v-model="value" :autoResize="true" rows="10" cols="50" />
      <div>
        <Button @submit.prevent @click="validate">Validate</Button>
      </div>
    </form>
  </div>
</template>

<script>
import Button from "primevue/button";
import Textarea from "primevue/textarea";

const SCHEMA = {
  title: "person",
  type: "object",
  required: ["last name"],
  additionalProperties: true,
  properties: { "last name": { type: "string", maxLength: 50 } },
};

export default {
  name: "Form",
  methods: {
    validate() {
      const Ajv = require("ajv");
      const ajv = new Ajv();

      const valid = ajv.validate(SCHEMA, JSON.parse(this.value));
      if (!valid) {
        console.log(ajv.errors);
      }
    },
  },
  data() {
    return {
      value: "",
    };
  },
  components: {
    Button,
    Textarea,
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
