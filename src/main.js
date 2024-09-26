import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// Global CSS
import './assets/css/main.css';

// Bootstrap ve BootstrapVue stillerini içe aktar
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

// İkonları kütüphaneye ekleyin
library.add(fas, fab);

// BootstrapVue'u içe aktar
import BootstrapVue3 from 'bootstrap-vue-3';

// Swiper ve stillerini içe aktar
import { Swiper as SwiperComponent, SwiperSlide as SwiperSlideComponent } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

// Vue uygulamasını oluştur
const app = createApp(App);

// FontAwesome bileşenini global olarak kaydet
app.component('font-awesome-icon', FontAwesomeIcon);

// Swiper bileşenlerini global olarak kaydet
app.component('SwiperComponent', SwiperComponent);
app.component('SwiperSlideComponent', SwiperSlideComponent);

// BootstrapVue'u kullan
app.use(BootstrapVue3);
app.use(router);
app.use(store);

// Uygulamayı mount et
app.mount('#app');
