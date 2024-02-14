<script setup lang="ts"></script>

<template>
  <div class="basket">
    <div class="basket__count-products">
      <span>5</span>
    </div>
    <unicon
      name="shopping-basket"
      class="basket__icon"
      height="30px"
      width="30px"
    />
  </div>
</template>

<style scoped lang="scss">
.basket {
  cursor: pointer;

  &__count-products {
    position: absolute;
    right: 10px;
    top: 5px;

    span {
      display: inline-block;
      min-height: 22px;
      min-width: 22px;
      background: #242424;
      color: #fff;
      font-family: 'Roboto-Regular';
      text-align: center;
      padding: 5px;
      border-radius: 50%;
    }
  }
}
</style>
