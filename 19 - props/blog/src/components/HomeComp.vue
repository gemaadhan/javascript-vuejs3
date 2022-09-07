<template>
  <h1>HomeComp Component</h1>
  <StudentComp :name="name" />
  <TeacherComp name="gema" />
</template>
<script>
import StudentComp from "./StudentComp.vue";
import TeacherComp from "./TeacherComp.vue";
export default {
  name: "HomeComp",
  data() {
    return {
      name: "Bruce",
    };
  },
  components: {
    StudentComp,
    TeacherComp,
  },
};
</script>
<style scoped>
h1 {
  color: orange;
}
</style>