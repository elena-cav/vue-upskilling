<template>
  <div class="container">
    <router-view />
  </div>
</template>

<script>
import userStore from "./stores/user";

export default {
  name: "App",
  methods: {
    resetError() {
      userStore.state.value.error = "";
    },
  },
  provide() {
    return {
      reset: this.resetError,
    };
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
</style>
