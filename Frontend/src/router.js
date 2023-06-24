import { createRouter, createWebHistory } from 'vue-router'


// Компоненты страниц
import HomePage from './views/HomePage.vue';
import AutoPage from './views/AutoPage.vue';
import PayPage from './views/PayPage.vue'
import SuccessPage from './views/SuccessPage.vue'

export default createRouter({
    // История переходов сохраняется
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return {
                savedPosition,
                behavior: 'smooth'
            }
        } else {
            return { x: 0, y: 0,
                behavior: 'smooth'
            }
        }
    },


    // Роуты и компоненты
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },
        {
            path: '/auto-available',
            name: 'Auto available',
            component: AutoPage
        },
        {
            path: "/payment",
            name: "payment",
            component: PayPage
        },
        {
            path: "/success",
            name: "success",
            component: SuccessPage
        }
    ]
})