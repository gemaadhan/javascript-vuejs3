<template>
  <h1>Reuse Component</h1>

  <ul>
    <li v-for="item in users" :key="item.nama">
      <!-- {{ item.nama }} -- {{ item.email }} -->
      <UserComp :data="item" :getData="getData" />
    </li>
  </ul>
</template>
<script>
import UserComp from "./UserComp.vue";
export default {
  name: "HomeComp",
  components: {
    UserComp,
  },
  methods: {
    getData(nama) {
      alert(nama);
    },
  },
  data() {
    return {
      users: [
        { nama: "Gema", email: "gema@gmail.com" },
        { nama: "Nadia", email: "nadia@gmail.com" },
        { nama: "ramadhana", email: "ramadhana@gmail.com" },
      ],
    };
  },
};
</script>
<style scoped>
h1 {
  color: orange;
}
</style>