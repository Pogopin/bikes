<template>
    <div class="bikes__item">
        <img :src="getImageUrl(props.bikes_data.img)" alt="image">
        <h3 class="bikes__item-title">{{ props.bikes_data.name }}</h3>
        <p class="bikes__item-price">{{ props.bikes_data.price}}</p>
    </div>
</template>
<style scoped>
.bikes__item {
    max-width: 460px;
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
</style>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
    bikes_data: Object
})
function getImageUrl (name) {
    return new URL('../../assets/img/' + name, import.meta.url).href
}
</script>
