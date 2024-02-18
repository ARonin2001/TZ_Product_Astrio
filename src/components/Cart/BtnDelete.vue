<template>
  <div class="btn_delete">
    <unicon name="trash-alt" />
  </div>
</template>

<script setup lang="ts"></script>
<style scoped lang="scss">
.btn {
  &_delete {
    cursor: pointer;

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
