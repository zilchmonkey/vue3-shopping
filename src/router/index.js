import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView'
import CheckoutView from '@/views/CheckoutView'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/checkout',
        name: 'Checkout',
        component: CheckoutView,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
