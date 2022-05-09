<template>
  <div class="homepage">
    <div v-if="!userStore.getters.value.isLoggedIn">
      <h1>Welcome to this fantastic Login page!</h1>

      <LoginForm />
    </div>
    <div v-else class="text-center">
      <h1 class="welcome">Welcome, {{ userStore.state.value.name }}</h1>
      <button class="log-btn" @click="userStore.logout()">Logout</button>
    </div>
  </div>
</template>

<script>
import LoginForm from "./components/LoginForm";
import userStore from "./stores/user";
export default {
  name: "App",
  components: { LoginForm },

  setup() {
    return { userStore };
  },
};
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
