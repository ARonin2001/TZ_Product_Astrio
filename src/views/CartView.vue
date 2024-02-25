<template>
  <div class="cart">
    <div class="container">
      <HTitle title="Shopping Cart" />

      <div class="cart-content">
        <div class="cart-content__container">
          <CartHeader
            class="cart__header"
            v-if="cartStore.getCart.length > 0"
          />

          <div class="cart-products">
            <div class="cart-products__container">
              <ProductItem
                v-for="p in cartStore.getCart"
                :key="p.id"
                :id="p.id"
                :title="p.product.title"
                :subTitle="p.product.brand.toString()"
                :img="p.product.image"
                :handleChangePrice="cartStore.changeCountProduct"
                :deleteProduct="cartStore.deleteCartProduct"
                :price="p.product.regular_price.value"
                :currency="$"
                :count="p.count"
                :totalCount="p.totalPrice"
                :color="p.color"
                :size="p.size"
              />
            </div>
          </div>

          <div class="cart__sub-total" v-if="cartStore.getCart.length > 0">
            <SubTotal :total="cartStore.subTotalPrice" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HTitle from '@/components/HTitle.vue';
import CartHeader from '@/components/Cart/CartHeader.vue';
import ProductItem from '@/components/Cart/ProductItem.vue';
import SubTotal from '@/components/Cart/SubTotal.vue';
import { useCartStore } from '@/store/cartStore';
import { Currency } from '@/types/Currency';

const cartStore = useCartStore();
</script>

<style scoped lang="scss">
.cart {
  width: 100%;
  height: 100%;

  &__header {
    margin: 40px 0 30px 0;

    @media (max-width: 767px) {
      display: none;
    }
  }
  &-products {
    position: relative;
  }
  &-products__container {
    display: grid;
    grid-template-rows: repeat(auto-fill, 1fr);
    row-gap: 20px;
  }
  &__sub-total {
    display: flex;
    justify-content: flex-end;
    margin-top: 30px;

    @media (max-width: 767px) {
      position: sticky;
      bottom: 20px;
      z-index: 10;
    }
  }
}
</style>
