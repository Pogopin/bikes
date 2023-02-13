import { defineAsyncComponent } from 'vue'

const Header = defineAsyncComponent(() => import('./header/index.vue'))
const Footer = defineAsyncComponent(() => import('./footer/index.vue'))

export {
  Header,
  Footer
}