import { createRouter, createWebHistory } from 'vue-router'
import index from '../pages/index.vue'
import biciclets from '../pages/bicicletas/index.vue'
import seguros from '../pages/seguros/index.vue'
import contact from '../pages/contact/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/bicicletas',
      component: biciclets
    },
    {
      path: '/seguros',
      component: seguros
    },
    {
      path: '/Contato',
      component: contact
    }
  ]
})

export default router
