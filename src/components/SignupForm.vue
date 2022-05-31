<template>
  <p class="error">{{ userStore.state.value.error }}</p>
  <form @submit.prevent="onSubmit">
    <TextInput v-model="form.firstname" placeholder="First Name" />
    <TextInput v-model="form.lastname" placeholder="Last Name" />
    <TextInput v-model="form.username" placeholder="Username" />
    <PasswordInput placeholder="Password" v-model="form.password" />
    <PasswordInput
      placeholder="Confirm Password"
      v-model="form.confirmedPassword"
    />
    <button type="submit" class="log-btn">Sign Up</button>
  </form>
</template>
<script>
import PasswordInput from "./reusable/PasswordInput";
import TextInput from "./reusable/TextInput";

import userStore from "../stores/user";
import { ref } from "vue";

export default {
  components: { PasswordInput, TextInput },
  inject: ["reset"],
  setup() {
    const form = ref({
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      confirmedPassword: "",
    });

    return { userStore, form };
  },
  methods: {
    resetError() {
      return this.reset();
    },
    onSubmit() {
      console.log(this.form);
      if (Object.values(this.form).some((v) => v === "")) {
        userStore.state.value.error = "Please complete all fields";
        return;
      }
      if (this.form.password !== this.form.confirmedPassword) {
        userStore.state.value.error = "Passwords should match";
        return;
      } else {
        const rawObj = { ...this.form };
        const { firstname, lastname, username, password } = rawObj;
        userStore.signup(firstname, lastname, username, password);
        Object.keys(this.form).forEach((key) => (this.form[key] = ""));
      }
    },
  },
};
</script>
<style></style>
