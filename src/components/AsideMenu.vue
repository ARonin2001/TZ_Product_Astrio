<template>
  <aside ref="root" class="aside" id="aside-menu-left">
    <div class="container">
      <RouterLink :to="{ name: 'products' }" @click="onClickAllBrands">
        <span class="__title">All brands</span>
      </RouterLink>

      <hr />

      <ul class="items">
        <div class="items__container">
          <li
            v-for="item in brandsStore.brands"
            :key="item.id"
            class="items__link"
            :class="{ items__link_active: item.id === currentItemId }"
            @click="handleClickItem(item.id)"
          >
            <AsideMenuItem
              :title="item.title"
              nameLink="products"
              :params="{ brandId: item.id }"
            />
            <span class="line"></span>
          </li>
        </div>
      </ul>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import AsideMenuItem from './AsideMenuItem.vue';
import { useBrandsStore } from '@/store/brandStore';
import { useProductsStore } from '@/store/productsStore';

const brandsStore = useBrandsStore();

onMounted(() => {
  brandsStore.setAllBrands();
});

const currentItemId = ref(1);

const handleClickItem = (itemId: number) => {
  currentItemId.value = itemId;
};

const onClickAllBrands = () => {
  useProductsStore().setAllProducts();
};
</script>

<style scoped lang="scss">
.aside {
  min-width: 150px;
  max-width: 190px;
  width: 100%;
  background-color: #fff;
  height: 100%;
  z-index: 100;

  @media (max-width: 768px) {
    position: absolute;
    top: 40px;
    left: -200%;
    transition: all 0.3s;
  }

  &_active {
    left: 0 !important;
  }

  @media (max-width: 425px) {
    max-width: 100%;
  }
}

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
