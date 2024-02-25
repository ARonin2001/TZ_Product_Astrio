<template>
  <div class="product">
    <div class="container">
      <div class="product_top">
        <div class="product__img">
          <img :src="state.productImg" :alt="brand.toString()" />
        </div>
        <div class="product__name">
          <span class="title __title">{{ title }}</span>
          <span class="sub-title __sub-title">{{ brand }}</span>
        </div>
      </div>

      <div class="product__config" v-if="'configurable_options' in product">
        <ProductConfig
          :config="product.configurable_options"
          :setConfigurableProduct="setConfigurableProduct"
          :accessibleConfigs="state.accessConfigs"
        />
      </div>

      <hr />

      <div class="product__footer">
        <div class="price">
          {{ regular_price.value }}
          <span class="price-currency">$</span>
        </div>
        <BaseButton
          @handleClick="onClick"
          title="By"
          class="product__footer-btn"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IProduct, IProductConfigurable } from '@/models/IProduct';
import BaseButton from './BaseButton.vue';
import ProductConfig from './ProductConfig.vue';
import { onMounted, reactive } from 'vue';
import { Currency } from '@/types/Currency';
import { useProductsStore } from '@/store/productsStore';

interface Props {
  product: IProduct | IProductConfigurable;
}

interface State {
  productImg?: string;
  colorId?: number;
  sizeId?: number;
  accessConfigs: {
    code: string;
    attributeValueIndexes: number[];
  };
}

const state = reactive<State>({
  productImg: '',
  colorId: undefined,
  sizeId: undefined,
  accessConfigs: { code: '', attributeValueIndexes: [] }
});

const productStore = useProductsStore();

const props = defineProps<Props>();
const { id, title, regular_price, brand } = reactive({
  ...props.product
});

onMounted(() => {
  state.productImg = props.product.image;
});

const setAccessibleConfigs = (value_index: number, code: string) => {
  state.accessConfigs = productStore.getAccessibleConfigs(
    id,
    value_index,
    code
  ) || { code: '', attributeValueIndexes: [] };
};
const setConfigurableProduct = (value_index: number, code: string) => {
  setAccessibleConfigs(value_index, code);

  if (code === 'color') state.colorId = value_index;
  else state.sizeId = value_index;

  state.productImg = productStore.getImg(props.product.id, value_index);
};

const emits = defineEmits(['handleClick']);
const onClick = () => {
  emits('handleClick', id, state.colorId, state.sizeId);
};
</script>

<style scoped lang="scss">
.product {
  position: relative;
  max-width: 280px;
  width: 100%;
  // max-height: 400px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.6);
  }

  &__name {
    display: flex;
    flex-direction: column;
  }
  .container {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 1px 7px 7px 17px;
    height: 100%;

    hr {
      position: absolute;
      left: 0;
      bottom: 52px;
      width: 100%;
      height: 0.5px;
      background-color: #a4acad;
    }
  }

  &__img {
    height: 255px;

    img {
      max-height: 100%;
      max-width: 100%;
    }
  }

  .sub-title {
    margin-top: 15px;
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 23px;

    .price {
      font-family: 'Roboto-Bold';
      font-size: 18px;
    }
    &-btn {
      max-width: 143px;
      height: 40px;
    }
  }
}
</style>
