<script setup lang="ts"></script>

<template>
  <span class="item">
    <RouterLink :to="{}">Brend 1</RouterLink>
  </span>
</template>

<style scoped lang="scss">
.item {
  font-family: 'Roboto-Regular';
  font-weight: 400;
  font-size: 18px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  a {
    display: inline-block;
    height: 100%;
    width: 100%;
    color: #000;
  }
}
</style>
