<template>
  <div class="homepage">
    <div v-if="!userStore.getters.value.isLoggedIn">
      <h1>Welcome to this fantastic Login page!</h1>
      <LoginForm />
      <div class="signup-link">
        <p>New to here? <router-link to="/signup">Sign up</router-link></p>
      </div>
    </div>
    <div v-else class="text-center">
      <HomePage />
    </div>
  </div>
</template>
<script>
import LoginForm from "../components/LoginForm";
import userStore from "../stores/user";
import HomePage from "../components/HomePage";

export default {
  components: { LoginForm, HomePage },
  setup() {
    return { userStore };
  },
  mounted() {
    console.log("isloggedinHOMEMOUNTED", userStore.getters.value.isLoggedIn);
  },
  updated() {
    console.log("isloggedinHOMEUPDATED", userStore.getters.value.isLoggedIn);
  },
};
</script>

<style lang="scss">
.signup-link {
  color: $grey;
  font-size: 0.9rem;
}
</style>
