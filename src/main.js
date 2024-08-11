import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import global CSS
import './assets/css/main.css';

// Import Bootstrap and BootstrapVue CSS files
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

// Font Awesome Core ve İkonları İçe Aktarın
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

// İkonları kütüphaneye ekleyin
library.add(fas, fab); // Add both solid and brand icons

// Import BootstrapVue
import BootstrapVue3 from 'bootstrap-vue-3'

const app = createApp(App)

// FontAwesome bileşenini küresel olarak kaydedin
app.component('font-awesome-icon', FontAwesomeIcon);

// Use BootstrapVue
app.use(BootstrapVue3)
app.use(router)

app.mount('#app')
