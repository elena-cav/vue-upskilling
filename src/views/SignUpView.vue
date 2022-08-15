<template>
  <div class="container">
    <h1>Signup</h1>
    <SignupForm class="signupform" />
    <router-link class="router-link" to="/"
      >Already have an account?</router-link
    >
  </div>
</template>
<script>
import userStore from "../stores/user";
import SignupForm from "../components/SignupForm.vue";
export default {
  components: { SignupForm },
  setup() {
    return { userStore };
  },
};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 0.5rem;
  h1 {
    font-weight: 500;
    display: inline-block;
    padding-bottom: 0.4rem;
    position: relative;
  }
  h1:before {
    content: "";
    position: absolute;
    width: 50%;
    bottom: 0;
    left: 25%;
    border-bottom: 2px solid $red;
  }
}
</style>
