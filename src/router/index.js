import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LayoutFull from '@/layouts/LayoutFull.vue';
import AcessorioView from "../views/AcessorioView.vue";
import CategoriaView from "../views/CategoriaView.vue";
import CorView from "../views/CorView.vue";
import MarcaView from "../views/MarcaView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: LayoutFull,
      children: [
        {
          path: '',
          name: 'Home',
          component: HomeView,
        }, 
        {
          path: "/acessorio",
          name: "acessorio",
          component: AcessorioView,
        },
        {
          path: "/categoria",
          name: "categoria",
          component: CategoriaView,
        },
        {
          path: "/cor",
          name: "cor",
          component: CorView,
        },{
          path: "/marca",
          name: "marca",
          component: MarcaView,
        },
        {
          path: '/login',
          name: 'Login',
          component: () => import('@/views/LoginView.vue'),
        },
      ],
    },
  ],
});

export default router;

