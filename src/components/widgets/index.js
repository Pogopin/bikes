import { defineAsyncComponent } from 'vue'

const Medida = defineAsyncComponent(() => import('./medida/index.vue'))
const Galery = defineAsyncComponent(() => import('./galery/index.vue'))
const Tecnologia = defineAsyncComponent(() => import('./tecnologia/index.vue'))
const Brands = defineAsyncComponent(() => import('./brands/index.vue'))
const BikeCard = defineAsyncComponent(() => import('./bikeCard/index.vue'))
const Reviews = defineAsyncComponent(() => import('./reviews/index.vue'))
const Tarif = defineAsyncComponent(() => import('./tarif/index.vue'))
const TarifCard = defineAsyncComponent(() => import('./tarifCard/index.vue'))
const Contacts = defineAsyncComponent(() => import('./contacts/index.vue'))


export {
  Medida, Galery, Tecnologia, Brands, BikeCard, Reviews, Tarif, TarifCard, Contacts
}