<template>
    <section class="order-form">
        <div class="order-form__container">
            <div class="options__item item">
                <h4 class="item__title">bikecraft ou seguro?</h4>
                <div class="item__body">
                    
                    <RadioButton
                        name="term"
                        v-model="valueTopRadio"
                        value="Bikcraft"
                        @checked:value="changeTopRadio"
                    />
                    <RadioButton
                        name="term"
                        v-model="valueTopRadio"
                        value="Seguro"
                        @checked:value="changeTopRadio"
                    />
                </div>
                <div class="item__options-status status">
                    <h4 class="item__title">ESCOLHA A SUA:</h4>
                    <div v-for="(el, i) in chooseBike"
                        :key="el.id"
                    >
                        <component
                            :is="currentComponent(el.className)"
                            class="mod-display"
                            :name="el.name"
                            :checked="el.checked"
                            :value="el.value"
                            v-model="valueBottomRadio"
                            @checked:value="(val) => changeBottomRadio(val)"
                        />
                        <div class="status__info-bike"
                          :class="{ 'none': valueBottomRadio !== el.value }"
                        >
                            <div class="status__info-wrapper">
                                <ul class="status__list">
                                    <li
                                        v-for="el in props.bikes[i].characteristics"
                                        :key="el.name"
                                    ><img :src="getImageUrlIcon(el.icon)" alt="image">{{el.name}}</li>
                                </ul>
                                <div class="status__info-bike-img">
                                    <img :src="getImageUrl(props.bikes[i].imgFull)" alt="image">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-request__item item">
                <form class="form" @submit.prevent="sendForm">
                    <div class="form__information information">
                        <h4 class="information__title">Dados Pessoais</h4>
                        <div class="personal__information-block">
                            <div
                                v-for="(el, i) in personalData"
                                :key="el.id"
                                :class="{'input': i > 1}"
                            >
                                <component
                                    :is="currentComponent(el.component)"
                                    :label="el.label"
                                    :placeholder="el.placeholder"
                                    :name="el.name"
                                    :type="el.type"
                                    
                                />
                            </div>
                        </div>
                    </div>
                    <div class="form__delivery delivery">
                        <h4 class="delivery__title">delivery</h4>
                        <div class="delivery-block">
                            <div
                                v-for="el in deliveryData"
                                :key="el.id"
                            >
                                <component
                                    :is="currentComponent(el.component)"
                                    :label="el.label"
                                    :placeholder="el.placeholder"
                                    :name="el.name"
                                    :type="el.type"
                                />
                            </div>
                        </div>
                        <BaseCheckbox
                            class="mb"
                            name="agreement"
                            :checked="false"
                            :value="'li e aceito os termos e condições.'"
                        />

                        <BaseButton
                            title="SOLICITAR ORÇAMENTO"

                        />

                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<style scoped>
.mb {
    margin-bottom: 16px;
}

.none {
    display: none;
}

.status__list {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: var(--bikes-card-color);
    padding-left: 31px;
    padding-bottom: 10px;
}
.status__list li {
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    position: relative;
    padding-left: 35px;
}
.status__list li img {
    position: absolute;
    left: 0;
}
.status__title {
    font-weight: 500;
    color: var(--bg-second-color);
    font-size: 16px;
    line-height: 16px;
}
.status__info-bike {
    background-color: white;
    margin-top: -25px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    margin-bottom: 20px;
}
.status__info-wrapper {
    display: flex;
    align-items: center;
    gap: 5px;
}
.status__info-bike-img {
    max-width: 146px;
}
.status__info-bike-img img {
    border-radius: 5px;
}
/* -------------------------------------------------------------- */
.form-request__item {
    flex-grow: 1;
    padding: 60px 30px 60px 60px;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
}
.information__title,.delivery__title {
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    font-size: 12px;
    line-height: 24px;
    text-transform: uppercase;
    color: var(--accordion-body-text);
    margin-bottom: 20px;
    position: relative;
    padding-left: 10px;
}
.information__title::before {
    content: '';
    position: absolute;
    width: 5px;
    height: 12px;
    background-color: var(--accent-color);
    left: 0;
    top: 7px;
}
.personal__information-block {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    row-gap: 20px;
    column-gap: 20px;
    
}
.input {
    grid-column: span 2;
}
input {
    padding: 12px;
    display: block;
}
.mod-display {
    display: block;
    margin-bottom: 20px;
}
.order-form {
    margin-bottom: 120px;
}
.order-form__container {
    display: flex;
}
.options__item {
    flex-grow: 1;
    max-width: 460px;
    padding: 60px 0 150px 60px;
    color: var(--text-color);
    background-color: var(--bg-color);
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
}
.item__title {
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    font-size: 12px;
    line-height: 24px;
    text-transform: uppercase;
    color: var(--second-text-color);
    margin-bottom: 30px;
    padding-left: 10px;
    position: relative;
}
.item__title::before {
    content: '';
    position: absolute;
    width: 4px;
    height: 8px;
    background-color: var(--accent-color);
    left: 0;
    top: 9px;
}

.item__body {
    display: flex;
    gap: 20px;
    margin-bottom: 40px;
}
.item__options-status {
    max-width: 340px;
}
/* -------------------------------------------------------------- */
/* --------------------------delivery block------------------ */
.form__delivery {
    margin-top: 60px;
}
.delivery__title::before {
    content: '';
    position: absolute;
    width: 5px;
    height: 12px;
    background-color: var(--accent-color);
    left: 0;
    top: 5px;
}
.delivery-block {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-bottom: 20px;
}
</style>

<script setup>
import { defineProps, markRaw, ref } from 'vue'
import { RadioButton, BaseInput, BaseButton, BaseCheckbox } from '../../ui'
import { chooseBike } from '../../../config/chooseBike'
import { personalData } from '../../../config/personalDataConfig'
import { deliveryData } from '../../../config/deliveryDataConfig'

const valueTopRadio = ref('Bikcraft')

const valueBottomRadio = ref('')

function changeTopRadio (newValue) {
  valueTopRadio.value = newValue
}

function changeBottomRadio (value) {
  valueBottomRadio.value = value
}

const components = {
    BaseInput, RadioButton
}

function currentComponent (name) {
    return markRaw(components[name])
}

const props = defineProps({
    bikes: Object
})

function sendForm () {
  console.log('Data sending...')
  console.log('valueTopRadio :', valueTopRadio.value)
  console.log('valueBottomRadio :', valueBottomRadio.value)
}

function getImageUrl (name) {
    return new URL('../../../assets/img/' + name, import.meta.url).href
}
function getImageUrlIcon (name) {
    return new URL('../../../assets/img/icon/' + name, import.meta.url).href
}
</script>
