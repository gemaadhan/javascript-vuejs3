<template>
  <h1>HomeComp Component</h1>
  <input type="email" placeholder="enter email" v-model="email" />
  <br />
  <input type="password" placeholder="enter password" v-model="password" />
  <br />
  <button type="button" v-on:click="getData()">Get Data</button>
</template>
<script>
export default {
  name: "HomeComp",
  data() {
    return {
      email: null,
      password: null,
    };
  },
  methods: {
    getData() {
      console.warn("Values : ", this.email, this.password);
    },
  },
};
</script>
<style scoped>
h1 {
  color: orange;
}
</style>