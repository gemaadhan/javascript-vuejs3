<template>
  <button @click="show = false">Umpetke</button>
  <UserComp v-if="show" />
</template>
<script>
import UserComp from "./UserComp.vue";
export default {
  name: "HomeComp",
  data() {
    return {
      show: true,
    };
  },
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