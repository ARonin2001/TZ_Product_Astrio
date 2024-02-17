<template>
  <AsideMenu class="aside__display" />
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
.aside__display {
  @media (min-width: 320px) and (max-width: 768px) {
    position: absolute;
    top: 40px;
    left: -100%;
    transition: all 0.3s;
  }

  &_active {
    left: 0 !important;
  }
}

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
