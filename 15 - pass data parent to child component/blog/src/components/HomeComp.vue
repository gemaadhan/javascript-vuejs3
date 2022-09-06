<template>
  <h1>HomeComp Component</h1>
  <!-- <ChildComp name="bruce" /> -->
  <ChildComp
    v-bind:asma="nama"
    v-bind:rinci="detail"
    v-bind:getData="getData"
  />
</template>
<script>
import ChildComp from "./ChildComp.vue";
export default {
  name: "HomeComp",
  components: {
    ChildComp,
  },
  data() {
    return {
      nama: "gema",
      detail: {
        alamat: "Dinar Mas",
        email: "gema@gmail.com",
      },
    };
  },
  methods: {
    getData() {
      alert("Function called");
    },
  },
};
</script>
<style scoped>
h1 {
  color: orange;
}
</style>