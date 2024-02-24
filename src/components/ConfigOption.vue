<template>
  <div class="options">
    <template v-for="val in configs">
      <span
        v-if="
          (accessibleConfigs.attributeValueIndexes.includes(val.value_index) &&
            code === accessibleConfigs.code) ||
          accessibleConfigs.code !== code
        "
        :key="val.value_index"
        :style="{ background: code === 'color' ? val.value : '' }"
        :title="val.label"
        tabindex="0"
        class="item __sub-title"
        :class="{ item_active: val.value_index === activeItem }"
        @click="onClickOptionItem(val.value_index)"
        >{{ code !== 'color' ? val.label : '' }}</span
      >
    </template>
  </div>
</template>

<script setup lang="ts">
import { type ConfigValue } from '@/models/IProduct';
import { ref } from 'vue';

interface Props {
  configs: ConfigValue[];
  code: string;
  accessibleConfigs: {
    code: string;
    attributeValueIndexes: number[];
  };
}

const props = defineProps<Props>();
const emits = defineEmits(['setConfigurableProduct']);

const activeItem = ref<number | null>(null);

const onClickOptionItem = (itemId: number) => {
  activeItem.value = itemId;
  emits('setConfigurableProduct', itemId, props.code);
};
</script>
<style scoped lang="scss">
.options {
  margin: 5px 0;
  .item {
    display: inline-block;
    position: relative;
    width: 40px;
    height: 25px;
    border: 1px solid #000;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.2s;
    text-align: center;
    line-height: 25px;
    color: #000;
    overflow: visible;

    &_active {
      &::before {
        content: '';
        position: absolute;
        display: inline-block;
        width: 100%;
        height: 100%;
        background: transparent;
        border: 3px solid rgb(0 0 0);
        border-radius: 5px;
        top: -5px;
        left: -5px;
        padding: 2px;
      }
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
</style>
