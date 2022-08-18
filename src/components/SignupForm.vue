<template>
  <p class="error missing-fields">
    <fa icon="circle-exclamation" /> Please complete all fields
  </p>
  <form @submit.prevent="onSubmit">
    <TextInput
      @focus="resetErrors"
      v-model="form.firstname"
      placeholder="First Name"
    />
    <TextInput
      @focus="resetErrors"
      v-model="form.lastname"
      placeholder="Last Name"
    />
    <TextInput
      @focus="resetErrors"
      v-model="form.username"
      placeholder="Username"
    />
    <PasswordInput
      ref="'password'"
      :focus="resetErrors"
      placeholder="Password"
      v-model="form.password"
    />
    <PasswordInput
      ref="password"
      :focus="resetErrors"
      placeholder="Confirm Password"
      v-model="form.confirmedPassword"
    />
    <div class="pw-errors-wrapper">
      <p class="error password-validation">
        <fa icon="circle-exclamation" />
        Password must be eight or more characters, contain a number, an
        uppercase character, and a special character.
      </p>
      <p class="error matching-password">
        <fa icon="circle-exclamation" /> Passwords should match
      </p>
    </div>
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
    resetErrors() {
      return Object.keys(this.errors).forEach((key) => {
        this.errors[key] = false;
      });
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
  computed: {
    opacityMatchingPw() {
      return this.errors.matchingPasswords ? 1 : 0;
    },
    opacityMissingFields() {
      return this.errors.missingFields ? 1 : 0;
    },
    opacityPwValidation() {
      return this.errors.passwordValidation ? 1 : 0;
    },
  },
};
</script>
<style lang="scss" scoped>
.password-validation {
  font-size: 0.7rem;
  opacity: v-bind(opacityPwValidation);
}
.matching-password {
  font-size: 0.7rem;
  opacity: v-bind(opacityMatchingPw);
  transform: translate(10px, -14px);
}
.missing-fields {
  font-size: 0.7rem;
  opacity: v-bind(opacityMissingFields);
}
.pw-errors-wrapper {
  margin: -15px 0;
}
</style>

faCircleExclamation
