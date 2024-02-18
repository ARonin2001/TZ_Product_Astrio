import { defineStore } from 'pinia';
import { type IBrand } from '@/models/IBrand';
import { apiMethods } from '@/api/api';

interface State {
  brands: IBrand[];
}

export const useBrandsStore = defineStore('brands', {
  state: (): State => {
    return {
      brands: []
    };
  },
  actions: {
    async setAllBrands(): Promise<void> {
      const result: IBrand[] = await apiMethods.getBrands();
      this.brands = result;
    }
  }
});
