<template>
  <h1>UserName : {{ name }}</h1>
  <UserComp :sendUser="getUserName" />
</template>
<script>
import UserComp from "./UserComp.vue";
export default {
  name: "HomeComp",
  data() {
    return {
      name: "",
    };
  },
  components: {
    UserComp,
  },
  methods: {
    getUserName(name) {
      this.name = name;
    },
  },
};
</script>
<style scoped>
h1 {
  color: orange;
}
</style>