<template>
  <h1>HomeComp Component {{ "Hello".length }}</h1>
  <h2>Email : {{ (email = "bukangema@gmail.com") }}</h2>
  <h2>Mobile : {{ mobile }}</h2>
  <h2>Name : {{ getName("Gema Nadia Ramadhana") }}</h2>
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
};
</script>
<style scoped>
h1 {
  color: orange;
}
</style>