import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import i18n from '@/lang/index';
import router from '@/router';
import { createPinia } from 'pinia';
import 'virtual:svg-icons-register';

createApp(App).use(i18n).use(router).use(createPinia()).mount('#app');
