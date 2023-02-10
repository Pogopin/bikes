import { defineAsyncComponent } from 'vue'

const Header = defineAsyncComponent(() => import('./sections/header/index.vue'))
const Medida = defineAsyncComponent(() => import('./widgets/medida/index.vue'))
const Galery = defineAsyncComponent(() => import('./widgets/galery/index.vue'))
const Tecnologia = defineAsyncComponent(() => import('./widgets/tecnologia/index.vue'))
const Brands = defineAsyncComponent(() => import('./widgets/brands/index.vue'))
const BikeCard = defineAsyncComponent(() => import('./widgets/bikeCard/index.vue'))
const Reviews = defineAsyncComponent(() => import('./widgets/reviews/index.vue'))
const Tarif = defineAsyncComponent(() => import('./widgets/tarif/index.vue'))
const TarifCard = defineAsyncComponent(() => import('./widgets/tarifCard/index.vue'))
const Contacts = defineAsyncComponent(() => import('./widgets/contacts/index.vue'))
const Footer = defineAsyncComponent(() => import('./sections/footer/index.vue'))

export {
  Header,
  Medida,
  Galery,
  Tecnologia,
  Brands,
  BikeCard,
  Reviews,
  Tarif,
  TarifCard,
  Contacts,
  Footer
}