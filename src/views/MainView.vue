<script setup lang="ts">
import AsideMenu from '@/components/AsideMenu.vue';
</script>

<template>
  <AsideMenu />
  <div class="main-content">
    <div class="container">
      <div class="header main-content__header">
        <div class="header__title">
          <div class="header__title_top">
            <unicon
              name="shopping-cart"
              class="title__icon"
              height="18px"
              width="18px"
            />
            <h1 class="title">Products</h1>
          </div>
          <span class="sub-title">guchi</span>
        </div>
      </div>

      <RouterView />
    </div>
  </div>
</template>

<style scoped lang="scss">
.main-content {
  width: 100%;
  height: 100%;
  .container {
    padding: 0 18px;
  }
  &__header {
    margin-bottom: 30px;
  }
  .header {
    &__title {
      &_top {
        display: flex;
        align-items: flex-end;

        .title {
          font-size: 28px;
          font-family: 'Roboto-Medium';
          text-transform: uppercase;
        }
      }
      .sub-title {
        display: inline-block;
        font-family: 'Roboto-Light';
        color: #a4acad;
        margin-top: 4px;
        font-size: 16px;
      }
    }
  }
}
</style>
