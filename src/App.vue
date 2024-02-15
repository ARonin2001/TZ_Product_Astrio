<script setup lang="ts">
import Header from './components/Header.vue';
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <Header />

      <div class="main-content">
        <div class="main-content__container">
          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  max-width: 1120px;
  margin: auto;

  @media (min-width: 1366px) {
    min-width: 1120px;
  }
  @media (min-width: 1024px) and (max-width: 1365px) {
    max-width: 940px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    max-width: 700px;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    max-width: 280px;
  }
}

.main-content {
  &__container {
    display: flex;
    padding: 40px 0 0 0;
  }
}
</style>
