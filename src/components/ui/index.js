import { defineAsyncComponent } from 'vue'

const BaseButton = defineAsyncComponent(() => import('./BaseButton/index.vue'))
const BaseInput = defineAsyncComponent(() => import('./BaseInput/index.vue'))
const BaseTextArea = defineAsyncComponent(() => import('./BaseTextArea/index.vue'))
const RadioButton = defineAsyncComponent(() => import('./RadioButton/index.vue'))
const BaseCheckbox = defineAsyncComponent(() => import('./BaseCheckbox/index.vue'))

export {
  BaseButton, BaseInput, BaseTextArea, RadioButton, BaseCheckbox
}
