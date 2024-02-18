<template>
  <div class="product-item">
    <div class="container">
      <!-- left: img, name product and brand -->
      <CartProduct />
      <!-- right: price, count, totalCount -->
      <ProductInfo @handleChangePrice="handleChangePrice" />
    </div>
  </div>
</template>

<script setup lang="ts">
import CartProduct from './CartProduct.vue';
import ProductInfo from './ProductInfo.vue';

const props = defineProps<{ handleChangePrice: (count: number) => void }>();
</script>

<style scoped lang="scss">
.product-item {
  border-bottom: 1px solid #f2f2f2;
  box-shadow: 0 3px 3px 3px rgba(0, 0, 0, 0.2);
  .container {
    display: flex;
    justify-content: space-between;
    padding: 5px 10px;
    align-items: center;
    @media (max-width: 425px) {
      flex-direction: column;
    }
  }
}
</style>
