import '@/assets/scss/main.scss';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import Unicon from 'vue-unicons';
import { uniShoppingBasket, uniTrashAlt } from 'vue-unicons/dist/icons';

Unicon.add([uniShoppingBasket, uniTrashAlt]);

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(Unicon);

app.mount('#app');
