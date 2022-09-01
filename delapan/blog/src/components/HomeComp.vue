<template>
  <h1>HomeComp Component {{ "Hello".length }}</h1>
  <h2>Email : {{ (email = "bukangema@gmail.com") }}</h2>
  <h2>Mobile : {{ mobile }}</h2>
  <h2>Name : {{ getName("Gema Nadia Ramadhana") }}</h2>
  <h2>Name : {{ getNama("Nadia") }}</h2>
  <h2>Data : {{ getData() }}</h2>
  <h2>Data : {{ getData().nama }}</h2>
  <h2>Email : {{ getData().email }}</h2>
</template>
<script>
export default {
  name: "HomeComp",
  data() {
    return {
      email: "gema@gmail.com",
      mobile: 9999,
      getName(name) {
        return name;
      },
    };
  },
  methods: {
    getNama(nama) {
      return nama
    },
    getData() {
      return {
        nama: "Gemambul",
        email: this.email
      }
    }
  }
};
</script>
<style scoped>
h1,
h2 {
  color: orange;
}
</style>