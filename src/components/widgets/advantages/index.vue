<template>
  <section class="advantages">
    <div class="advantages__container">
        <h1 class="advantages__title">nossas vantagens.</h1>
        <div class="advantages__content">
            <div 
                v-for="el in data"
                :key="el.id"
                class="advantages__content-item item-content">
                <img :src= getImageUrlIcon(el.icon) alt="icon">
                <h4 class="item-content__title">{{el.title}}</h4>
                <p class="item-content__text">{{el.text}}</p>
            </div>
        </div>
    </div>

  </section>
</template>
<style scoped>
.advantages {
    padding: 120px 0 110px;
    background-color: var(--bg-color);
    color: var(--text-color);
}
.advantages__title {
    font-weight: 600;
    font-size: 64px;
    line-height: 72px;
    color: var(--text-color);
    margin-bottom: 40px;
}
.item-content__title {
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    margin-top: 8px;
    margin-bottom: 8px;
}
.advantages__content {
    display: flex;
    flex-wrap: wrap;
    gap: 40px
}
.advantages__content-item {
    max-width: 364px;
}
.item-content__text {
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    line-height: 24px;
    color: var(--accent-text-color);
}
</style>
<script setup>
import { data } from '../../../config/advantagesConfig.js'
function getImageUrlIcon (name) {
    return new URL('../../../assets/img/icon/' + name, import.meta.url).href
}
</script>