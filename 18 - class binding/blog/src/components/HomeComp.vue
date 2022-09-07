<template>
  <h1>CSS Binding</h1>
  <h2 class="staticClass" :class="adjustStyle">Home Compoenent</h2>
  <button v-on:click="colorful = !colorful">Pencet</button>
</template>
<script>
export default {
  name: "HomeComp",
  data() {
    return {
      colorful: false,
    };
  },
  computed: {
    adjustStyle() {
      return {
        green: this.colorful,
        err: true,
        other: true,
      };
    },
  },
};
</script>
<style scoped>
h1 {
  color: orange;
}

.green {
  background-color: green;
  width: 200px;
  padding: 10px;
  color: #fff;
}

.staticClass {
  color: salmon;
}

.err {
  color: red;
}

.other {
  font-size: 70px;
}
</style>