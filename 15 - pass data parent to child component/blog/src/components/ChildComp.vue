<template>
  <h2>Child Component</h2>
  <h2>namanya {{ asma }} rumahnya di {{ rinci.alamat }}</h2>
  <button v-on:click="getData()">Click Me</button>
</template>
<script>
export default {
  name: "ChildComp",
  props: {
    asma: String,
    rinci: Object,
    getData: Function,
  },
};
</script>

