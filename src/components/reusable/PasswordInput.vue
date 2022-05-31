<template>
  <div class="pw-wrapper">
    <input
      @focus="resetError"
      :placeholder="placeholder"
      :type="passwordFieldType"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <div class="eye-wrapper">
      <button class="eye-btn" type="button" @click="toggleVisibility">
        <fa v-if="passwordFieldType === 'password'" icon="eye-slash" />
        <fa v-else icon="eye" />
        <span class="sr-only" v-if="passwordFieldType === 'password'"
          >Hide password</span
        >
        <span class="sr-only" v-else>Show password</span>
      </button>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  props: ["modelValue", "placeholder", "type"],
  inject: ["reset"],
  setup() {
    const passwordFieldType = ref("password");
    return { passwordFieldType };
  },

  methods: {
    resetError() {
      return this.reset();
    },
    toggleVisibility() {
      this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
    },
  },
};
</script>
