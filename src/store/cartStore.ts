import { defineStore } from 'pinia';
import { type IProduct, type IProductConfigurable } from '@/models/IProduct';
import { v4 as uuidv4 } from 'uuid';
import { useProductsStore } from './productsStore';

interface initialState {
  cart: {
    id: string;
    product: IProduct;
    color?: string;
    size?: string;
    count: number;
    totalPrice: number;
  }[];
  subTotalPrice: number;
}

export const useCartStore = defineStore('cart', {
  state: (): initialState => {
    return {
      cart: [],
      subTotalPrice: 0
    };
  },
  actions: {
    updateSubTotalPrice() {
      this.subTotalPrice = this.cart.reduce((prev, item) => {
        return Math.round((prev + item.totalPrice) * 100) / 100;
      }, 0);
    },
    addNewProduct(productId: number, colorId?: number, sizeId?: number) {
      const productById = useProductsStore().getProductById(productId);
      const sameProduct = this.cart.find((c) => c.product.id === productId);

      let color: string = '',
        size: string = '';

      if (!productById || sameProduct) return;

      if ('configurable_options' in productById) {
        color = this.getValueLabelByValueIndex(colorId!, productById) || '';
        size = this.getValueLabelByValueIndex(sizeId!, productById) || '';
      }

      const newProduct = {
        id: uuidv4(),
        product: productById,
        count: 1,
        totalPrice: productById.regular_price.value,
        color,
        size
      };

      this.cart.push(newProduct);
      this.updateSubTotalPrice();
    },
    changeCountProduct(cartId: string, count: number) {
      this.cart.map((c) => {
        if (c.id === cartId) {
          c.count = count;
          c.totalPrice =
            Math.round(c.product.regular_price.value * count * 100) / 100;

          this.updateSubTotalPrice();
        }
      });
    },
    deleteCartProduct(cartId: string) {
      this.cart = this.cart.filter((c) => c.id !== cartId);

      this.updateSubTotalPrice();
    }
  },
  getters: {
    getCart: (state) => state.cart,
    getProducts: (state) => {
      return state.cart.map((c) => c.product);
    },
    getCountProductsInCart: (state) => state.cart.length,
    getValueLabelByValueIndex: (state) => {
      return (value_index: number, product: IProductConfigurable) => {
        let findedProp: string | undefined = undefined;

        product.configurable_options.forEach((item) => {
          const valueLabel = item.values.find(
            (v) => v.value_index === value_index
          )?.label;

          if (valueLabel) {
            findedProp = valueLabel;
            return;
          }
        });

        return findedProp;
      };
    }
  }
});
