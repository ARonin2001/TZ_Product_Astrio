<template>
  <span class="item">
    <RouterLink :to="{}">{{ title }}</RouterLink>
  </span>
</template>

<script setup lang="ts">
const props = defineProps<{ title: string }>();
</script>

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
