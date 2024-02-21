<script setup lang="ts">
const setting = defineProps({
  type: { type: String, required: false, default:'secondary' },
})
</script>

<template>
  <button :class="type">
    <slot/>
  </button>
</template>

<style lang="scss">
@import "assets/style/colors.sass";
button{
  padding:9px 70px ;
  border: none;
  cursor: pointer;
  color: $dark-gray;
  font-size: 18px;
  text-transform: uppercase;
  border-radius: 15px;
  transition:0.3s ease-in-out opacity;
  &:hover{
  opacity: 0.8;
  }
}

.secondary{
  background: $purple;

}
.primary{
  background: $yellow;
}

</style>