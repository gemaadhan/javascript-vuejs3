<template>
  <div class="user">
    <h2>{{ data.nama }}</h2>
    <h2>{{ data.email }}</h2>
    <button v-on:click="getData(data.nama)">Click</button>
  </div>
</template>

<script>
export default {
  name: "UserComp",
  props: {
    data: Object,
    getData: Function,
  },
};
</script>

<style>
.user {
  background-color: salmon;
  border-bottom: 1px solid;
  padding: 10px;
  margin-bottom: 15px;
}
</style>