<template>
    <label class="label" :for="props.name">{{ props.label }}</label>
    <input v-if="props.type !== 'textarea'" 
        class="input-name"
        v-model="val"
        :type="props.type"
        :name="props.name"
        :placeholder="props.placeholder"
                        
    >
    <textarea v-else
        class="input-name" 
        v-model="val"
        rows="8"
        :name="props.name" 
        :placeholder="props.placeholder"
    ></textarea>
</template>
<style scoped>
.input-name {
    position: relative;
    padding: 12px;
    background-color: var(--tree-text-color);
    border: 1px solid #EDEDED;
    border-radius: 5px;
    width: 100%;
}
.label {
    display: block;
    margin-bottom: 4px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: var(--bg-second-color);
}
</style>
<script setup>
import { defineProps, defineEmits, computed } from 'vue';

const emits = defineEmits([ 'update:value' ]);
const props = defineProps({
    value: {
        type: String,
        default: ''
    },
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: 'text',
        validator(value) {
            return ['text', 'textarea'].includes(value);
        }
    },
    placeholder: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: true
    }
})

const val = computed({
  get () {
    return ''
  },
  set (value) {
    emits('update:value', value);
  }
})

</script>
