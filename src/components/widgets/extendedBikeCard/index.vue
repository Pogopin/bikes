<template>
    <div class="bikes-info" :class="{'bg-black': props.extendedData.imgFull === 'bicicleta2-full.jpg'}">
        <div class="bikes-info__container">
            <div class="bikes-info__item item">
                <div class="item__img">
                    <div class="item__price">R$ {{props.extendedData.price}}</div>
                    <img :src="getImageUrl(props.extendedData.imgFull)" alt="image">
                </div>
                <div class="item__content">
                    <h2
                        :class="{'title': props.extendedData.imgFull === 'bicicleta2-full.jpg'}"
                        class="item__content-title">{{title[0]}}
                    >
                    </h2>
                    <p 
                        :class="{'text': props.extendedData.imgFull === 'bicicleta2-full.jpg'}"
                        class="item__content-text">A {{title[0]}} Stark é a melhor Bikcraft já criada pela nossa equipe. Ela vem equipada com os melhores acessórios, o que garante maior velocidade.
                    >
                    </p>
                    <ul class="item__content-list">
                        <li
                            v-for="el in props.extendedData.characteristics"
                            :key="el.name"
                            :class="{'text': props.extendedData.imgFull === 'bicicleta2-full.jpg'}"
                        ><img :src="getImageUrlIcon(el.icon)" alt="image">{{el.name}}</li>
                    </ul>
                    <div class="item__content-btn">
                        <BaseButton
                            :title="'MAIS SOBRE'"
							@click="$router.push({ name: 'moreInfo', params: { id: props.extendedData.id}})"
                        >
                        <i class="fa-solid fa-arrow-right-long"></i>
                        </BaseButton>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.bikes-info__item {
    padding: 60px 0 60px;
    display: flex;
    gap: 40px;
    position: relative;
}
.bg-black {
    background-color: var(--bg-second-color);
}
.title {
    color: var(--text-color);
}
.text {
    color: var(--second-text-color) !important;
}
.item__img {
    position: relative;
}
.item__price {
    width: 104px;
    height: 40px;
    background-color: var(--bg-color);
    border-radius: 5px 0px 0px 5px;
    position: absolute;
    right: 2px;
    top: 20px;
    color: var(--text-color);
    display: flex;
    justify-content: center;
    align-items: center;
}
.item__img img {
    object-fit: cover;
}
.item__content {
    position: relative;
    padding-right: 65px;
    flex-grow: 0;
}
.item__content-title {
    font-weight: 600;
    font-size: 36px;
    line-height: 40px;
    padding-top: 1rem;
    margin-bottom: 20px;
    position: relative;
}
.item__content-title::after {
    content: '';
    position: absolute;
    width: 12px;
    height: 8px;
    background-color: var(--accent-color);
    left: 0;
    top: 0;
}
.item__content-text {
    max-width: 462px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: var(--bikes-card-color);
    margin-bottom: 32px;
}
.item__content-list li {
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 16px;
    position: relative;
    padding-left: 34px;
    display: flex;
    align-items: center;
}
.item__content-list li img {
    position: absolute;
    left: 0;
}
.item__content-btn {
    position: absolute;
    right: 0;
    bottom: 0px;
}
</style>
<script setup>
import { defineProps } from 'vue';
import { BaseButton } from '../../ui';
const props = defineProps({
    extendedData: Object
})
const title = props.extendedData.title.split(' ');
function getImageUrl (name) {
    return new URL('../../../assets/img/' + name, import.meta.url).href;
}
function getImageUrlIcon (name) {
    return new URL('../../../assets/img/icon/' + name, import.meta.url).href;
}
</script>
