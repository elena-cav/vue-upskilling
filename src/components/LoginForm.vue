<template>
  <form>
    <label>Username</label>
    <input v-model="form.username" placeholder="Username" type="password" />
    <label>Password</label>
    <input v-model="form.password" placeholder="Password" type="password" />
    <button type="submit">Login</button>
  </form>
</template>

<script>
import userStore from "../stores/user";
export default {
  data: function () {
    return {
      form: { username: "", password: "" },
    };
  },
  methods: {
    onSubmit() {
      userStore.login(this.form.username, this.form.password);
      this.form.username = "";
      this.form.password = "";
    },
  },
};
</script>

<style></style>
