<template>
  <h1 class="welcome">
    Welcome, {{ userStore.state.value.firstname }}
    {{ userStore.state.value.lastname }}
  </h1>
  <button class="log-btn" @click="userStore.logout()">Logout</button>
  <div class="signup-link">
    <p>New to here? <router-link to="/signup">Sign up</router-link></p>
  </div>
</template>
<script>
import userStore from "../stores/user";

export default {
  setup() {
    return { userStore };
  },
};
</script>
<style scoped>
.welcome {
  margin-bottom: 1rem;
}
</style>
