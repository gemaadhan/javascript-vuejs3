<template>
  <h1>
    Non Props data muncul ketika kita tidak mendefinisikan object props data
  </h1>
  <UserComp item="some data" name="user-gema" />
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