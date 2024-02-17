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

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__item {
    height: 100%;
    position: relative;
    &:not(:last-child) {
      margin-right: 30px;
    }
  }
  &__qty {
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
      flex-direction: column;
    }
  }
}
</style>
