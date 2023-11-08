<template>
    <section class="tarif">
        <div class="tarif__container">
            <h1 
                v-if="props.visibleTitle === true"
                class="tarif__title"
            >seguros.
            </h1>
            <div class="tarif__content">
                <TarifCard
                    v-for="el in data"
                    :key="el.id"
                    :tarifInfo="el.tarifInfo"
                    :data="el.specification"
                    :btnText="el.btnText"
                    :customColorState="el.customColorState"
                ></TarifCard>
            </div>
        </div>
    </section>
</template>

<style scoped>
.none {
    display: none;
}
.tarif {
    padding: 60px 0 120px;
    background-color: var(--bg-second-color);
}
.tarif__title {
    color: var(--tree-text-color);
    font-weight: 600;
    font-size: 64px;
    line-height: 72px;
    margin-bottom: 60px;
}
@media (max-width: 1024px) {
    .tarif__title  {
		text-align: center;
        font-size: 5rem;
	}
}
.tarif__content {
    display: flex;
    align-items: center;
    gap: 41px;
}
@media (max-width: 1024px) {
    .tarif__content  {
		flex-wrap: wrap;
        justify-content: center;
	}
}
</style>
<script setup>
import { defineProps } from 'vue'
import { TarifCard } from '../index'
import { data } from '../../../config/tarifConfig.js'

const props = defineProps({
    visibleTitle: Boolean
})
</script>
