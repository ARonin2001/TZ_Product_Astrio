import brandsJson from '@/dbJSON/brands.json';
import productsJson from '@/dbJSON/products.json';
import { type IBrand } from '@/models/IBrand';

export const apiMethods = {
  getBrands: async () => {
    const result: IBrand[] = await JSON.parse(JSON.stringify(brandsJson));
    return result;
  }
};
