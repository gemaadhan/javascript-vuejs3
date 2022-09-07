<template>
  <h1>{{ text }}</h1>
  <div v-html="tag + tag2 + tag3"></div>
</template>
<script>
export default {
  name: "HomeComp",
  data() {
    return {
      text: "Gema Nadia",
      tag: "<h2>Gema Nadia</h2>",
      tag2: "<h2>Peter</h2>",
      tag3: "<h2>Parker</h2>",
    };
  },
};
</script>
<style scoped>
h1 {
  color: orange;
}
</style>