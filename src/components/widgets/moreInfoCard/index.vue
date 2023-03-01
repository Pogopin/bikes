<template>
    <section class="more-info">
        <div class="more-info__container">
            <div class="more-info__img img__info grid">
                <div class="img__info-item">
                    <img :src="getImageUrl(props.specifications.imgFull)" alt="image">
                </div>
                <div class="img__info-item">
                    <img :src="getImageUrl(props.specifications.imgFull)" alt="image">
                </div>
                <div class="img__info-item">
                    <img :src="getImageUrl(props.specifications.imgFull)" alt="image">
                </div>
            </div>
            <div class="more-info__item item">
                <p class="item__text">A Nimbus Stark é a melhor Bikcraft já criada pela nossa equipe. Ela vem equipada com os melhores acessórios, o que garante maior velocidade. </p>
                <div class="item__block">
                    <BaseButton
                        title="SELECIONE A SUA"
                    />
                    <div class="item__block-content">
                        <p class="entrega">entrega em 5 dias</p>
                        <p class="estoque">18 em estoque</p>
                    </div>
                </div>
                <h3 class="item__subtitle">Informações</h3>
                <div class="item__informations item-background">
                    <div class="item__informations-block block">
                        <div 
                            v-for="el in props.specifications.characteristics"
                            :key="el.name"
                            class="block__content">
                            <img :src="getImageUrlIcon(el.icon)" alt="image">
                            <h3 class="block__content-title">{{el.name}}</h3>
                            <p class="block__content-text">Permite você viajar distâncias inimaginaveis com a sua bike.</p>
                        </div>
                    </div>
                </div>
                <h3 class="item__subtitle">Ficha técnica</h3>
                <div class="item__specifications item-background">
                    <ul class="item__specifications-list">
                        <li><p>Peso</p><p>9 kg</p></li>
                        <li><p>Altura</p><p>60 cm</p></li>
                        <li><p>Largura</p><p>120 cm</p></li>
                        <li><p>Profundidade</p><p>10 cm</p></li>
                        <li><p>Marchas</p><p>16</p></li>
                        <li><p>Rodas</p><p>29</p></li>
                    </ul>
                </div>           
            </div>

        </div>
    </section>
</template>
<style scoped>
.grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 20px;
}
.img__info-item:first-of-type {
    grid-column: span 2;
    grid-row: span 2;
    height: 440px;
    object-fit: cover;
}
.img__info-item {
    height: 212px;
}
.more-info {
    background-color: var(--bg-second-color);
    margin-top: -60px;
}
.more-info__container {
    display: flex;
    gap: 60px;
}
.img__info {
    height: 440px;
}
.img__info img {
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
}
.more-info__item {
    flex-basis: 630px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    color: var(--second-text-color);
}
.item__text {
    margin-bottom: 32px;
}
.item__block {
    display: flex;
    gap: 12px;
    align-items: center;
    margin-bottom: 12px;
}
.item__block-content {
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
}
.item__block-content p {
    position: relative;
    padding: 4px 2px 4px 26px;
    background-color: var(--bg-color);
    border-radius: 5px;
    
}
.item__block-content p:last-of-type {
    margin-top: 12px;
}
.entrega::before {
    position: absolute;
    left: 0;
    content: '';
    background: url('@/assets/img/icon/entrega.svg') no-repeat;
    width: 17px;
    height: 17px;
}
.estoque::before {
    position: absolute;
    left: 0;
    content: '';
    background: url('@/assets/img/icon/estoque.svg') no-repeat;
    width: 17px;
    height: 17px;
}
.item__subtitle {
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    text-transform: uppercase;
    color: var(--text-color);
    margin-bottom: 12px;
}
.item__informations-block {
    display: flex;
    flex-wrap: wrap;
    column-gap: 20px;
}
.block__content {
    max-width: 213px;
    margin-bottom: 32px;
}
.block__content-title {
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: var(--text-color);
    margin-bottom: 8px;
}
.block__content-text {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
}
.item__informations {
    padding: 32px 45px 0 32px;
    margin-bottom: 40px;
}
.item__specifications {
    padding: 32px;
    font-size: 16px;
    margin-bottom: 60px;
}
.item-background {
    max-width: 620px;
    background-color: var(--bg-color);
    border-radius: 5px;
}
.item__specifications-list li {
    max-width: inherit;
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
}
.item__specifications-list li:last-of-type {
    margin-bottom: 0;
}
</style>
<script setup>
import { defineProps } from 'vue'
import { BaseButton } from '../../ui';
const props = defineProps({
    specifications: Object
})
function getImageUrl (name) {
    return new URL('../../../assets/img/' + name, import.meta.url).href;
}
function getImageUrlIcon (name) {
    return new URL('../../../assets/img/icon/' + name, import.meta.url).href;
}
</script>
