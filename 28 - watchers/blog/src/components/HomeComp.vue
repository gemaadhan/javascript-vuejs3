<template>
  <h1>HomeComp Component</h1>
  {{ count }}
  <button v-on:click="addOne"><h2>+</h2></button>
  <button v-on:click="substractOne"><h2>-</h2></button>
</template>
<script>
export default {
  name: "HomeComp",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    addOne() {
      this.count = this.count + 1;
    },
    substractOne() {
      this.count = this.count - 1;
    },
  },
  watch: {
    count(val, prev) {
      if (val > 10 && val > prev) {
        this.count = this.count - 1;

        alert("The value has reached the limit");
      }
    },
  },
};
</script>
<style scoped>
h1 {
  color: orange;
}
</style>