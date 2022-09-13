<template>
  <router-link to="/">Home Page</router-link><br />
  <router-link to="/login">Login Page</router-link><br />

  <router-link to="/profile/gema">Profile Page Gema</router-link><br />
  <router-link to="/profile/nadia">Profile Page Nadia</router-link><br />
  <router-link to="/profile/ramadhana">Profile Page Ramadhana</router-link
  ><br />
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
</style>
