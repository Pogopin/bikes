<template>
    <section class="galery">
        <div class="container-fluid">
            <h1 class="galery__title">escolha a sua.</h1>
            <div v-if="!data">Данные загружаются!</div>
            <div 
                v-else
                class="galery__bikes bikes">
                <BikeCard
                    v-for="bike in props.data"
                    :key="bike.id"
                    :bikes_data="bike"
                >
                </BikeCard>
            </div>
        </div>
    </section>
</template>

<style scoped>
.galery {
    padding: 240px 0 200px;
}
@media (max-width: 1250px) {
    .galery {		
        padding: 30px 0 40px;
	}
}
.container-fluid {
    max-width: 1490px;
    padding: 0 15px;
    margin: 0 auto;
}
.galery__title {
    font-weight: 600;
    font-size: 64px;
    line-height: 72px;
    margin-bottom: 42px;
    margin-left: 116px;
}
@media (max-width: 990px) {
    .galery__title  {		
        text-align: center;
        margin-left: 0;
	}
}
.galery__bikes {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
}
@media (max-width: 1490px) {
    .galery__bikes {		
        justify-content: center;
		align-items: center;
	}
}
</style>
<script setup>
import { BikeCard } from '../index'
import { defineProps } from 'vue'

const props = defineProps({
    data: Object
})
</script>
