import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import './styles/app.scss';
import './styles/style.css';

createApp(App).use(router).use(createPinia()).mount('#app');
