<template>
  <div class="product-item">
    <div class="container">
      <!-- left: img, name product and brand -->
      <CartProduct
        :title="title"
        :subTitle="subTitle"
        :img="img"
        :color="color"
        :size="size"
      />
      <!-- right: price, count, totalCount -->
      <ProductInfo
        :id="id"
        :price="price"
        :currency="currency"
        :count="count"
        :totalCount="totalCount"
        @handleChangePrice="handleChangePrice"
        @deleteCart="deleteProduct"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import CartProduct from './CartProduct.vue';
import ProductInfo from './ProductInfo.vue';

interface Props {
  id: string;
  img: string;
  title: string;
  subTitle: string;
  price: number;
  currency: string;
  count: number;
  totalCount: number;
  color?: string;
  size?: string;
  handleChangePrice: (cartId: string, count: number) => void;
  deleteProduct: (cartId: string) => void;
}

const props = defineProps<Props>();
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
    @media (max-width: 767px) {
      flex-direction: column;
    }
  }
}
</style>
