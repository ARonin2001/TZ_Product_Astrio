<template>
  <header class="header">
    <div class="container">
      <div
        class="header__burger-menu burger-menu"
        :class="{
          'burger-menu_active': menuIsActive,
          block_hidden: activeOnlyLogo
        }"
        @click="toggleDisplayAside"
      >
        <div class="burger-menu__container">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div class="logo">
        <RouterLink :to="{ name: 'products' }">
          <img
            src="@/assets/images/logo.png"
            alt="Astrio logo"
            class="logo__img"
          />
        </RouterLink>
      </div>

      <RouterLink
        :to="{ name: 'cart' }"
        :class="{ block_hidden: activeOnlyLogo }"
      >
        <Basket />
      </RouterLink>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import Basket from './Basket.vue';
import { useRoute } from 'vue-router';

const menuIsActive = ref(false);
const activeOnlyLogo = ref(false);
const route = useRoute();

const toggleDisplayAside = () => {
  const aside = document.getElementById('aside-menu-left');

  if (aside) {
    aside.classList.toggle('aside_active');
  }

  menuIsActive.value = !menuIsActive.value;
};

watch(
  () => route.path,
  () => {
    if (route.path.includes('/cart')) {
      activeOnlyLogo.value = true;
      menuIsActive.value = false;
    } else {
      activeOnlyLogo.value = false;
    }
  }
);
</script>

<style scoped lang="scss">
.header {
  background: #f2f2f2;
  height: 75px;

  .block_hidden {
    display: none !important;
  }
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px;

  .logo {
    margin: 0 auto;
  }

  .burger-menu {
    display: none;

    @media (min-width: 320px) and (max-width: 768px) {
      display: block;
    }

    cursor: pointer;
    &__container {
      span {
        display: block;
        width: 24px;
        height: 2px;
        background-color: #000;
        &:nth-child(2) {
          margin: 3px 0;
        }
        transition: all 0.3s;
      }
    }

    &_active {
      span {
        &:first-child {
          transform: rotate(45deg) translate(3px, 4px);
        }
        &:nth-child(2) {
          transform: rotate(-45deg);
        }
        &:last-child {
          opacity: 0;
        }
      }
    }
  }
}
</style>
