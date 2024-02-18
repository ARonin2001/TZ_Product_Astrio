<template>
  <div class="cart-header">
    <div class="cart-header__container">
      <div class="cart-header__title">
        <div class="title__container">
          <span class="title __title">Item</span>
        </div>
      </div>
      <div class="cart-header__title">
        <div class="title__container">
          <span class="title __title">Price</span>
          <span class="title __title">Qty</span>
          <span class="title __title">Total</span>
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
    padding: 0 40px 0 10px;
  }

  &__title {
    .title__container {
      display: flex;
      justify-content: space-between;
    }
    &:last-child {
      max-width: 400px;
      width: 100%;
    }
  }
}
</style>
