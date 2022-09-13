<template>
  <h1 ref="user">User Componen</h1>
</template>
<script>
export default {
  name: "UserComp",
  beforeUnmount() {
    console.warn("beforeUnmount", this.$refs["user"]);
  },
  unmounted() {
    console.warn("unmounted", this.$refs["user"]);
  },
};
</script>