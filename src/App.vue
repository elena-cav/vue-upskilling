<template>
  <div v-if="!userStore.getters.isLoggedIn">
    <LoginForm />
  </div>
  <div v-else class="text-center">
    <h2>Welcome, {{ userStore.state.name }}</h2>
    <button class="btn btn-secondary" @click="userStore.logout()">
      Logout
    </button>
  </div>
</template>

<script>
import LoginForm from "./components/LoginForm.vue";
import { onMounted } from "vue";
import userStore from "./stores/user";
export default {
  name: "App",
  components: { LoginForm },
  setup() {
    onMounted(userStore.getUser);
    return { userStore };
  },
};
</script>
