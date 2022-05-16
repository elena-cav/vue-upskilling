<template>
  <p class="error">{{ userStore.state.value.error }}</p>
  <form @submit.prevent="onSubmit">
    <input v-model="form.firstname" placeholder="First Name" />
    <input v-model="form.lastname" placeholder="Last Name" />
    <input v-model="form.username" placeholder="username" />
    <PasswordInput
      :type="passwordFieldType"
      placeholder="Password"
      :model="form.password"
    />
    <PasswordInput
      :type="passwordFieldType"
      placeholder="Confirm Password"
      :model="form.confirmedPassword"
    />
    <button class="log-btn">Sign Up</button>
  </form>
</template>
<script>
import PasswordInput from "./PasswordInput";
import userStore from "../stores/user";
import { ref } from "vue";

export default {
  components: { PasswordInput },
  setup() {
    const passwordFieldType = ref("password");
    const form = ref({
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      confirmedPassword: "",
    });

    return { userStore, form, passwordFieldType };
  },
  methods: {
    onSubmit() {
      if (this.form.password !== this.form.confirmedPassword) {
        console.log("here");
        userStore.state.value.error = "Passwords should match";
      } else {
        console.log("in here");
      }
    },
  },
};
</script>
<style></style>
