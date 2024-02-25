import { createRouter, createWebHistory } from 'vue-router';
import MainView from '@/views/MainView.vue';
import ProductsVue from '@/components/Products.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView,
      children: [
        {
          path: 'products/:brandId?',
          name: 'products',
          component: ProductsVue
        }
      ]
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/views/CartView.vue')
    }
  ]
});

export default router;
