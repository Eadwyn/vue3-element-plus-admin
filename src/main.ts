import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import i18n from '@/lang/index';

createApp(App).use(i18n).mount('#app');
