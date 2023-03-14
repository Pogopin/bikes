<template>
    <label class="radio"
        :class="{ 'active': props.checked }"
    >
        <input 
            type="radio"
            class="radio__real"
            :checked="props.checked"
            :name="props.name"
            :value="props.value"
            v-model="val"
            
        >
            <span class="radio__fake"></span>
            <span class="radio__title">{{props.value}}</span>
            
    </label>
    
</template>
<script setup>
import { defineProps, defineEmits, computed, ref, onMounted } from 'vue';
// onMounted(() => {
//     const parentBlock = document.querySelector('.item__body');
//     const children = parentBlock.querySelectorAll('.radio__real');

//     children.forEach(el => {
//         el.addEventListener('change', (event) => {
//             document.querySelector('.radio.active').classList.remove('active');
//             el.parentNode.classList.add('active');
           
//         })
//     });
// })
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
        console.log(value)
    }
})
</script>
<style scoped>
.radio__real {
    display: none;
}
.radio {
    padding: 16px 72px 16px 10px;
    background-color: var(--bg-checkbox);
    border-radius: 5px;
    cursor: pointer;
}
.radio__fake {
    position: relative;
    display: inline-block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    margin-right: 10px;
    border: 1px solid var(--accent-text-color);
    vertical-align: middle;
}
.radio__real:checked + .radio__fake::before{
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    background-color: black;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.radio__title {
    font-family: 'Roboto', sans-serif;
    color: var(--light-grey-color);
    font-weight: 500;
    line-height: 16px;

}
.radio__real:checked ~ .radio__title {
    color: var(--bg-second-color);
}
.active {
    background-color: var(--text-color);
}
.back {
    background-color: var(--text-color);
}
</style>