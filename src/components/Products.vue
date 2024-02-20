<template>
  <section class="products">
    <div class="container">
      <Product
        v-for="p in productsStore.products"
        :id="p.id"
        :key="p.id"
        :title="p.title"
        :brand="p.brand.toString()"
        :imagePath="p.image"
        :price="p.regular_price.value"
        :currency="Currency[p.regular_price.currency]"
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
import { Currency } from '@/types/Currency';
import { useCartStore } from '@/store/cartStore';

const productsStore = useProductsStore();
const cartProduct = useCartStore();
const route = useRoute();

const addProduct = (productId: number) => {
  cartProduct.addNewProduct(productId);
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
