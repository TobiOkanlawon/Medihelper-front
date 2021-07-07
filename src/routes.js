import { createWebHistory, createRouter } from "vue-router";
import Home from './views/Home.vue';


const routes = [
    {
        path: '/',
        name: "Home",
        component: Home
    },
    {
        path: '/register',
        name: "Register",
        component: () => import("./views/Register.vue")
    },
    {
        path: '/login',
        name: "Login",
        component: () => import("./views/Login.vue")
    },
    {
        path: '/reception',
        name: 'Reception',
        component: () => import('./views/Receptionist')
    },
    {
        path: '/pharmacy',
        name: 'Pharmacy',
        component: () => import('./views/Pharmacy')
    },
    {
        path: '/doctor',
        name: 'Doctor',
        component: () => import('./views/Doctor')
    },
    {
        path: '/viewStudent',
        name: 'ViewStudent',
        component: () => import('./views/StudentView')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router