import { defineStore } from 'pinia';
import { type IBrand } from '@/models/IBrand';
import { brandsApi } from '@/api/api';

interface initialState {
  brands: IBrand[];
}

export const useBrandsStore = defineStore('brands', {
  state: (): initialState => {
    return {
      brands: []
    };
  },
  actions: {
    async setAllBrands(): Promise<void> {
      const result: IBrand[] = await brandsApi.getBrands();
      this.brands = result;
    }
  }
});
