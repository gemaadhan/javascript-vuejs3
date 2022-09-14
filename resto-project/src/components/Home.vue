<template>
    <h1>
        Hello User, Welcome on home page
    </h1>
</template>

<script>
export default {
    name: "HomeComp",
    mounted() {

        let user = localStorage.getItem("user-info");
        if (!user) {
            this.$router.push({ name: "SignUp" })
        }
    }
}
</script>