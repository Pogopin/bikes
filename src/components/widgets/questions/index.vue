<template>
    <section class="questions">
        <div class="questions__container">
            <h1 class="questions__title">perguntas frequentes.</h1>
            <div class="questions__content content">
                <div class="content__item"
                    v-for="el in accordeon"
                    :key="el.id"
                >
                    <div class="content__header" @click="isVisible(el.id)">{{ el.question }}</div>
                    <div class="content__body body-visible">{{ el.body }}</div>
                    <img class="content__img" src="@/assets/img/icon/Vector8.svg" alt="image">
                </div>
            </div>
            
        </div>
    </section>
  
</template>
<style scoped>
.questions {
    color: var(--bg-second-color);
    padding: 120px 0 120px;
}
.questions__title {
    font-weight: 600;
    font-size: 64px;
    line-height: 72px;
    margin-bottom: 110px;
}
.content__header {
    position: relative;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    cursor: pointer;
    padding-left: 20px;
}
.content__header::before {
    content: '';
    position: absolute;
    width: 12px;
    height: 8px;
    background-color: var(--accent-color);
    left: 0;
    top: 8px;
}
.content__item {
    position: relative;
    padding: 20px 0 20px 20px;
    background-color: var(--tree-text-color);
}
.content__item:nth-child(2n) {
    background-color: var(--text-color);
}
.content__body {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: var(--accordion-body-text);
    max-width: 740px;
    padding: 20px 0 20px 20px;
    
}
.content__img {
    position: absolute;
    right: 20px;
    top: 50%;
    cursor: pointer;
}
.content__img.img-rotate {
    transform: rotate(180deg);
}
.body-visible {
    display: none;
}
</style>
<script setup>
import { accordeon } from '../../../config/accordeonConfig.js';
import { ref } from "vue";

// const visible = ref(false);
function isVisible(index) {
    const body = document.querySelectorAll('.content__body');
    const icon = document.querySelectorAll('.content__img');
    body[index-1].classList.toggle('body-visible');
    icon[index-1].classList.toggle('img-rotate');
    
}

</script>