<template>
  <div class="product">
    <div class="container">
      <div class="product__img">
        <img class="product-img" :src="img" :alt="title" />
      </div>
      <div class="description">
        <span class="__title product__title">{{ title }}</span>
        <span class="__sub-title">{{ subTitle }}</span>

        <div class="configurable" v-if="color && size">
          <span class="conf __sub-title"
            >color: <b>{{ color }}</b></span
          >
          <span class="conf __sub-title"
            >size: <b>{{ size }}</b></span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  img: string;
  title: string;
  subTitle: string;
  color?: string;
  size?: string;
}
const props = defineProps<Props>();
</script>

<style scoped lang="scss">
.product {
  .container {
    display: flex;

    @media (max-width: 767px) {
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

  .description,
  .configurable {
    display: flex;
    flex-direction: column;
    max-width: 224px;

    @media (max-width: 425px) {
      align-items: center;
    }
  }
  .configurable {
    margin-top: 5px;
    .conf {
      color: #000;
    }
    .conf:last-child {
      margin-top: 5px;
    }
  }
  &__title {
    margin-bottom: 15px;
  }
}
</style>
