<template>
  <div v-if="isLoading"><LoadingSpinner /></div>
  <div v-else class="homepage">
    <div class="container" v-if="!userStore.getters.value.isLoggedIn">
      <h1>Login</h1>
      <LoginForm />
      <router-link class="router-link" to="/signup"
        >New to here? Sign up</router-link
      >
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
import LoadingSpinner from "../components/reusable/LoadingSpinner";
import { onMounted, ref } from "vue";
export default {
  components: { LoginForm, HomePage, LoadingSpinner },

  setup() {
    const isLoading = ref(true);
    onMounted(() => {
      isLoading.value = false;
      userStore.getUser();
    });
    return { userStore, isLoading };
  },
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-weight: 500;
    display: inline-block;
    padding-bottom: 0.4rem;
    position: relative;
  }
  h1:before {
    content: "";
    position: absolute;
    width: 50%;
    bottom: 0;
    left: 25%;
    border-bottom: 2px solid $red;
  }
}
.signup-link {
  color: $grey;
  font-size: 0.9rem;
}
</style>
