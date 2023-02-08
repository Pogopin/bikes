<template>
    <section class="galery">
        <div class="container-fluid">
            <h1 class="galery__title">escolha a sua.</h1>
            <div class="galery__bikes bikes">
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
.galery__bikes {
    display: flex;
    gap: 40px;
}
</style>
<script setup>
import { BikeCard } from '../index'
import { defineProps, ref, toRefs} from 'vue'
const props = defineProps({
    data: Object
})

</script>
