<template>
    <Medida />
    <Galery
      :data="bikesData"
    />
    <Tecnologia />
    <Brands />
    <Reviews />
    <Tarif />
    <Contacts />
</template>

<script setup>
import { Medida, Galery, Tecnologia, Brands, Reviews, Tarif, Contacts } from '../components/widgets'
import { Header, Footer } from '../components/sections/'
import { useBikesStore } from '../stores/bikesStore'
import { computed, onBeforeMount, onMounted } from 'vue'

const bikesStore = useBikesStore();
const bikesData = computed(() => bikesStore.getBikesData);
onBeforeMount(() => {
  bikesStore.getBikes();
});
</script>