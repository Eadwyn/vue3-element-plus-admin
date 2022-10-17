import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import i18n from '@/lang/index';
import router from '@/router';
import { createPinia } from 'pinia';
import 'virtual:svg-icons-register';
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';

createApp(App).use(i18n).use(router).use(createPinia()).use(ElementPlus).mount('#app');
