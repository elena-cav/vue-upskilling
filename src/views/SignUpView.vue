<template>
  Sign up
  <SignupForm />
  <div><router-link to="/">Go back</router-link></div>
</template>
<script>
import userStore from "../stores/user";
import { ref } from "vue";
import SignupForm from "../components/SignupForm.vue";
export default {
  components: { SignupForm },
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
};
</script>
<style></style>
