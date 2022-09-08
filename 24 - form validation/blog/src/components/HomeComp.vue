<template>
  <h1>Simple Form</h1>
  <!-- <p>{{ form }}</p>
   -->
  <ul>
    <li v-for="item in error" :key="item">
      {{item}} is invalid
    </li>
  </ul>
  <form action="">
    <label for="email">Email : </label>
    <input type="text" v-model="form.email" placeholder="enter email" />
    <br />
    <label for="password">Password : </label>
    <input type="password" v-model="form.password" placeholder="enter password" />
    <br />
    <select v-model="form.country" id="">
      <option value="Indonesia">Indonesia</option>
      <option value="USA">USA</option>
      <option value="Russia">Russia</option>
    </select>
    <br />
    <h3>Gender</h3>
    <label for="male">Male : </label>
    <input type="radio" value="male" v-model="form.gender" />
    <br />
    <label for="female">Female : </label>
    <input type="radio" value="female" v-model="form.gender" />
    <br />
    <h3>Technology</h3>
    <label for="male">Java </label>
    <input type="checkbox" value="java" v-model="form.technology" />
    <br />
    <label for="female">node </label>
    <input type="checkbox" value="node" v-model="form.technology" />
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
        country: "",
        gender: "",
        technology: [],
      },
      error: []
    };
  },
  methods: {
    login() {
      this.error = [];
      for (const item in this.form) {
        if (this.form[item] === "" || this.form[item].length === 0) {
          this.error.push(item);
        }

      }
      if (this.error.length === 0) {
        alert("Data has been submitted")
      }
      console.warn(this.error)
    },
  },
};
</script>
<style scoped>
h1 {
  color: orange;
}
</style>