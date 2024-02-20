<template>
  <div class="basket">
    <div class="basket__count-products">
      <span>{{ count }}</span>
    </div>
    <unicon
      name="shopping-basket"
      class="basket__icon"
      height="36px"
      width="36px"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ count: number }>();
</script>

<style scoped lang="scss">
.basket {
  position: relative;
  cursor: pointer;

  &__count-products {
    position: absolute;
    right: 0;
    bottom: 0;

    span {
      display: inline-block;
      min-height: 21px;
      min-width: 21px;
      line-height: 21px;
      background: #ff3131;
      color: #fff;
      font-family: 'Roboto-Regular';
      text-align: center;
      padding: 0 4px;
      border-radius: 50%;
    }
  }
}
</style>
