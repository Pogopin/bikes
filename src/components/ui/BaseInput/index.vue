<template>
  <div class="form-input">
    <input class="input"
      v-model="val"
      :type="props.type"
      :name="props.name"
      :id="props.name"
      :placeholder="props.placeholder"
      :checked="props.value"
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
import { defineProps, defineEmits, computed } from 'vue'

const emits = defineEmits([ 'update:value' ])
const props = defineProps({
    value: {
        type: Boolean,
        default: false
    },
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: 'text'
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
    return props.value
  },
  set (value) {
    emits('update:value', value, props.name)
  }
})

</script>
