<template>
  <h1 ref="counter">{{ counter }}</h1>
  <button @click="counter = counter + 1">Update Count</button>
</template>
<script>
export default {
  name: "HomeComp",
  data() {
    console.warn("Data is Created");
    return {
      name: "Gema",
      counter: 0,
    };
    //2
  },

  beforeUpdate() {
    // console.log(this.counter);
    console.log("beforeupdate" + this.$refs.counter.textContent);
  },
  updated() {
    // console.log(this.counter);
    console.log("afterupdate" + this.$refs.counter.textContent);
  },
};
</script>
<style scoped>
h1 {
  color: orange;
}
</style>