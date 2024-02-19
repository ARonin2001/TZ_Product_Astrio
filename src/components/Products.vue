<template>
  <section class="products">
    <div class="container">
      <Product
        v-for="p in productsStore.products"
        :key="p.id"
        :title="p.title"
        :brand="p.brand.toString()"
        :imagePath="p.image"
        :price="p.regular_price.value"
        :currency="Currency[p.regular_price.currency]"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue';
import Product from './Product.vue';
import { useProductsStore } from '@/store/productsStore';
import { useRoute } from 'vue-router';
import { Currency } from '@/types/Currency';

const productsStore = useProductsStore();
const route = useRoute();

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
