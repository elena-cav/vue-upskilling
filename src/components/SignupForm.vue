<template>
  <p v-if="errors.missingFields" class="error">Please complete all fields</p>
  <form @submit.prevent="onSubmit">
    <TextInput v-model="form.firstname" placeholder="First Name" />
    <TextInput v-model="form.lastname" placeholder="Last Name" />
    <TextInput v-model="form.username" placeholder="Username" />
    <PasswordInput placeholder="Password" v-model="form.password" />
    <p v-if="errors.passwordValidation" class="error">
      Password should be at least 8 characters long, contain a number, an
      uppercase character, and a special character.
    </p>
    <PasswordInput
      placeholder="Confirm Password"
      v-model="form.confirmedPassword"
    />
    <p v-if="errors.matchingPasswords" class="error">Passwords should match</p>
    <button type="submit" class="btn">Sign Up</button>
  </form>
</template>
<script>
import PasswordInput from "./reusable/PasswordInput";
import TextInput from "./reusable/TextInput";
import userStore from "../stores/user";
import { ref } from "vue";
import specialChars from "../utils/specialChars";

export default {
  components: { PasswordInput, TextInput },
  inject: ["reset"],
  setup() {
    userStore.state.value.error = "";
    const form = ref({
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      confirmedPassword: "",
    });
    const errors = ref({
      passwordValidation: false,
      matchingPasswords: false,
      missingFields: false,
    });
    const passwordValidation = ref({
      pwLength: 0,
      containsEighChars: false,
      containsNumber: false,
      containsUppercase: false,
      containsSpecialChars: false,
    });

    return { errors, userStore, form, passwordValidation };
  },

  methods: {
    specialChars,
    resetError() {
      return this.reset();
    },
    checkPassword() {
      let {
        containsEightChars,
        containsNumber,
        containsSpecialChars,
        containsUpperCase,
        pwLength,
      } = this.passwordValidation;
      pwLength = this.form.password.length;
      containsEightChars = pwLength > 8;
      containsNumber = /\d/.test(this.form.password);
      containsUpperCase = /[A-Z]/.test(this.form.password);
      containsSpecialChars = specialChars(this.form.password);

      return (
        containsEightChars &&
        containsSpecialChars &&
        containsUpperCase &&
        containsNumber
      );
    },
    onSubmit() {
      if (Object.values(this.form).some((v) => v === "")) {
        this.errors.missingFields = true;
        return;
      }
      const isValidPassword = this.checkPassword();
      if (!isValidPassword) {
        this.errors.passwordValidation = true;
        return;
      }
      if (this.form.password !== this.form.confirmedPassword) {
        this.errors.matchingPasswords = true;
        return;
      } else {
        const rawObj = { ...this.form };
        const { firstname, lastname, username, password } = rawObj;
        const isSignedUp = userStore.signup(
          firstname,
          lastname,
          username,
          password
        );
        if (isSignedUp) {
          this.$router.push("/");
          Object.keys(this.form).forEach((key) => (this.form[key] = ""));
        }
      }
    },
  },
};
</script>
<style></style>
