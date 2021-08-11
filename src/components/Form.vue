<template>
  <div>
    <form>
      <Textarea v-model="value" :autoResize="true" rows="10" cols="50" />
      <div>
        <Button @submit.prevent @click="validate">Validate</Button>
      </div>
    </form>
    <Message
      v-for="msg of messages"
      :severity="msg.severity"
      :key="msg.content"
      >{{ msg.content }}</Message
    >
  </div>
</template>

<script>
import Button from "primevue/button";
import Textarea from "primevue/textarea";
import Message from "primevue/message";

import axios from "axios";

export default {
  name: "Form",
  methods: {
    async validate() {
      const result = await axios
        .post("/.netlify/functions/validate", this.value)
        .catch((e) => e.response);

      if (result.status === 200 && '_paq' in window) {
        // eslint-disable-next-line no-undef
        _paq.push(['trackGoal', 1]);
      }

      this.messages = [
        {
          severity: result.status === 200 ? "success" : "warn",
          content: result.data,
        },
      ];
    },
  },
  data() {
    return {
      value: "",
      messages: [],
    };
  },
  components: {
    Button,
    Message,
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
