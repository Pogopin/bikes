<template>
    <button
        class="btn"
        :class="styleButton"
    >
      {{ props.title }}
      <slot/>
	</button>
</template>

<style scoped>
.btn {
    color: var(--btn-color);
    font-family: inherit;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    padding: 16px 32px;
    border-radius: 5px;
    cursor: pointer;
    background-color: var(--accent-color);
    border: none;
    text-transform: uppercase;
}
.custom_button {
    color: var(--light-grey-color);
    font-family: inherit;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    padding: 16px 32px;
    border-radius: 5px;
    cursor: pointer;
    background-color: var(--bg-second-color);
}
</style>

<script setup>
import { computed, defineProps } from 'vue'
const props = defineProps({
    title: String,
    customButton: Boolean
})
const styleButton = computed(()=> {
    return {
        custom_button: props.customButton
    }
})
</script>
