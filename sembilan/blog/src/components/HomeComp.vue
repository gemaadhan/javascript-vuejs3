<template>
  <h1>Home component</h1>
  <h1 v-on:mousemove="getConsole()">Hover Here</h1>
  <button v-on:click="getData(`Button 1 click`)">Click Me</button>
  <button v-on:dblclick="getData(`Button 2 click`)">Click Me</button>
  <button v-on:click="addCount()">+</button>
  <button v-on:click="substractCount()">-</button>

  <h2>{{ count }}</h2>
</template>

<script>
export default {
  name: "HomeComp",
  data() {
    return {
      count: 0
    }
  },
  methods: {
    getData(data) {
      alert(data)
    },
    getConsole() {
      console.log("mousemove")
    },
    addCount() {
      this.count += 1
    },
    substractCount() {
      this.count -= 1
    }

  }
}
</script>

<style>
h1 {
  color: orange;
}
</style>