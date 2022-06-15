<template>
  <h1 class="welcome">
    Welcome, {{ userStore.state.value.firstname }}
    {{ userStore.state.value.lastname }}
  </h1>
  <button class="btn" @click="userStore.logout()">Logout</button>
</template>
<script>
import userStore from "../stores/user";

export default {
  setup() {
    console.log(userStore.state.value);
    console.log(localStorage.getItem("currentUser").firstname);

    return { userStore };
  },
};
</script>
<style scoped>
.welcome {
  margin-bottom: 1rem;
}
</style>
