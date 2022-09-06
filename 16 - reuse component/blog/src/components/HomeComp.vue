<template>
  <h1>HomeComp Component</h1>
  <UserComp />
</template>
<script>
import UserComp from "./UserComp.vue";
export default {
  name: "HomeComp",
  components: {
    UserComp,
  },
};
</script>
<style scoped>
h1 {
  color: orange;
}
</style>