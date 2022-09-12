<template>
  <h1>HomeComp Component</h1>
  <UserComp>
    <template v-slot:header> <h1>Gema</h1> </template>

    <template v-slot:main> <p>COde Step by Step</p> </template>

    <template v-slot:footer> <button>But Now</button> </template>
  </UserComp>
  <UserComp>
    <template v-slot:header> <h1>Nadia</h1> </template>

    <template v-slot:main> <p>COde Step by Step</p> </template>

    <!-- <template v-slot:footer> <button>But Now</button> </template> -->
  </UserComp>
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