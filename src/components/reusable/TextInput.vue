<template>
  <input
    @focus="resetError"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
<script>
export default {
  props: ["modelValue", "placeholder"],
  inject: ["reset"],

  methods: {
    resetError() {
      return this.reset();
    },
  },
};
</script>
