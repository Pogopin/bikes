<template>
    <Medida />
    <Galery
      :data="bikesData"
    />
    <Tecnologia />
    <Brands />
    <Reviews />
    <Tarif />
</template>

<script setup>
import { Medida, Galery, Tecnologia, Brands, Reviews, Tarif } from '../components/widgets'
import { useBikesStore } from '../stores/bikesStore'
import { computed, onBeforeMount } from 'vue'

const bikesStore = useBikesStore();
const bikesData = computed(() => bikesStore.getBikesData);
onBeforeMount(() => {
  bikesStore.getBikes();
});
</script>