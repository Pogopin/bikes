<template>
    <div class="tarif__item-prata prata-item">
        <div class="prata-item__header header-item">
            <div class="header-item__name" :class="{'accent-color': t_name.text === 'OURO'}">{{t_name.text}}</div>
            <div class="header-item__price">{{t_name.price}}</div>
        </div>
        <ul class="prata-item__list">
            <li
                v-for="el in t_data"
                :key="el.name"
            >{{el.name}}</li>
        </ul>
        <TarifButton v-show="t_name.text === 'PRATA'"
            :title="'INSCREVA-SE'"
            :customButton="true"
            :btn="false"
        ></TarifButton>
        <TarifButton v-show="t_name.text === 'OURO'"
            :title="'INSCREVA-SE'"
            :customButton="false"
            :btn="true"
        ></TarifButton>
    </div>
</template>

<style scoped>
.tarif__item-prata{
    padding: 20px 32px 44px 60px;
    background-color: var(--bg-color);
    flex-basis: 561px;
    border-radius: 5px;
    height: fit-content;
}
.prata-item__header {
    max-width: 464px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
}
.prata-item__list {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    color: var(--text-color);
    font-size: 18px;
    line-height: 24px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 32px;
}
.prata-item__list li {
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    position: relative;
}
.prata-item__list li::before {
    content: '';
    width: 24px;
    height: 19px;
    position: absolute;
    color: var(--accent-color);
    background: url('@/assets/img/icon/Vector.svg') no-repeat;
    left: -24px;
    top: 6px;
}

.header-item__name {
    color: var(--c6);
    font-weight: 600;
    font-size: 36px;
    line-height: 48px;
}
.header-item__name.accent-color {
    color: var(--accent-color);
}
.header-item__price {
    color: var(--text-color);
    font-weight: 600;
    font-size: 36px;
    line-height: 48px;
}

</style>

<script setup lang="js">
import TarifButton from '@/components/ui/button.vue';
import { defineProps, ref } from "vue";

export default {
    name: "tarif-card",
    components: {
        TarifButton
    },
    props: {
        name: {
            type: Object,
            default() {
                return {};
            }
        },
        data: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    setup(props) {
        const t_name = props.name;
        const t_data = props.data;
        return {t_name, t_data};
    }
}

</script>
