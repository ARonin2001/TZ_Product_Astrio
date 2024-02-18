<template>
  <div class="product">
    <div class="container">
      <div class="product__img">
        <img class="product-img" src="@/assets/images/1.png" alt="product" />
      </div>
      <div class="description">
        <span class="__title product__title">Product 1</span>
        <span class="__sub-title">Guchi</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.product {
  .container {
    display: flex;

    @media (max-width: 425px) {
      flex-direction: column;
      align-items: center;
    }
  }

  &__img {
    margin-right: 30px;
    border: 1px solid #f2f2f2;
    margin: 0 auto;
    img {
      width: 150px;
      height: 100%;
      background-size: cover;
    }
  }

  .description {
    display: flex;
    flex-direction: column;
    max-width: 224px;

    @media (max-width: 425px) {
      align-items: center;
    }
  }
  &__title {
    margin-bottom: 15px;
  }
}
</style>
