<script lang="ts" setup>
import SButton from "./s-button.vue";
</script>

<template>
  <nav>
    <div class="logo">Logo</div>
    <div class="buttons">
      <a> Sign up </a>
      <s-button> Log in</s-button>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@import "assets/style/colors.sass";

nav {
  position: sticky;
  padding: 30px 50px;
  display: flex;
  justify-content: space-between;
  background: $dark-gray;
}

.buttons {
  display: flex;
  gap: 30px;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
}

.logo {
  display: flex;
  align-items: center;
  color: $white;
  font-weight: bold;
  font-size: 24px;
  font-family: "Poppins", sans-serif;
}
</style>