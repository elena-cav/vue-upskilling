<template>
  <div class="pw-wrapper">
    <input
      ref="name"
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
  props: ["modelValue", "placeholder", "type", "focus"],
  setup() {
    const passwordFieldType = ref("password");
    return { passwordFieldType };
  },
  watch: {
    focus: function () {
      console.log("in here");
      if (this.focus) this.$refs.name.focus();
    },
  },
  methods: {
    toggleVisibility() {
      this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
    },
  },
};
</script>
