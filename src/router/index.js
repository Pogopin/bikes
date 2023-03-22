import { createRouter, createWebHistory } from 'vue-router'
import index from '../pages/index.vue'
import biciclets from '../pages/bicicletas/index.vue'
import seguros from '../pages/seguros/index.vue'
import contact from '../pages/contact/index.vue'
import moreInfoPage from '../pages/moreInfo/index.vue'
import requestPage from '../pages/request/index.vue'
import conditionsPage from '../pages/conditions/index.vue'

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
      path: '/bicicletas/:id',
      name: 'moreInfo',
      component: moreInfoPage,
      props: true
    },
    {
      path: '/seguros',
      component: seguros
    },
    {
      path: '/Contato',
      component: contact
    },
    {
      path: '/request/:id',
      name: 'request',
      component: requestPage,
      props: true
    },
    {
      path: '/conditions',
      name: 'conditions',
      component: conditionsPage
    },
  ]
})

export default router
