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
a {
  color: inherit;
  text-decoration: inherit;
}
h1 {
  font-weight: 500;
  font-size: 1.7rem;
}
.btn,
.btn:focus {
  color: white;
  border-radius: 5px;
  padding: 0.5rem;
  border: none;
  width: 100%;
  align-self: center;
  background-color: $red;
  font-size: 1.2rem;
  text-align: center;
}

.router-link {
  margin-top: 1rem;
  color: $charcoal;
  font-size: 0.9rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: $red;
  }
}
.error {
  color: $red;
  font-size: 0.8rem;
  min-height: 1.2rem;
  margin: 0.5rem 0 0.5rem 0;
  max-width: 300px;
  text-align: center;
}
form {
  display: flex;
  flex-direction: column;
  min-width: 300px;
  row-gap: 1.2rem;
  background-color: white;
  padding: 1rem;
  border-radius: 5px;

  input {
    border: 1px solid $grey;
    padding: 0.5rem 0.8rem 0.5rem 0.8rem;
    border-radius: 5px;

    &:focus-within {
      outline: none;
      border: 1px solid $red;
    }
  }
  .pw-wrapper {
    position: relative;

    input {
      width: 100%;
    }

    .eye-btn {
      position: absolute;
      top: 25%;
      right: 10px;
      .sr-only {
        position: absolute;
        left: -10000px;
        top: auto;
        width: 1px;
        height: 1px;
        overflow: hidden;
      }
    }
  }
}
</style>
