<template>
  <div class="config">
    <div class="container">
      <ConfigOption
        v-for="conf in config"
        :key="conf.attribute_id"
        :configs="conf.values"
        :code="conf.attribute_code"
        :accessibleConfigs="accessibleConfigs"
        @setConfigurableProduct="setConfigurableProduct"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { type IConfigurableOptions } from '@/models/IProduct';
import ConfigOption from './ConfigOption.vue';

interface Props {
  config: IConfigurableOptions[];
  accessibleConfigs: {
    code: string;
    attributeValueIndexes: number[];
  };

  setConfigurableProduct: (value_index: number, code: string) => void;
}

const props = defineProps<Props>();
</script>
<style scoped lang="scss">
.config {
  .container {
    padding: 10px 0 0;
  }
  .colors {
    margin: 5px 0;
  }

  .options {
    margin: 5px 0;
    .item {
      display: inline-block;
      width: 40px;
      height: 25px;
      border: 1px solid #000;
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.2s;
      text-align: center;
      line-height: 25px;
      color: #000;

      &_active {
        border: 3px solid rgb(0 0 0);
      }

      &:not(:last-child) {
        margin: 0 5px 0 0;
      }

      @media (hover: hover) {
        &:hover {
          transform: scale(0.95);
        }
      }

      @media (hover: none) {
        &:active {
          transform: scale(0.95);
        }
      }
    }
  }
}
</style>
