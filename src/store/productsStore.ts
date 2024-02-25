import { defineStore } from 'pinia';
import {
  type IConfigurableOptions,
  type IProduct,
  type IProductConfigurable,
  type IVariant
} from '@/models/IProduct';
import { type IBrand } from '@/models/IBrand';
import { productsApi, brandsApi } from '@/api/api';

const localHost = window.location.origin + '/src/assets';

interface initialState {
  products: (IProduct | IProductConfigurable)[];
}

export const useProductsStore = defineStore('products', {
  state: (): initialState => {
    return {
      products: []
    };
  },
  actions: {
    async setAllProducts() {
      const allProducts: IProduct[] | IProductConfigurable[] =
        await productsApi.getProducts();

      this.products = await getChangedProducts(allProducts);
    },
    async setProductsByBrand(brandId: number) {
      const products = await productsApi.getProductsByBrand(brandId);

      const result = await getChangedProductsByBrand(products, brandId);
      this.products = result;
    }
  },
  getters: {
    getProductById: (state) => {
      return (productId: number) =>
        state.products.find((p) => p.id === productId);
    },
    getImg: (state) => {
      return (productId: number, value_index: number) => {
        const product = state.products.find((p) => p.id === productId);
        let img: string | undefined = undefined;

        if (!product || !('variants' in product)) return;

        product.variants.forEach((item) => {
          const valueIndex = item.attributes.find(
            (att) => att.value_index === value_index
          );

          if (valueIndex) {
            img = item.product.image;
            return;
          }
        });

        if (img) return localHost + img;
      };
    },
    getAccessibleConfigs: (state) => {
      return (productId: number, value_index: number, code: string) => {
        const product = state.products.find((p) => p.id === productId);
        let attributeValueIndexes: number[] = [];

        if (!product || !('variants' in product)) return;

        product.variants.forEach((item) => {
          let attColor: { code: string; value_index: number } | undefined;
          const sameValueIndex = item.attributes.find(
            (att) => att.value_index === value_index
          );

          if (sameValueIndex) {
            attColor = item.attributes.find((att) => att.code !== code);
          }

          if (attColor) attributeValueIndexes.push(attColor.value_index);
        });

        const attribute_code = code === 'color' ? 'size' : 'color';

        return { code: attribute_code, attributeValueIndexes };
      };
    }
  }
});

const getChangedProducts = async (porducts: IProduct[]) => {
  const allBrands: IBrand[] | IProductConfigurable[] =
    await brandsApi.getBrands();

  const result = porducts.map((prod) => {
    return {
      ...prod,
      image: localHost + prod.image,
      brand: allBrands.filter((b) => prod.brand === b.id)[0].title
    };
  });

  return result;
};

const getChangedProductsByBrand = async (
  porducts: IProduct[] | IProductConfigurable[],
  brandId: number
) => {
  const brand: IBrand = await brandsApi.getBrandById(brandId);

  const result = porducts.map((prod) => {
    return {
      ...prod,
      image: localHost + prod.image,
      brand: brand.title
    };
  });

  return result;
};
