import { defineAsyncComponent } from 'vue';

const Header = defineAsyncComponent(() => import('./header/index.vue'));
const Medida = defineAsyncComponent(() => import('./medida/index.vue'));
const Galery = defineAsyncComponent(() => import('./galery/index.vue'));
const Tecnologia = defineAsyncComponent(() => import('./tecnologia/index.vue'));
const Brands = defineAsyncComponent(() => import('./brands/index.vue'));

export {
  Header,
  Medida,
  Galery,
  Tecnologia,
  Brands,
};