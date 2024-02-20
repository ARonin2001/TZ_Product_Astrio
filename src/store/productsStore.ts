import { defineStore } from 'pinia';
import { type IProduct } from '@/models/IProduct';
import { type IBrand } from '@/models/IBrand';
import { productsApi, brandsApi } from '@/api/api';

const localHost = window.location.origin + '/src/assets';

interface initialState {
  products: IProduct[];
}

export const useProductsStore = defineStore('products', {
  state: (): initialState => {
    return {
      products: []
    };
  },
  actions: {
    async setAllProducts() {
      const allProducts: IProduct[] = await productsApi.getProducts();

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
    }
  }
});

const getChangedProducts = async (porducts: IProduct[]) => {
  const allBrands: IBrand[] = await brandsApi.getBrands();

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
  porducts: IProduct[],
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
