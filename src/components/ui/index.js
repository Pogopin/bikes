import { defineAsyncComponent } from 'vue'
const BaseButton = defineAsyncComponent(() => import('./BaseButton/index.vue'))
const BaseInput = defineAsyncComponent(() => import('./BaseInput/index.vue'))
const BaseTextArea = defineAsyncComponent(() => import('./BaseTextArea/index.vue'))


export {
  BaseButton, BaseInput, BaseTextArea, 
}
