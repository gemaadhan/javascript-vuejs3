<template>
  <h1>HomeComp Component {{ Euro }}</h1>
  <h2>Without Computed Property ={{ Euro * rupiah - dollar }}</h2>
  <h2>With Computed Property = {{ getResult }}</h2>
</template>
<script>
export default {
  name: "HomeComp",
  data() {
    return {
      dollar: 10,
      rupiah: 100000,
      Euro: 140000,
    };
  },
  computed: {
    getResult() {
      return this.Euro * this.rupiah - this.dollar;
    },
  },
};
</script>
<style scoped>
h1 {
  color: orange;
}
</style>