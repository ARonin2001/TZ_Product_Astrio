<template>
  <AsideMenu />
  <div class="main-content">
    <div class="container">
      <HTitle title="Products" subTitle="Brands" class="main-content__header" />

      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import AsideMenu from '@/components/AsideMenu.vue';
import HTitle from '@/components/HTitle.vue';
</script>

<style scoped lang="scss">
.main-content {
  width: 100%;
  height: 100%;
  .container {
    padding: 0 18px;
  }
  &__header {
    margin-bottom: 30px;
  }
}
</style>
