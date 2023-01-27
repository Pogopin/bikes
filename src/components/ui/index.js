import { defineAsyncComponent } from 'vue';

const medidaBTN = defineAsyncComponent(() => import('./button.vue'));

export {
    medidaBTN,
    
};