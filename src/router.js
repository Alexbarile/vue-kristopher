//importare createRouter e createWebHistory
import { createRouter, createWebHistory } from 'vue-router';

//importare le componenti delle pagine
import Home from './pages/Home.vue';


//creiamo l'oggetto router
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        // {
        //     path: '/shop',
        //     name: 'Shop',
        //     component: Home,
        // },
        // {
        //     path: '/storia',
        //     name: 'Storia',
        //     component: Home,
        // },
        // {
        //     path: '/personalizza',
        //     name: 'Personalizza',
        //     component: Home,
        // },
        // {
        //     path: '/contattaci',
        //     name: 'Contattaci',
        //     component: Home,
        // },
        // {
        //     path: '/altro',
        //     name: 'Altro',
        //     component: Home,
        // },
        // {
        //     path: '/cura-candele',
        //     name: 'Cura_Candele',
        //     component: Home,
        // },
        // {
        //     path: '/riutilizza-barattolo',
        //     name: 'Riutilizza_Barattolo',
        //     component: Home,
        // },
        // {
        //     path: '/tappi-legno',
        //     name: 'Tappi_Legno',
        //     component: Home,
        // },
        // {
        //     path: '/login',
        //     name: 'Login',
        //     component: Home,
        // },



        //rotta per errore 404 (sempre per ultima)
        // {
        //     path: '/*',
        //     name: 'not-found',
        //     component: NotFound
        // },
    ]
})

//4 esportiamo il router

export { router };