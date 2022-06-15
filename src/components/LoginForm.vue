<template>
  <p class="error">{{ userStore.state.value.error }}</p>
  <form @submit.prevent="onSubmit">
    <input
      @focus="resetError"
      v-model="form.username"
      placeholder="Username"
      type="text"
    />
    <PasswordInput placeholder="Password" v-model="form.password" />
    <button class="btn" type="submit">Login</button>
  </form>
</template>

<script>
import userStore from "../stores/user";
import PasswordInput from "./reusable/PasswordInput";

import { ref } from "vue";

export default {
  components: { PasswordInput },
  inject: ["reset"],
  setup() {
    const form = ref({ username: "", password: "" });
    userStore.state.value.error = "";
    return { userStore, form };
  },
  methods: {
    resetError() {
      return this.reset();
    },
    onSubmit() {
      console.log(this.form.username, this.form.password);
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

<style lang="scss"></style>
