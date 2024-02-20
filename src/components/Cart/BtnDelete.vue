<template>
  <button class="btn_delete" title="Delete product" @click="onClick">
    <unicon name="trash-alt" />
  </button>
</template>

<script setup lang="ts">
const emits = defineEmits(['handleClick']);

const onClick = () => {
  emits('handleClick');
};
</script>
<style scoped lang="scss">
.btn {
  &_delete {
    background: transparent;
    .unicon {
      @media (hover: hover) {
        &:hover {
          fill: red;
        }
      }
      @media (hover: none) {
        &:active {
          fill: red;
        }
      }
    }
  }
}
</style>
