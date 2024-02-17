<script setup lang="ts">
import Header from './components/Header.vue';
</script>

<template>
  <div class="wrapper">
    <Header />

    <div class="container">
      <main class="main">
        <div class="main__container">
          <RouterView />
        </div>
      </main>
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

.main {
  position: relative;

  &__container {
    display: flex;
    padding: 40px 0 40px 0;
  }
}
</style>
