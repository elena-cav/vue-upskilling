<template>
  <div class="container">
    <router-view />
  </div>
</template>

<script>
import userStore from "./stores/user";

export default {
  name: "App",

  setup() {},
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
</style>
