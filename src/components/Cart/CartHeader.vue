<template>
  <div class="cart-header">
    <div class="cart-header__container">
      <div class="cart-header__title">
        <div class="title__container">
          <span class="title">Item</span>
        </div>
      </div>
      <div class="cart-header__title">
        <div class="title__container">
          <span class="title">Price</span>
          <span class="title">Qty</span>
          <span class="title">Total</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.cart-header {
  width: 100%;
  height: 100%;

  &__container {
    display: flex;
    justify-content: space-between;
  }

  &__title {
    .title__container {
      display: flex;
      justify-content: space-between;

      .title {
        font-weight: bold;
      }
    }
  }
}
</style>
