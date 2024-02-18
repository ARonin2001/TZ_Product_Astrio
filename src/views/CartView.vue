<template>
  <div class="cart">
    <div class="container">
      <HTitle title="Shopping Cart" />

      <div class="cart-content">
        <div class="cart-content__container">
          <CartHeader class="cart__header" />

          <div class="cart-products">
            <div class="cart-products__container">
              <ProductItem :handleChangePrice="calcSubTotalPrice" />
              <ProductItem :handleChangePrice="calcSubTotalPrice" />
              <ProductItem :handleChangePrice="calcSubTotalPrice" />
            </div>
          </div>

          <div class="cart__sub-total">
            <SubTotal :total="subTotalPrice" />
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
import { ref } from 'vue';

const subTotalPrice = ref(0);

const calcSubTotalPrice = (totalCount: number) => {
  subTotalPrice.value += Math.round(totalCount * 100) / 100;
};
</script>

<style scoped lang="scss">
.cart {
  width: 100%;
  height: 100%;

  &__header {
    margin: 40px 0 30px 0;

    @media (max-width: 425px) {
      display: none;
    }
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
  }
}
</style>
