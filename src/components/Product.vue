<script setup lang="ts"></script>

<template>
  <div class="product">
    <div class="container">
      <div class="product__img">
        <img src="@/assets/images/1.png" alt="brend" />
      </div>
      <span class="title">Product</span>
      <span class="brend">Brend</span>
      <hr />
      <div class="product__footer">
        <div class="price">55 $</div>
        <button class="btn__by">BY</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.product {
  position: relative;
  width: 280px;
  max-height: 400px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.6);
  }

  .container {
    display: flex;
    justify-content: center;
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

  .title {
    font-family: 'Roboto-Medium';
    font-weight: 500;
    font-size: 20px;
    color: #000;
    overflow: hidden;
    // white-space: nowrap;
    text-overflow: ellipsis;
  }
  .brend {
    font-family: 'Roboto-Regular';
    font-size: 18px;
    color: #a4acad;
    margin-top: 15px;
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 23px;

    .price {
      font-family: 'Roboto-Bold';
      font-size: 20px;
    }
    .btn__by {
      border-radius: 5px;
      padding: 5px 42px;
      width: 143px;
      height: 40px;
      font-family: 'Roboto-Medium';
      font-size: 20px;
      text-align: center;
      color: #f2f2f2;
      background: #f46d40;
      transition: all 0.3s;

      &:active {
        width: 138px;
        height: 35px;
      }
    }
  }
}
</style>