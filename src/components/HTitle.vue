<template>
  <div class="h-title">
    <div class="h-title__container">
      <div class="h-title__title_main">
        <!-- <unicon
          name="shopping-cart"
          class="title__icon"
          height="18px"
          width="18px"
        /> -->
        <h1 class="title">{{ title }}</h1>
      </div>
      <span class="sub-title __sub-title">{{ subTitle }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ title: string; subTitle?: string }>();
</script>

<style scoped lang="scss">
.h-title {
  &__title {
    &_main {
      display: flex;
      align-items: flex-end;

      .title {
        font-size: 28px;
        font-family: 'Roboto-Medium';
        text-transform: uppercase;
      }
    }
  }
  .sub-title {
    display: inline-block;
    margin-top: 10px;
  }
}
</style>
