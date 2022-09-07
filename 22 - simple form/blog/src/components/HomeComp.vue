<template>
  <h1>Simple Form</h1>
  <p>{{ form }}</p>
  <form action="">
    <label for="email">Email : </label>
    <input type="text" v-model="form.email" placeholder="enter email" />
    <br />
    <label for="password">Password : </label>
    <input
      type="password"
      v-model="form.password"
      placeholder="enter password"
    />
    <br />
    <button v-on:click="login" type="button">Login</button>
  </form>
</template>
<script>
export default {
  name: "HomeComp",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      console.warn(this.form);
    },
  },
};
</script>
<style scoped>
h1 {
  color: orange;
}
</style>