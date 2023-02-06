<template>
    <button class="btn"
        :class="styleButton"
    >{{text}}</button>
</template>

<style scoped>
.btn {
    color: #332200;
    font-family: inherit;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    padding: 16px 32px;
    border-radius: 5px;
    cursor: pointer;
    background-color: var(--accent-color);
}
.customButton {
    color: var(--c4);
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
});
const text = props.title;
const styleButton = computed(()=> {
    return {
        customButton: props.customButton
    }
});
</script>
