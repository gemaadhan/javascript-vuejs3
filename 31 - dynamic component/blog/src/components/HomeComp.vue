<template>
  <h1>HomeComp Component</h1>
  <button v-on:click="tab = 'JavaComp'">Java Button</button>
  <button v-on:click="tab = 'NodeComp'">Node Button</button>
  <button v-on:click="tab = 'PhpComp'">Php Button</button>
  <component :is="tab" />
</template>
<script>
import JavaComp from "./JavaComp.vue";
import NodeComp from "./NodeComp.vue";
import PhpComp from "./PhpComp.vue";
export default {
  name: "HomeComp",
  components: {
    JavaComp,
    NodeComp,
    PhpComp,
  },
  data() {
    return {
      tab: "JavaComp",
    };
  },
};
</script>
<style scoped>
h1 {
  color: orange;
}
</style>