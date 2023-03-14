<template>
    <section class="send-message">
        <div class="send-message__container">
            <div class="contacts__item item">
                <h4 class="item__title">Loja Online</h4>
                <div class="item__registration">
                    <ul class="item__registration-list">
                        <li>Rua Ali Perto, 35</li>
                        <li>Rio de Janeiro - RJ</li>
                        <li>Brasil - Terra - Vila Láctea</li>
                    </ul>
                </div>
                <div class="item__email">
                    <ul class="item__email-list">
                        <li>vendas@bikcraft.com</li>
                        <li>assistencia@bikcraft.com</li>
                    </ul>
                </div>
                <p class="item__phone">+55 22 99999-9999</p>
                <div class="item__social">
                    <img src="@/assets/img/icon/instagramY.svg" alt="instagram">
                    <img src="@/assets/img/icon/youtubeY.svg" alt="youtube">
                    <img src="@/assets/img/icon/facebookY.svg" alt="facebook">
                </div>
            </div>
            <div class="form-message__item">
                <form class="form">
                    <div class="form__input">
                        <div class="input__block"
                            v-for="el in formInputData"
                            :key="el.id"
                        >
                            <component
                                :is="currentComponent(el.component)"
                                :label="el.label"
                                :name="el.name"
                                :placeholder="el.placeholder"
                                :type="el.type"
                                @update:value="(val) => updateFormData(el.property, val)"
                            />
                        </div>
                    </div>
                    <div class="input__block">
                        <BaseInput                                 
                            label="Email"
                            name="inEmail"
                            placeholder="contato@email.com"
                            type="text"
                            @update:value="(val) => updateFormData('email', val)"
                        />
                    </div>
                    <div class="input__block">
                        <BaseTextArea                                 
                            label="Mensagem"
                            name="message-text"
                            placeholder="O que você precisa?"
                            type="textarea"
                            @update:value="(val) => updateFormData('message', val)"
                        />
                    </div>
                    <div class="form__button">
                        <BaseButton
                            title="ENVIAR MENSAGEM"
                        />
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>
<style scoped>
/* 
.block {
    flex-basis: 100%;
} */
.form {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.form__input {
    display: flex;
    gap: 20px;
    
}
.input__block {
    flex-basis: 100%;
}
.send-message {
    margin-bottom: 120px;
}
.contacts__item {
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
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    margin-bottom: 40px;
}
.item__registration {
    position: relative;
    margin-bottom: 32px;
    padding-left: 31px;
}

.item__registration::before {
    position: absolute;
    content: '';
    background-image: url('@/assets/img/icon/local.svg');
    width: 22px;
    height: 19px;
    left: 0;
    background-repeat: no-repeat;
}
.item__email {
    position: relative;
    margin-bottom: 32px;
    padding-left: 31px;
}
.item__email::before {
    position: absolute;
    content: '';
    background-image: url('@/assets/img/icon/email.svg');
    width: 22px;
    height: 19px;
    left: 0;
    background-repeat: no-repeat;
}
.item__phone {
    position: relative;
    margin-bottom: 60px;
    padding-left: 31px;
}
.item__phone::before {
    position: absolute;
    content: '';
    background-image: url('@/assets/img/icon/telefone.svg');
    width: 22px;
    height: 19px;
    left: 0;
    background-repeat: no-repeat;
}
.item__social {
    display: flex;
    gap: 32px;
    margin-left: 32px;
}
.send-message__container {
    display: flex;
    /* justify-content: space-between; */
}
.form-message__item {
    flex-grow: 1;
    padding: 60px 30px 60px 60px;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
}
</style>
<script setup>
import { BaseButton, BaseInput, BaseTextArea } from '../../ui/index';
import { ref, markRaw } from 'vue';
import { formInputData } from '../../../config/formInputConfig.js'
const formData = ref({
    name: '',
    telephone: '',
    email: '',
    message: ''
})
const components = {
    BaseInput
}
function currentComponent(name) {
    return markRaw(components[name])
}
function updateFormData(propertyForm, value) {
    formData.value[propertyForm] = value;
}

</script>