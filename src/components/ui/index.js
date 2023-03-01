import { defineAsyncComponent } from 'vue'
const BaseButton = defineAsyncComponent(() => import('./BaseButton/index.vue'))
const BaseInput = defineAsyncComponent(() => import('./BaseInput/index.vue'))

export {
  BaseButton, BaseInput
}
