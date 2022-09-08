<template>
  <div>
    <h3 v-bind="$attrs">Gema</h3>
    <h3>Nadia</h3>
    <h3>Ramadhana</h3>
  </div>
  <!-- Non props data can view if we add parent tag <div>  -->
  <!-- if not, we can see the props data when we add  v-bind="attrs"  -->
</template>
<script>
export default {
  name: "UserComp",
  //   props: {
  //     item: String,
  //   },
  inheritAttrs: false,
};
</script>

