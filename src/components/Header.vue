<script setup lang="ts">
import Basket from './Basket.vue';
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <img
          src="@/assets/images/logo.png"
          alt="Astrio logo"
          class="logo__img"
        />
      </div>

      <Basket />
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  background: #f2f2f2;
}
.container {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 18px;
}
</style>
