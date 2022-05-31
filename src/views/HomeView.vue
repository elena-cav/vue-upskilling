<template>
  <div class="homepage">
    <div v-if="!userStore.getters.value.isLoggedIn">
      <h1>Welcome to this fantastic Login page!</h1>
      <LoginForm />
      <div>
        <p>New to here? <router-link to="/signup">Sign up</router-link></p>
      </div>
    </div>
    <div v-else class="text-center">
      <h1 class="welcome">
        Welcome, {{ userStore.state.value.firstname }}
        {{ userStore.state.value.lastname }}
      </h1>
      <button class="log-btn" @click="userStore.logout()">Logout</button>
    </div>
  </div>
</template>
<script>
import LoginForm from "../components/LoginForm";
import userStore from "../stores/user";

export default {
  components: { LoginForm },
  setup() {
    return { userStore };
  },
};
</script>

<style lang="scss">
.log-btn,
.log-btn:focus {
  color: white;
  border-radius: 5px;
  padding: 0.5rem;
  border: none;
  width: 100%;
  align-self: center;
  background-color: $red;
  font-size: 1.2rem;
}

.welcome {
  margin-bottom: 1rem;
}
</style>
