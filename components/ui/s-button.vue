<script lang="ts" setup>
const setting = defineProps({
  type: { type: String, required: false, default: "secondary" },
  uppercase: { type: Boolean, required: false, default: false },
});
</script>

<template>
  <button :class="({ upper: uppercase }, type)">
    <slot />
  </button>
</template>

<style lang="scss">
@import "assets/style/colors.sass";

button {
  font-family: "Poppins", sans-serif;
  padding: 9px 70px;
  border: none;
  cursor: pointer;
  color: $dark-gray;
  font-size: 18px;
  border-radius: 15px;
  transition: 0.3s ease-in-out opacity;

  &:hover {
    opacity: 0.8;
  }
}

.secondary {
  background: $purple;
}

.primary {
  background: $yellow;
}

.upper {
  text-transform: uppercase;
}
</style>
