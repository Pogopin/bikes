import { createRouter, createWebHistory } from 'vue-router'
import index from '../pages/index.vue'
import biciclets from '../pages/bicicletas/index.vue'
import seguros from '../pages/seguros/index.vue'
import contact from '../pages/contact/index.vue'
import moreInfoPage from '../pages/moreInfo/index.vue'
import { AppLayouts, loadLayoutMiddleware } from './loadLayoutMiddleware'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/bicicletas',
      component: biciclets,
      meta: {
        layout: AppLayouts.login
      }
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
      component: contact,
      meta: {
        layout: AppLayouts.error
      }
    }
  ]
})

router.beforeEach(loadLayoutMiddleware)

export default router
