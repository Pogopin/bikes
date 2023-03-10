import { defineAsyncComponent } from 'vue'

const Medida = defineAsyncComponent(() => import('./medida/index.vue'))
const Galery = defineAsyncComponent(() => import('./galery/index.vue'))
const Tecnologia = defineAsyncComponent(() => import('./tecnologia/index.vue'))
const Brands = defineAsyncComponent(() => import('./brands/index.vue'))
const BikeCard = defineAsyncComponent(() => import('./bikeCard/index.vue'))
const Reviews = defineAsyncComponent(() => import('./reviews/index.vue'))
const Tarif = defineAsyncComponent(() => import('./tarif/index.vue'))
const TarifCard = defineAsyncComponent(() => import('./tarifCard/index.vue'))
const HeaderInner = defineAsyncComponent(() => import('./headerInner/index.vue'))
const ExtendedBikeCard = defineAsyncComponent(() => import('./extendedBikeCard/index.vue'))
const BikesInfo = defineAsyncComponent(() => import('./bikesInfo/index.vue'))
const MoreInfoCard = defineAsyncComponent(() => import('./moreInfoCard/index.vue'))
const Insurance = defineAsyncComponent(() => import('./insurance/index.vue'))
const Advantages = defineAsyncComponent(() => import('./advantages/index.vue'))
const Questions = defineAsyncComponent(() => import('./questions/index.vue'))
const Message = defineAsyncComponent(() => import('./message/index.vue'))


export {
  Medida, Message, Galery, Tecnologia, Brands, BikeCard, Reviews, Tarif, TarifCard, HeaderInner, ExtendedBikeCard, BikesInfo, MoreInfoCard, Insurance, Advantages, Questions
}