<template>
    <HeaderInner
        text="COTAÇÕES NO SEU EMAIL."
        title="solicite um orçamento."
    />
    <OrderForm
        :bikes="listBikes"
    />
</template>

<script setup>
import { defineProps, computed, onBeforeMount } from 'vue';
import { HeaderInner, OrderForm } from '../../components/widgets/';
import { useBikesStore } from '../../stores/bikesStore';

const props = defineProps({
    id: String
});
const bikesStore = useBikesStore();
const listBikes = computed(() => bikesStore.getBikesData);
onBeforeMount(() => {
  bikesStore.getBikes();
});
// console.log(props.id)
</script>
