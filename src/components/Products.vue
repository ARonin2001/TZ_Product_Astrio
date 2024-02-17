<script setup lang="ts">
import Product from './Product.vue';
</script>

<template>
  <section class="products">
    <div class="container">
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  </section>
</template>

<style scoped lang="scss">
.products {
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 20px;
  }
}
</style>
