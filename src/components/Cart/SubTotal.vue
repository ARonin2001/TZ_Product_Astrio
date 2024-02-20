<template>
  <div class="sub-total">
    <div class="container">
      <div class="total-count __title">
        <span>Subtotal: </span>
        <span class="total-price"
          >{{ total }}<span class="currency">$</span></span
        >
      </div>
      <div class="checkout">
        <BaseButton title="Checkout" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue';

const props = defineProps<{ total: number }>();
</script>

<style scoped lang="scss">
.total-count {
  padding: 5px 0;
}
</style>
