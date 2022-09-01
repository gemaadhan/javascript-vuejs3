<template>
  <h1>Get Checkbox & Radio Button Value</h1>
  <h3>Technology</h3>

  <label for="java">java</label>
  <input type="checkbox" value="java" v-model="technology" id="java" />

  <label for="node">node</label>
  <input type="checkbox" value="node" v-model="technology" id="node" />

  <label for="php">php</label>
  <input type="checkbox" value="php" v-model="technology" id="php" />

  <br />

  <h3>Profession</h3>
  <label for="student">student</label>
  <input type="radio" value="student" v-model="profession" />
  <label for="developer">developer</label>
  <input type="radio" value="developer" v-model="profession" />
  <h4>Technology : {{ technology }}</h4>
  <h4>Profession : {{ profession }}</h4>
</template>

<script>
export default {
  name: "HomeC",
  data() {
    return {
      technology: [],
      profession: null,
    };
  },
};
</script>


<style scoped>
h1 {
  color: orange;
}
</style>