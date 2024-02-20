<template>
  <div class="p-info">
    <div class="container">
      <div class="p-info__item">
        <span class="p-info__title __title"
          >{{ price }}
          <span class="p-info__currency">{{ currency }}</span></span
        >
      </div>
      <div class="p-info__item p-info__qty">
        <button class="p-info__btn" @click="decTotalCount">-</button>
        <span class="p-info__title __title">{{ count }}</span>
        <button class="p-info__btn" @click="incTotalCount">+</button>
      </div>
      <div class="p-info__item p-info__total-count">
        <span class="p-info__title __title">{{ totalCount }}</span>
      </div>
      <div class="p-info__item p-info__delete">
        <BtnDelete @handleClick="deleteProduct" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BtnDelete from './BtnDelete.vue';

interface Props {
  id: string;
  price: number;
  currency: string;
  count: number;
  totalCount: number;
}

const props = defineProps<Props>();
const emits = defineEmits(['handleChangePrice', 'deleteCart']);

const incTotalCount = () => {
  emits('handleChangePrice', props.id, props.count + 1);
};
const decTotalCount = () => {
  if (props.count != 1) {
    emits('handleChangePrice', props.id, props.count - 1);
  }
};

const deleteProduct = () => {
  emits('deleteCart', props.id);
};
</script>

<style scoped lang="scss">
.p-info {
  align-self: center;

  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr) 20px;
    align-items: baseline;
    gap: 15px 30px;
  }
  &__item {
    position: relative;
    height: 100%;
    text-align: center;
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
  &__delete {
    align-self: end;
  }
}

@media (max-width: 767px) {
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
