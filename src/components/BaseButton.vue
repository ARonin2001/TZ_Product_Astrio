<template>
  <button class="base-btn">{{ title }}</button>
</template>

<script setup lang="ts">
const props = defineProps<{ title: string }>();
</script>
<style scoped lang="scss">
.base-btn {
  border-radius: 5px;
  padding: 5px 10px;
  width: 100%;
  font-family: 'Roboto-Medium';
  font-size: 20px;
  text-align: center;
  color: #f2f2f2;
  background: #f46d40;
  transition: all 0.2s;

  &:active {
    transform: scale(0.9);
  }
}
</style>
