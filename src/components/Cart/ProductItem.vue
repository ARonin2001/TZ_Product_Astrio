<template>
  <div class="product-item">
    <div class="container">
      <CartProduct />
      <ProductInfo />
    </div>
  </div>
</template>

<script setup lang="ts">
import CartProduct from './CartProduct.vue';
import ProductInfo from './ProductInfo.vue';
</script>

<style scoped lang="scss">
.product-item {
  .container {
    display: flex;
    justify-content: space-between;

    @media (max-width: 425px) {
      flex-direction: column;
    }
  }
}
</style>
