<template>
  <h1>HomeComp Component</h1>

  <ul>
    <li v-for="item in technology" :key="item">
      {{ item }}
    </li>
  </ul>

  <br />
  <ul>
    <li v-for="item in users" :key="item.name">
      My name is {{ item.name }} and my email is {{ item.email }}
    </li>
  </ul>
</template>
<script>
export default {
  name: "HomeComp",
  data() {
    return {
      technology: ["java", "hehe", "node", "asp"],
      users: [
        {
          name: "gema",
          email: "gema@gmail.com",
        },
        {
          name: "susi",
          email: "susi@gmail.com",
        },
        {
          name: "weleh",
          email: "weleh@gmail.com",
        },
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