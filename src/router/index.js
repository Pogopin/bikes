import { createRouter, createWebHistory } from 'vue-router';
import index from '../pages/index.vue';
import bicicletasPage from '../pages/bicicletasPage.vue';
import segurosPage from '../pages/segurosPage.vue';
import contactPage from '../pages/contactPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/bicicletas',
      component: bicicletasPage
    },
    {
      path: '/seguros',
      component: segurosPage
    },
    {
      path: '/Contato',
      component: contactPage
    },
    
  ]
})

export default router
