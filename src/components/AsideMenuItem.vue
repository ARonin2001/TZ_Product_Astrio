<template>
  <span class="item">
    <RouterLink :to="{ name: nameLink, params }">{{ title }}</RouterLink>
  </span>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  nameLink: string;
  params?: {};
}

const props = defineProps<Props>();
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
