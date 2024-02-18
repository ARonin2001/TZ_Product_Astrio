<template>
  <div class="p-info">
    <div class="container">
      <div class="p-info__item">
        <span class="p-info__title __title"
          >{{ price }} <span class="p-info__currency">$</span></span
        >
      </div>
      <div class="p-info__item p-info__qty">
        <button class="p-info__btn" @click="decTotalCount">-</button>
        <span class="p-info__title __title">{{ count }}</span>
        <button class="p-info__btn" @click="incTotalCount">+</button>
      </div>
      <div class="p-info__item">
        <span class="p-info__title __title">{{ totalCount }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const price = 88.8;
const count = ref(1);

const incTotalCount = () => {
  count.value++;
};
const decTotalCount = () => {
  if (count.value != 1) count.value--;
};

const totalCount = computed<number>(
  () => Math.round(price * count.value * 100) / 100
);
</script>

<style scoped lang="scss">
.p-info {
  align-self: center;
  max-width: 324px;
  width: 100%;

  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: baseline;
    gap: 15px 30px;
    max-width: 324px;
    width: 100%;
  }
  &__item {
    position: relative;
    height: 100%;

    &:first-child {
      text-align: left;
    }
    &:last-child {
      text-align: right;
    }
  }
  &__qty {
    display: flex;
    align-items: center;
    .p-info__title {
      margin: 0 10px;
    }
  }
  &__btn {
    height: 30px;
    width: 30px;
    background: #ff3131;
    color: #fff;
    font-family: 'Roboto-Regular';
    text-align: center;
    border-radius: 50%;
    font-size: 20px;
  }
}

@media (max-width: 425px) {
  .p-info {
    padding: 15px 0;
    .container {
      grid-template-rows: repeat(auto-fill, 1fr);
      grid-template-columns: none;
      justify-content: center;
    }
    &__item {
      text-align: center !important;
    }
  }
}
</style>
