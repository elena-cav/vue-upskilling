<template>
  <div class="pw-wrapper">
    <input
      @focus="resetError"
      :v-model="model"
      :placeholder="placeholder"
      :type="passwordFieldType"
    />
    <div class="eye-wrapper">
      <button class="eye-btn" type="button" @click="toggleVisibility">
        <fa v-if="type === 'password'" icon="eye-slash" />
        <fa v-else icon="eye" />
        <span class="sr-only" v-if="type === 'password'">Hide password</span>
        <span class="sr-only" v-else>Show password</span>
      </button>
    </div>
  </div>
</template>
<script>
import userStore from "../stores/user";
import { ref } from "vue";

export default {
  props: ["model", "placeholder", "type"],
  setup(props) {
    const passwordFieldType = ref("password");
    console.log(props.placeholder);

    return { passwordFieldType };
  },
  methods: {
    toggleVisibility() {
      this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
    },
    resetError() {
      userStore.state.value.error = "";
    },
  },
};
</script>
