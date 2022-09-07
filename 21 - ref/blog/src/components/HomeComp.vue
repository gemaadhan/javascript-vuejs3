<template>
  <h1>HomeComp Component</h1>
  <input type="text" ref="username" />
  <button v-on:click="refFunction()">Push Here</button>
</template>
<script>
export default {
  name: "HomeComp",
  methods: {
    refFunction() {
      this.$refs.username.focus();
      this.$refs.username.value = "Sayang";
      alert(this.$refs.username.value);
    },
  },
};
</script>
<style scoped>
h1 {
  color: orange;
}
</style>