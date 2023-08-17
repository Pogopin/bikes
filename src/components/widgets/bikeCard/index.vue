<template>
    <div class="bikes__item">
        <div class="bikes__item-rating"><span>{{ props.bikes_data.rating }}</span></div>
        <!-- <img :src="getImageUrl(props.bikes_data.img)" alt="image"> -->
        <img :src="config.imagePathImg + props.bikes_data.img" alt="image">
        <h3 class="bikes__item-title">{{ title[0] }}</h3>
        <p class="bikes__item-price">R$ {{ props.bikes_data.price}}</p>
    </div>
</template>

<style scoped>
.bikes__item {
    max-width: 460px;
    position: relative;
}
.bikes__item-title {
    margin-bottom: 8px;
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    position: relative;
    padding-left: 20px;
}
.bikes__item-title::before {
    content: '';
    background-color: var(--accent-color);
    position: absolute;
    width: 12px;
    height: 8px;
    left: 0;
    top: 17px;
}
.bikes__item-price {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    padding-left: 21px;
}
.bikes__item-rating {
    position: absolute;
    top: 5px;
    left: -5px;
    min-width: 30px;
    border-radius: 5px;
    background-color: #3bb33b;
    padding: 5px;
    font-family: 'Grafik_Kinopoisk';
    color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>

<script setup>
import { defineProps } from 'vue';
import config from '@/../config.js';

const props = defineProps({
    bikes_data: Object
})

const title = props.bikes_data.title.split(' ')

// function getImageUrl (name) {
//     // return new URL('../../../assets/img/' + name, import.meta.url).href
//     return new URL('/src/assets/img/' + name, import.meta.url).href
    
// }
</script>
