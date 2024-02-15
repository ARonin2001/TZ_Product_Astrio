<script setup lang="ts">
import AsideMenuItem from './AsideMenuItem.vue';
</script>

<template>
  <aside class="aside">
    <div class="container">
      <span class="title">All brands</span>
      <hr />

      <ul class="items">
        <div class="items__container">
          <li class="items__link items__link_active">
            <AsideMenuItem />
            <span class="line"></span>
          </li>
          <li class="items__link">
            <AsideMenuItem />
            <span class="line"></span>
          </li>
          <li class="items__link">
            <AsideMenuItem />
            <span class="line"></span>
          </li>
        </div>
      </ul>
    </div>
  </aside>
</template>

<style lang="scss">
.container {
  padding: 0 10px 0 10px;

  .title {
    font-family: 'Roboto-Light';
    font-size: 20px;
  }
  .items {
    &__container {
      padding: 31px 0 0 0;
    }
    &__link {
      position: relative;
      cursor: pointer;
      &:not(:first-child) {
        margin: 30px 0;
      }
      a:hover,
      &_active a {
        font-weight: bold;
      }

      .line {
        display: inline-block;
        height: 2px;
        width: 0;
        position: absolute;
        bottom: -10px;
        left: 0;
        background-color: #000;
        transition: width 0.3s;
      }

      &:hover,
      &_active {
        .line {
          width: 100%;
        }
      }
    }
  }
}
</style>
