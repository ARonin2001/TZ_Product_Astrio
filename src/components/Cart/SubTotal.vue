<template>
  <div class="sub-total">
    <div class="container">
      <div class="total-count __title">
        <span>Subtotal: </span>
        <span class="total-price">155<span class="currency">$</span></span>
      </div>
      <div class="checkout">
        <BaseButton title="Checkout" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue';
</script>

<style scoped lang="scss">
.total-count {
  padding: 5px 0;
}
</style>
