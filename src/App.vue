<template>
  <div class="homepage">
    <div v-if="!userStore.getters.isLoggedIn">
      <h2>Welcome to this fantastic Login page!</h2>

      <LoginForm />
    </div>
    <div v-else class="text-center">
      <h2>Welcome, {{ userStore.state.name }}</h2>
      <button class="btn btn-secondary" @click="userStore.logout()">
        Logout
      </button>
    </div>
  </div>
</template>

<script>
import LoginForm from "./components/LoginForm";
import { onMounted, defineComponent } from "vue";
import userStore from "./stores/user";
export default defineComponent({
  name: "App",

  components: { LoginForm },

  setup() {
    onMounted(userStore.getUser);
    return { userStore };
  },
});
console.log(userStore.getters.isLoggedIn, userStore.state.name);
</script>
<style lang="scss">
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  font: 100% / 1.15 sans-serif;
  background-color: $background;
}

button,
button:focus {
  cursor: pointer;
  outline: none;
  background: transparent;
  border: 1px solid transparent;
}

#app {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.homepage {
}
</style>
