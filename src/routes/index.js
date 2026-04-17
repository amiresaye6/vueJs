import HomeView from "@/views/HomeView.vue";
import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: '/',
        component: HomeView
    },
    {
        path: '/product/:id',
        name: "Product Details",
        component: () => import('../views/ProductView.vue'),
        props: true,
    },
    {
        path: '/about',
        name: "About Us",
        component: () => import('../views/AboutView.vue')
    },
]

const router = createRouter(
    {
        history: createWebHistory(),
        routes,
    }
)

export default router;