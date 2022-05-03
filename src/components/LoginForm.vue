<template>
  <p class="error">{{ error }}</p>
  <form @submit="onSubmit">
    <input v-model="form.username" placeholder="Username" type="text" />
    <div class="pw-wrapper">
      <input
        @focus="resetError"
        @blur="resetError"
        v-model="form.password"
        placeholder="Password"
        :type="passwordFieldType"
      />
      <div class="eye-wrapper">
        <button class="eye-btn" type="button" @click="toggleVisibility">
          <fa v-if="passwordFieldType === 'password'" icon="eye-slash" />
          <fa v-else icon="eye" />
          <span class="sr-only" v-if="passwordFieldType === 'password'"
            >Hide password</span
          >
          <span class="sr-only" v-else>Show password</span>
        </button>
      </div>
    </div>
    <button class="login-btn" type="submit">Login</button>
  </form>
</template>

<script>
import userStore from "../stores/user";
export default {
  data() {
    return {
      passwordFieldType: "password",
      form: { username: "", password: "" },
      error: "",
    };
  },
  methods: {
    onSubmit() {
      userStore.login(this.form.username, this.form.password);
      if (userStore.state.error !== "") this.error = userStore.state.error;

      this.form.username = "";
      this.form.password = "";
    },
    toggleVisibility() {
      this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
    },
    resetError() {
      this.error = "";
    },
  },
};
</script>

<style lang="scss">
.error {
  color: $red;
}
form {
  display: flex;
  flex-direction: column;
  width: auto;
  row-gap: 1.2rem;
  background-color: white;
  padding: 1rem;
  margin-top: 1rem;
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
  .login-btn,
  .login-btn:focus {
    color: white;
    border-radius: 5px;
    padding: 0.5rem;
    border: none;
    width: 100%;
    align-self: center;
    background-color: $red;
  }
}
</style>
