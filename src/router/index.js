import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import ShopList from '../views/ShopList.vue';
import Checkout from '../views/Checkout.vue';
import Contact from '../views/Contact.vue';
import ProductComparison from '../views/ProductComparison.vue';
import ShopCard from '../views/ShopCard.vue';
import SingleProduct from '../views/SingleProduct.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/shop',
    name: 'shop',
    component: ShopList,
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: Checkout,
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
  },
  {
    path: '/product-comparison',
    name: 'product-comparison',
    component: ProductComparison,
  },
  {
    path: '/shop-card',
    name: 'shop-card',
    component: ShopCard,
  },
  {
    path: '/single-product',
    name: 'single-product',
    component: SingleProduct,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
