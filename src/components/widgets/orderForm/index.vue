<template>
    <section class="order-form">
        <div class="order-form__container">
            <div class="options__item item">
                <h4 class="item__title">bikecraft ou seguro?</h4>
                <div class="item__body">
                    
                    <RadioButton
                        name="term"
                        :checked="true"
                        :value="'Bikcraft'"
                        @change="isActive($event)"
                    />
                    <RadioButton
                        name="term"
                        :checked="false"
                        :value="'Seguro'"
                        @change="isActive($event)"
                    />
                </div>
                <div class="item__options-status status">
                    <h4 class="item__title">ESCOLHA A SUA:</h4>
                    <div>
                        <RadioButton
                            class="mod-display"
                            name="selectBike"
                            :checked="false"
                            :value="'Nimbus Stark'"
                            @change="isActive($event)"
                        />
                    </div>
                    <div>
                        <RadioButton
                            class="mod-display"
                            name="selectBike"
                            :checked="false"
                            :value="'Magic Migth'"
                            @change="isActive($event)"
                        />
                    </div>
                    <div>
                        <RadioButton
                            class="mod-display"
                            name="selectBike"
                            :checked="false"
                            :value="'Nebula Cosmic'"
                            @change="isActive($event)"
                        />
                        <div class="status__info-bike none">
                            <ul class="status__list">
                                <li>Motor Elétrico</li>
                                <li>Fibra de Carbono</li>
                                <li>40km/h</li>
                                <li>Rastreador</li>
                            </ul>
                        </div>
                    </div>
                    
                    
                </div>
                
            </div>
            <div class="form-request__item item">
                <form class="form">
                    <div class="form__information information">
                        <h4 class="information__title">Dados Pessoais</h4>
                        <div class="personal__information-block">
                            <div>
                                <BaseInput
                                    label="Nome"
                                    placeholder=""
                                    name="Name"
                                    type="text"
                                />
                            </div>
                            <div>
                                <BaseInput
                                    label="Sobrenome"
                                    placeholder=""
                                    name="Surname"
                                    type="text"
                                />
                            </div>
                            <div class="input">
                                <BaseInput
                                    label="CPF"
                                    placeholder="000.000.000-00"
                                    name="CPF"
                                    type="text"
                                />
                            </div>
                            <div class="input">
                                <BaseInput
                                    label="Email"
                                    placeholder=""
                                    name="CPF"
                                    type="text"
                                />
                            </div>
                        </div>
                    </div>

                    <div class="form__delivery delivery">
                        <h4 class="delivery__title">delivery</h4>
                        <div class="delivery-block">

                            <div>
                                <BaseInput
                                    label="CEP"
                                    placeholder=""
                                    name="pocket"
                                    type="text"
                                />
                            </div>
                            <div>
                                <BaseInput
                                    label="Número"
                                    placeholder=""
                                    name="Number"
                                    type="text"
                                />
                            </div>
                            <div>
                                <BaseInput
                                    label="Logradouro"
                                    placeholder="Rua, avenida..."
                                    name="Public"
                                    type="text"
                                />
                            </div>
                            <div>
                                <BaseInput
                                    label="Bairro"
                                    placeholder=""
                                    name="Area"
                                    type="text"
                                />
                            </div>
                            <div>
                                <BaseInput
                                    label="Cidade"
                                    placeholder="Rua, avenida..."
                                    name="City"
                                    type="text"
                                />
                            </div>
                            <div>
                                <BaseInput
                                    label="Estado"
                                    placeholder=""
                                    name="State"
                                    type="text"
                                />
                            </div>   
                        </div>

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
.status__list {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: var(--bikes-card-color);
    padding-left: 40px;
    padding-bottom: 10px;
}
.status__list li {
    margin-bottom: 8px;
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
    letter-spacing: 1.5%;
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
    letter-spacing: 1.5%;
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
import { onMounted, defineProps } from 'vue';
import { RadioButton, BaseInput, BaseButton } from '../../ui';
import { chooseBike } from '../../../config/chooseBike.js';

const props = defineProps({
    bikes: Object
})
onMounted(()=> {
    const up_names = document.getElementsByName("selectBike");
    console.log(up_names);
    console.log(chooseBike);
    // console.log(props.bikes);
    // [ { "name": "Motor Elétrico", "icon": "eletrica.svg" },
    //   { "name": "Fibra de Carbono", "icon": "lines.svg" },
    //   { "name": "40km/h", "icon": "velocidade.svg" },
    //   { "name": "Rastreador", "icon": "rastreador.svg" } 
    // ]
})

function isActive(event) {
    // console.log(event.target)
    if(event.target.name == 'selectBike') {
        if(document.querySelector('.radio.back')) {
            document.querySelector('.radio.back').classList.remove('back');
            event.target.parentNode.classList.add('back');
        }
        else {
            event.target.parentNode.classList.add('back');
        }       
        
    }
    if(event.target.name == 'term') {
        document.querySelector('.radio.active').classList.remove('active');
        event.target.parentNode.classList.add('active');
    }
    
}

</script>
