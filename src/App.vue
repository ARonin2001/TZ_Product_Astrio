<script setup lang="ts">
import Header from './components/Header.vue';
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <Header />

      <div class="main-content">
        <div class="container">
          <aside class="brands">Brands</aside>
          <main class="main">
            <div class="products">Products</div>
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  max-width: 1100px;
  margin: auto;
}
</style>
