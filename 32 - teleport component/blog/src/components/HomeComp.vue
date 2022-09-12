<template>
  <h1>HomeComp Component</h1>

  <teleport to="#footer"><FooterComp /> </teleport>
</template>
<script>
import FooterComp from "./FooterComp.vue";
export default {
  name: "HomeComp",
  components: {
    FooterComp,
  },
};
</script>
<style scoped>
h1 {
  color: orange;
}
</style>