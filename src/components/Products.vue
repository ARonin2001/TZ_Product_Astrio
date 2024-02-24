<template>
  <section class="products">
    <div class="container">
      <Product
        v-for="p in productsStore.products"
        :id="p.id"
        :key="p.id"
        :product="p"
        @handleClick="addProduct"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue';
import Product from './Product.vue';
import { useProductsStore } from '@/store/productsStore';
import { useRoute } from 'vue-router';
import { useCartStore } from '@/store/cartStore';

const productsStore = useProductsStore();
const cartProduct = useCartStore();
const route = useRoute();

const addProduct = (productId: number, colorId?: number, sizeId?: number) => {
  cartProduct.addNewProduct(productId, colorId, sizeId);
};

watch(
  () => route.params.brandId,
  () => {
    productsStore.setProductsByBrand(Number(route.params.brandId));
  }
);

onMounted(() => {
  productsStore.setAllProducts();
});
</script>

<style scoped lang="scss">
.products {
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 20px;
  }
}
</style>
