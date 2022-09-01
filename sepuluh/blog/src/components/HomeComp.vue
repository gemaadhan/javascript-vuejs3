<template>
  <h1>HomeComp Component</h1>
  <input type="text" v-model="data" />
  <h2>{{ data }}</h2>
</template>
<script>
export default {
  name: "HomeComp",
  data() {
    return {
      data: 100,
    };
  },
};
</script>
<style scoped>
h1 {
  color: orange;
}
</style>