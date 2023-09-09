// Запросы к серверу
import axios from "axios";
axios.defaults.baseURL = 'http://localhost:3000';

// Работа с датой
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.locale('ru');
dayjs.extend(relativeTime)

// Всё для vue
import Vue from 'vue'
import i18n from "./i18n"
import App from './App.vue'
import router from './router.js';
Vue.config.productionTip = false



// Рендер в HTML
new Vue({
    i18n,
    router,
    render: h => h(App)
  }).$mount('#app')
