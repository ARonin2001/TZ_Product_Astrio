import '@/assets/scss/main.scss';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Unicon from 'vue-unicons';
import { uniShoppingBasket, uniShoppingCart } from 'vue-unicons/dist/icons';

Unicon.add([uniShoppingBasket, uniShoppingCart]);

const app = createApp(App);

app.use(router);
app.use(Unicon);

app.mount('#app');
