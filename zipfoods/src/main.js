import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';

import { store } from "@/common/store.js";
import App from './App.vue'
import HomePage from '@/components/pages/HomePage.vue';
import ProductsPage from '@/components/pages/ProductsPage.vue';
import CategoriesPage from '@/components/pages/CategoriesPage.vue';
import ProductPage from '@/components/pages/ProductPage.vue';
import ProductCreatePage from '@/components/pages/ProductCreatePage.vue';
import CartPage from '@/components/pages/CartPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage },
        { path: '/products', component: ProductsPage },
        { path: '/product/new', component: ProductCreatePage },
        { path: '/product/:id', component: ProductPage, props: true },
        { path: '/categories', component: CategoriesPage },
        { path: '/cart', component: CartPage },
    ]
});

createApp(App).use(router).use(store).mount('#app');