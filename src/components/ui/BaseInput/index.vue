<template>
    <div class="form-input">
        <input class="input" 
            :type="props.type"
            :name="props.name"
            :id="props.name"
            :placeholder="props.placeholder"
            :value="props.value"
            @input="updateValue"

        >
        <label :for="props.name">{{ props.label }}</label>
    </div>
    
</template>
<style scoped>
.input {
    width: 500px;
    padding: 20px;
    margin-right: 2rem;
}
</style>
<script setup>
import { defineProps, defineEmits, ref, computed} from 'vue';

//---------------------------------------------------
// const emits = defineEmits(['update:value']);
// const props = defineProps({
//     value: {
//         type: String,
//         default: ''
//     },
//     name: {
//         type: String,
//         required: true
//     },
//     type: {
//         type: String,
//         default: 'text'
//     },
//     placeholder: {
//         type: String,
//         required: true
//     },
//     label: {
//         type: String,
//         required: true
//     }
// })
// const updateValue = (event) => {
//     emits('update:value', event.target.value);
// }

//---------------------------------------------------

</script>
