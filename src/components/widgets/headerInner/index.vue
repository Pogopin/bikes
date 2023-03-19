<template>
    <section class="header-inner">
        <div class="header-inner__container">
            <p class="header-inner__text">{{props.text}}</p>
            <h1 class="header-inner__title">{{props.title}}</h1>
        </div>
    </section>
</template>

<style scoped>
.header-inner {
    background-color: var(--bg-second-color);
    padding: 60px 0 60px;
    margin-bottom: 60px;
}
.header-inner__text {
    color: var(--second-text-color);
    font-weight: 500;
    font-size: 24px;
    line-height: 23px;
    margin-bottom: 8px;
}
.header-inner__title {
    font-weight: 600;
    font-size: 64px;
    line-height: 72px;
    color: var(--text-color);
}
</style>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    text: String,
    title: String
})
</script>
