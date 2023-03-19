import { defineAsyncComponent } from 'vue'

const Header = defineAsyncComponent(() => import('./header/index.vue'))
const Footer = defineAsyncComponent(() => import('./footer/index.vue'))
const Contacts = defineAsyncComponent(() => import('./contacts/index.vue'))

export {
  Header,
  Footer,
  Contacts
}
