<template>
  <h2>User Component</h2>
  <button v-on:click="sendUser(userName)">Send User to Parent</button>
</template>
<script>
export default {
  name: "UserComp",
  data() {
    return {
      userName: "Peter",
    };
  },
  props: {
    sendUser: Function,
  },
};
</script>