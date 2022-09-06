<template>
  <h1>HomeComp Component</h1>
  <h1 v-if="show">Condition in VUe JS</h1>
  <h1 v-else>Condition in VUe JS when false</h1>
  <button v-on:click="show = !show">Pencet</button>
</template>
<script>
export default {
  name: "HomeComp",
  data() {
    return {
      show: true,
    };
  },
};
</script>
<style scoped>
h1 {
  color: orange;
}
</style>