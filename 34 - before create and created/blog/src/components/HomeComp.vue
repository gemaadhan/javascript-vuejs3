<template>
  <h1>HomeComp Component {{ name }}</h1>
</template>
<script>
export default {
  name: "HomeComp",
  data() {
    console.warn("Data is Created");
    return {
      name: "",
    };
    //2
  },
  beforeCreate() {
    this.name = "Nadia";
    alert("before create");
    // 1
  },
  created() {
    alert("created");
    // 3
  },
};
</script>
<style scoped>
h1 {
  color: orange;
}
</style>