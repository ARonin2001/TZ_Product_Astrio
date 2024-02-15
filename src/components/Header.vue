<script setup lang="ts">
import Basket from './Basket.vue';
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <RouterLink :to="{ name: 'main' }">
          <img
            src="@/assets/images/logo.png"
            alt="Astrio logo"
            class="logo__img"
          />
        </RouterLink>
      </div>

      <RouterLink :to="{}">
        <Basket />
      </RouterLink>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  background: #f2f2f2;
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 18px;

  .logo {
    margin: 0 auto;
  }
}
</style>
