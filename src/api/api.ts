import brandsJson from '@/dbJSON/brands.json';
import productsJson from '@/dbJSON/products.json';
import { type IBrand } from '@/models/IBrand';
import type { IProduct } from '@/models/IProduct';

export const brandsApi = {
  getBrands: async () => {
    const data: IBrand[] = await JSON.parse(JSON.stringify(brandsJson));
    return data;
  },
  getBrandById: async (brandId: number) => {
    const data: IBrand[] = await JSON.parse(JSON.stringify(brandsJson));

    return data.filter((b) => b.id === brandId)[0];
  }
};

export const productsApi = {
  getProducts: async () => {
    const data: IProduct[] = await JSON.parse(JSON.stringify(productsJson));

    return data;
  },
  getProductsByBrand: async (brandId: number) => {
    const data: IProduct[] = await JSON.parse(JSON.stringify(productsJson));

    return data.filter((p) => p.brand === brandId);
  }
};
