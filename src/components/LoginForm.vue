<template>
  <p class="error">{{ userStore.state.value.error }}</p>
  <form @submit.prevent="onSubmit">
    <input
      @focus="resetError"
      v-model="form.username"
      placeholder="Username"
      type="text"
    />
    <PasswordInput
      :type="passwordFieldType"
      placeholder="Password"
      :model="form.password"
    />
    <!-- <input
        @focus="resetError"
        v-model="form.password"
        placeholder="Password"
        :type="passwordFieldType"
      /> -->

    <button class="log-btn" type="submit">Login</button>
  </form>
</template>

<script>
import userStore from "../stores/user";
import PasswordInput from "./PasswordInput";

import { ref } from "vue";
export default {
  components: { PasswordInput },
  setup() {
    const form = ref({ username: "", password: "" });
    const errors = ref([]);
    return { errors, userStore, form };
  },
  methods: {
    onSubmit() {
      if (!this.form.username || !this.form.password) {
        userStore.state.value.error = "Username and password are required";
        return;
      }
      userStore.login(this.form.username, this.form.password);
      this.form.username = "";
      this.form.password = "";
    },
  },
};
</script>

<style lang="scss">
.error {
  color: $red;
  min-height: 1.2rem;
}
form {
  display: flex;
  flex-direction: column;
  min-width: 300px;
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
}
</style>
