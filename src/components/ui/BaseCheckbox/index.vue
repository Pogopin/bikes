<template>
    <label
        class="checkbox"
    >
        <input
            type="checkbox" 
            class="checkbox__real" 
            :checked ="props.checked"
            :name="props.name"
        >
        <span class="checkbox__fake"></span>
        <span class="checkbox__title">{{props.value}}</span>
              
    </label>
    
</template>
<script setup>
import { defineProps, defineEmits, computed } from 'vue';
const emits = defineEmits(['checked:value']);
const props = defineProps({
    name: {
        type: String,
        required: true
    },
    checked: {
        type: Boolean,
        default: false
    },
    value: {
        type: String
    }
})
const val = computed({
    get() {
        return props.value;
    },
    set(value) {
        // console.log(value)
        emits('checked:value', value);
    }
})
</script>
<style scoped>
.checkbox {
    display: block;
    cursor: pointer;
}
.checkbox__real {
    display: none;
}

.checkbox__real:checked + .checkbox__fake::before {
    position: absolute;
    content: '';
    width: 10px;
    height: 10px;
    background-color: #000000;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.checkbox__fake {
    position: relative;
    display: inline-block;
    width: 32px;
    height: 32px;
    border-radius: 5px;
    background-color: var(--tree-text-color);
    
    margin-right: 10px;
    border: 2px solid var(--light-grey-color);
    vertical-align: middle;
}
</style>